import unittest
from fastapi.testclient import TestClient
from app.main import app


class TestHealthEndpoints(unittest.TestCase):
    @classmethod
    def setUpClass(cls):
        cls.client = TestClient(app)

    def test_root_endpoint(self):
        response = self.client.get("/")
        self.assertEqual(response.status_code, 200)
        data = response.json()
        self.assertEqual(data["status"], "online")
        self.assertIn("PulseGuard", data["system"])
        self.assertEqual(data["version"], "0.1.0")

    def test_top_level_health(self):
        response = self.client.get("/health")
        self.assertEqual(response.status_code, 200)
        data = response.json()
        self.assertEqual(data["status"], "healthy")

    def test_api_v1_health_detailed(self):
        response = self.client.get("/api/v1/health")
        self.assertEqual(response.status_code, 200)
        data = response.json()
        self.assertEqual(data["status"], "healthy")
        self.assertEqual(data["database"], "connected")
        self.assertGreaterEqual(data["active_sensors_count"], 1)
        self.assertEqual(data["monitoring_mode"], "simulation")
        self.assertIn("timestamp", data)
        self.assertIn("diagnostics", data)


if __name__ == "__main__":
    unittest.main()
