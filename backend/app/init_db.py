import json
from datetime import datetime, timezone, timedelta
from app.database import engine, Base, SessionLocal
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
from app.core.security import get_password_hash


def init_db():
    """Create all tables and seed initial demo data if database is fresh."""
    Base.metadata.create_all(bind=engine)

    db = SessionLocal()
    try:
        # Check if users already exist
        existing_user = db.query(User).first()
        if existing_user:
            return {"status": "already_initialized", "message": "Database tables and seed data already present."}

        # 1. Seed Primary User
        user = User(
            username="julian_vance",
            email="julian.vance@pulseguard.io",
            full_name="Dr. Julian Vance",
            hashed_password=get_password_hash("PulseGuardDemo2026!"),
            role="operator",
            is_active=True,
            is_superuser=True,
        )
        db.add(user)
        db.flush()

        # 2. Seed Health Profile
        profile = HealthProfile(
            user_id=user.id,
            date_of_birth="1985-06-12",
            gender="Male",
            blood_type="O+",
            emergency_contact_name="Elena Vance",
            emergency_contact_phone="+1 (555) 234-5678",
            emergency_contact_relation="Spouse",
            medical_notes="Non-smoker, mild seasonal asthma, regular aerobic training.",
            baseline_temperature=98.4,
            baseline_activity_target=6500,
            temperature_unit_preference="F",
            monitoring_frequency="continuous",
        )
        db.add(profile)

        # 3. Seed User Settings
        settings = UserSettings(
            user_id=user.id,
            theme="clinical-light",
            notifications_sound=True,
            notifications_push=True,
            temperature_unit="F",
            hardware_port="COM3",
            hardware_baud_rate=115200,
            simulation_mode=True,
            alert_sound_enabled=True,
            high_temp_threshold=100.4,
            low_temp_threshold=95.0,
            prolonged_inactivity_minutes=90,
        )
        db.add(settings)

        # 4. Seed Hardware Sensors
        sensors = [
            Sensor(
                sensor_code="TEMP-01",
                name="Thermal & Body Temperature Sensor",
                sensor_type="temperature",
                model="DS18B20 / LM35",
                hardware_interface="serial",
                hardware_pin_or_port="A0",
                sampling_rate_hz=1.0,
                calibration_offset=0.0,
                is_simulated=True,
                status="online",
                last_seen_at=datetime.now(timezone.utc),
            ),
            Sensor(
                sensor_code="IMU-01",
                name="Kinetic Motion & Accelerometer",
                sensor_type="movement",
                model="MPU-6050",
                hardware_interface="i2c",
                hardware_pin_or_port="I2C-0x68",
                sampling_rate_hz=10.0,
                calibration_offset=0.0,
                is_simulated=True,
                status="online",
                last_seen_at=datetime.now(timezone.utc),
            ),
            Sensor(
                sensor_code="BUZZER-01",
                name="Active Alert Audio Transducer",
                sensor_type="buzzer",
                model="Piezo 5V Active",
                hardware_interface="gpio",
                hardware_pin_or_port="D8",
                sampling_rate_hz=0.0,
                calibration_offset=0.0,
                is_simulated=True,
                status="online",
                last_seen_at=datetime.now(timezone.utc),
            ),
            Sensor(
                sensor_code="LED-01",
                name="Multi-State Visual Telemetry LED",
                sensor_type="led",
                model="RGB Common Cathode",
                hardware_interface="gpio",
                hardware_pin_or_port="D9,D10,D11",
                sampling_rate_hz=0.0,
                calibration_offset=0.0,
                is_simulated=True,
                status="online",
                last_seen_at=datetime.now(timezone.utc),
            ),
            Sensor(
                sensor_code="BTN-01",
                name="Hardware Emergency / Acknowledge Button",
                sensor_type="push_button",
                model="Tactile Momentary Switch",
                hardware_interface="gpio",
                hardware_pin_or_port="D2",
                sampling_rate_hz=10.0,
                calibration_offset=0.0,
                is_simulated=True,
                status="online",
                last_seen_at=datetime.now(timezone.utc),
            ),
        ]
        db.add_all(sensors)
        db.flush()

        temp_sensor = sensors[0]
        imu_sensor = sensors[1]

        # 5. Seed Caregiver Profile
        caregiver = Caregiver(
            user_id=user.id,
            qualification="RN, Certified Clinical Monitoring Specialist",
            organization="PulseGuard Central Telemetry Center",
            phone_number="+1 (555) 019-2834",
            notification_channel="all",
        )
        db.add(caregiver)
        db.flush()

        relationship = CaregiverRelationship(
            caregiver_id=caregiver.id,
            patient_id=user.id,
            relationship_type="primary_caregiver",
            permissions="view_telemetry,receive_alerts,acknowledge_alerts",
            status="active",
        )
        db.add(relationship)

        # 6. Seed Active Monitoring Session
        session = MonitoringSession(
            session_code="PG-SESS-ALPHA-01",
            user_id=user.id,
            mode="simulation",
            status="active",
            sampling_rate_hz=250.0,
            hardware_device="Station Alpha-01 / Dual-Bus Architecture",
            notes="Station Alpha-01 Continuous Telemetry Baseline Session",
        )
        db.add(session)
        db.flush()

        # 7. Seed Initial Sensor Readings
        now = datetime.now(timezone.utc)
        readings = [
            SensorReading(
                sensor_id=temp_sensor.id,
                user_id=user.id,
                session_id=session.id,
                reading_type="temperature",
                value=98.4,
                unit="degF",
                source="simulation",
                quality_score=0.99,
                timestamp=now - timedelta(minutes=2),
            ),
            SensorReading(
                sensor_id=imu_sensor.id,
                user_id=user.id,
                session_id=session.id,
                reading_type="movement",
                value=46.0,  # intensity index
                unit="intensity",
                source="simulation",
                quality_score=0.98,
                timestamp=now - timedelta(minutes=2),
            ),
        ]
        db.add_all(readings)

        # 8. Seed Initial Risk Assessment
        risk = RiskAssessment(
            user_id=user.id,
            session_id=session.id,
            score=14.0,
            risk_level="low",
            confidence=0.982,
            factors=json.dumps([
                {"label": "Cardiovascular Stability", "score": "Nominal (68 bpm avg)", "status": "stable"},
                {"label": "Oxygen Saturation (SpO2)", "score": "Optimal (98.6% avg)", "status": "stable"},
                {"label": "Thermal Equilibrium", "score": "Standard (98.4 °F)", "status": "stable"},
                {"label": "Kinetic Context Model", "score": "Non-Sedentary Regular", "status": "info"},
            ]),
            explanation="Circadian vitals and kinetic movement patterns align within baseline parameters. No respiratory depression, erratic tachyarrhythmia, or sudden fall kinetics detected.",
            source="simulation",
            algorithm_version="1.0-rules-engine",
            timestamp=now - timedelta(minutes=1),
        )
        db.add(risk)

        # 9. Seed Initial Alerts
        alerts = [
            Alert(
                user_id=user.id,
                sensor_id=temp_sensor.id,
                alert_code="ALT-1092",
                severity="info",
                title="Skin Temperature Check",
                message="Slight thermal gradient (+0.3 °F) detected post-exercise. Normalized within 10 min.",
                source="simulation",
                channel="Thermal Sensor 01",
                status="resolved",
                created_at=now - timedelta(minutes=14),
                resolved_at=now - timedelta(minutes=4),
            ),
            Alert(
                user_id=user.id,
                sensor_id=imu_sensor.id,
                alert_code="ALT-1088",
                severity="warning",
                title="Prolonged Inactivity Window",
                message="Continuous sedentary interval exceeded 90 minutes. Prompted mild posture shift.",
                source="simulation",
                channel="IMU Motion Engine",
                status="acknowledged",
                created_at=now - timedelta(hours=1),
                acknowledged_at=now - timedelta(minutes=30),
            ),
            Alert(
                user_id=user.id,
                sensor_id=None,
                alert_code="ALT-1081",
                severity="info",
                title="Telemetry Packet Checksum",
                message="Sensor interface handshake verified. Serial bus link margin optimal.",
                source="simulation",
                channel="Protocol Layer",
                status="resolved",
                created_at=now - timedelta(hours=2),
                resolved_at=now - timedelta(hours=2),
            ),
        ]
        db.add_all(alerts)

        db.commit()
        return {"status": "success", "message": "Database initialized with tables and initial seed data."}

    except Exception as e:
        db.rollback()
        raise e
    finally:
        db.close()


if __name__ == "__main__":
    result = init_db()
    print("Database initialization result:", result)
