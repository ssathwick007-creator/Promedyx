from sqlalchemy import Column, Integer, String, Boolean, Float, DateTime
from sqlalchemy.sql import func
from sqlalchemy.orm import relationship
from app.database import Base


class Sensor(Base):
    __tablename__ = "sensors"

    id = Column(Integer, primary_key=True, index=True, autoincrement=True)
    sensor_code = Column(String(50), unique=True, index=True, nullable=False)  # e.g., 'TEMP-01', 'IMU-01'
    name = Column(String(150), nullable=False)
    sensor_type = Column(String(50), nullable=False, index=True)  # 'temperature', 'movement', 'accelerometer', 'buzzer', 'led', 'push_button'
    model = Column(String(100), nullable=True)  # e.g., 'DS18B20', 'LM35', 'MPU-6050', 'PIR'
    hardware_interface = Column(String(50), default="mock", nullable=False)  # 'serial', 'i2c', 'gpio', 'mock', 'websocket'
    hardware_pin_or_port = Column(String(50), nullable=True)  # e.g. 'COM3', 'A0', 'GPIO17'
    sampling_rate_hz = Column(Float, default=1.0, nullable=False)
    calibration_offset = Column(Float, default=0.0, nullable=False)
    is_simulated = Column(Boolean, default=True, nullable=False)
    status = Column(String(50), default="online", index=True, nullable=False)  # 'online', 'offline', 'error', 'calibrating'

    last_seen_at = Column(DateTime(timezone=True), nullable=True)
    created_at = Column(DateTime(timezone=True), server_default=func.now(), nullable=False)

    # Relationships
    readings = relationship("SensorReading", back_populates="sensor", cascade="all, delete-orphan")
    alerts = relationship("Alert", back_populates="sensor")
