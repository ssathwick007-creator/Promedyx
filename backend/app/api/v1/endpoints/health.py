from datetime import datetime, timezone
from fastapi import APIRouter, Depends, status
from sqlalchemy.orm import Session
from sqlalchemy import text
from app.database import get_db
from app.config import settings
from app.schemas.health import HealthCheckResponse
from app.models.sensor import Sensor

router = APIRouter()


@router.get(
    "/health",
    response_model=HealthCheckResponse,
    status_code=status.HTTP_200_OK,
    summary="API & Telemetry Health Status",
    description="Returns backend health, database connectivity status, active sensors count, and telemetry mode.",
)
def get_system_health(db: Session = Depends(get_db)):
    db_status = "connected"
    active_sensors = 0

    try:
        # Verify database connection
        db.execute(text("SELECT 1"))
        active_sensors = db.query(Sensor).filter(Sensor.status == "online").count()
    except Exception as exc:
        db_status = f"error: {str(exc)}"

    return HealthCheckResponse(
        status="healthy" if db_status == "connected" else "degraded",
        app_name=settings.PROJECT_NAME,
        version=settings.VERSION,
        environment=settings.ENVIRONMENT,
        database=db_status,
        monitoring_mode=settings.DEFAULT_MONITORING_MODE,
        active_sensors_count=active_sensors,
        timestamp=datetime.now(timezone.utc),
        diagnostics={
            "tagline": settings.TAGLINE,
            "sampling_rate_hz": settings.DEFAULT_SAMPLING_RATE_HZ,
            "database_dialect": db.bind.dialect.name if hasattr(db, "bind") and db.bind else "sqlite",
        },
    )
