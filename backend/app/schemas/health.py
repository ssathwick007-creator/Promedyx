from datetime import datetime
from typing import Optional, Dict, Any
from pydantic import BaseModel, Field


class HealthCheckResponse(BaseModel):
    status: str = Field(..., example="healthy")
    app_name: str = Field(..., example="PulseGuard Clinical Telemetry API")
    version: str = Field(..., example="0.1.0")
    environment: str = Field(..., example="development")
    database: str = Field(..., example="connected")
    monitoring_mode: str = Field(..., example="simulation")
    active_sensors_count: int = Field(default=0, example=5)
    timestamp: datetime = Field(default_factory=datetime.utcnow)
    diagnostics: Optional[Dict[str, Any]] = None
