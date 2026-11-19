import os
from typing import List, Union
from pydantic import field_validator
from pydantic_settings import BaseSettings, SettingsConfigDict


class Settings(BaseSettings):
    PROJECT_NAME: str = "PulseGuard Clinical Telemetry API"
    TAGLINE: str = "Context-Aware Real-Time Health Monitoring & Early Warning System"
    VERSION: str = "0.1.0"
    API_V1_STR: str = "/api/v1"
    ENVIRONMENT: str = "development"
    DEBUG: bool = True

    # Database Configuration (SQLite by default; plug-and-play for PostgreSQL)
    DATABASE_URL: str = "sqlite:///./pulseguard.db"

    # CORS Configuration
    CORS_ORIGINS: List[str] = [
        "http://localhost:5173",
        "http://localhost:3000",
        "http://127.0.0.1:5173",
        "http://127.0.0.1:3000",
    ]

    # Security
    SECRET_KEY: str = "pulseguard-development-secret-key-change-in-production-2026"
    ACCESS_TOKEN_EXPIRE_MINUTES: int = 60 * 24  # 24 hours

    # Hardware & Telemetry Defaults
    DEFAULT_MONITORING_MODE: str = "simulation"  # 'hardware', 'simulation', 'offline'
    DEFAULT_SAMPLING_RATE_HZ: int = 250
    HARDWARE_SERIAL_PORT: str = "COM3"
    HARDWARE_BAUD_RATE: int = 115200

    @field_validator("DEBUG", mode="before")
    @classmethod
    def parse_debug(cls, v):
        if isinstance(v, bool):
            return v
        if isinstance(v, str):
            return v.lower() in ("true", "1", "t", "yes", "y", "debug", "dev")
        return bool(v)

    model_config = SettingsConfigDict(
        env_file=".env",
        env_file_encoding="utf-8",
        case_sensitive=True,
        extra="ignore",
    )


settings = Settings()
