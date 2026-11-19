from sqlalchemy import Column, Integer, String, Float, Text, DateTime, ForeignKey
from sqlalchemy.sql import func
from sqlalchemy.orm import relationship
from app.database import Base


class SensorReading(Base):
    __tablename__ = "sensor_readings"

    id = Column(Integer, primary_key=True, index=True, autoincrement=True)
    sensor_id = Column(Integer, ForeignKey("sensors.id", ondelete="SET NULL"), nullable=True, index=True)
    user_id = Column(Integer, ForeignKey("users.id", ondelete="CASCADE"), nullable=True, index=True)
    session_id = Column(Integer, ForeignKey("monitoring_sessions.id", ondelete="SET NULL"), nullable=True, index=True)

    reading_type = Column(String(50), nullable=False, index=True)  # 'temperature', 'movement', 'acceleration', 'ambient_temp'
    value = Column(Float, nullable=False)
    unit = Column(String(20), nullable=False)  # 'degF', 'degC', 'intensity', 'count', 'm/s2'
    source = Column(String(30), default="simulation", index=True, nullable=False)  # 'hardware', 'simulation', 'offline_replay'
    quality_score = Column(Float, default=1.0, nullable=False)  # 0.0 to 1.0 (signal integrity)
    raw_metadata = Column(Text, nullable=True)  # Optional JSON payload string for hardware debug

    timestamp = Column(DateTime(timezone=True), server_default=func.now(), index=True, nullable=False)

    # Relationships
    sensor = relationship("Sensor", back_populates="readings")
    user = relationship("User", back_populates="sensor_readings")
    session = relationship("MonitoringSession", back_populates="readings")
