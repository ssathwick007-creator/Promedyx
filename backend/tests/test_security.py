import unittest
from app.core.security import get_password_hash, verify_password


class TestSecurity(unittest.TestCase):
    def test_password_hashing_and_verification(self):
        password = "SecurePassword2026!"
        hashed = get_password_hash(password)
        self.assertNotEqual(password, hashed)
        self.assertTrue(hashed.startswith("pbkdf2_sha256$"))
        self.assertTrue(verify_password(password, hashed))
        self.assertFalse(verify_password("WrongPassword!", hashed))

    def test_unique_salts_produce_distinct_hashes(self):
        password = "SamePassword123"
        hash1 = get_password_hash(password)
        hash2 = get_password_hash(password)
        self.assertNotEqual(hash1, hash2, "Hashes of the same password should differ due to distinct salts")
        self.assertTrue(verify_password(password, hash1))
        self.assertTrue(verify_password(password, hash2))


if __name__ == "__main__":
    unittest.main()
