import unittest
from sqlalchemy import inspect
from app.database import engine, SessionLocal
from app.models import (
    User,
    HealthProfile,
    Caregiver,
    CaregiverRelationship,
    Sensor,
    MonitoringSession,
    SensorReading,
    RiskAssessment,
    Alert,
    UserSettings,
)
from app.core.security import verify_password


class TestDatabaseFoundation(unittest.TestCase):
    @classmethod
    def setUpClass(cls):
        cls.db = SessionLocal()
        cls.inspector = inspect(engine)

    @classmethod
    def tearDownClass(cls):
        cls.db.close()

    def test_all_ten_tables_exist(self):
        expected_tables = {
            "users",
            "health_profiles",
            "caregivers",
            "caregiver_relationships",
            "sensors",
            "sensor_readings",
            "risk_assessments",
            "alerts",
            "monitoring_sessions",
            "user_settings",
        }
        actual_tables = set(self.inspector.get_table_names())
        for table in expected_tables:
            self.assertIn(table, actual_tables, f"Table {table} missing from database schema")

    def test_default_seeded_user(self):
        user = self.db.query(User).filter(User.username == "julian_vance").first()
        self.assertIsNotNone(user, "Default operator user 'julian_vance' was not found.")
        self.assertEqual(user.email, "julian.vance@pulseguard.io")
        self.assertEqual(user.role, "operator")
        self.assertTrue(verify_password("PulseGuardDemo2026!", user.hashed_password))

    def test_user_relationships(self):
        user = self.db.query(User).filter(User.username == "julian_vance").first()
        self.assertIsNotNone(user.health_profile)
        self.assertEqual(user.health_profile.baseline_temperature, 98.4)
        self.assertIsNotNone(user.settings)
        self.assertEqual(user.settings.theme, "clinical-light")
        self.assertIsNotNone(user.caregiver_profile)

    def test_sensors_seeded(self):
        sensors = self.db.query(Sensor).all()
        self.assertGreaterEqual(len(sensors), 4)
        codes = [s.sensor_code for s in sensors]
        self.assertIn("TEMP-01", codes)
        self.assertIn("IMU-01", codes)
        self.assertIn("BUZZER-01", codes)
        self.assertIn("LED-01", codes)

    def test_initial_session_and_telemetry(self):
        session = self.db.query(MonitoringSession).filter(MonitoringSession.session_code == "PG-SESS-ALPHA-01").first()
        self.assertIsNotNone(session)
        self.assertEqual(session.status, "active")

        readings = self.db.query(SensorReading).filter(SensorReading.session_id == session.id).all()
        self.assertGreaterEqual(len(readings), 1)

    def test_initial_risk_and_alerts(self):
        risk = self.db.query(RiskAssessment).first()
        self.assertIsNotNone(risk)
        self.assertEqual(risk.risk_level, "low")
        self.assertGreater(risk.score, 0)

        alerts = self.db.query(Alert).all()
        self.assertGreaterEqual(len(alerts), 2)


if __name__ == "__main__":
    unittest.main()
