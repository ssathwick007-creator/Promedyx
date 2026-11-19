from sqlalchemy import Column, Integer, String, Float, Text, DateTime, ForeignKey
from sqlalchemy.sql import func
from sqlalchemy.orm import relationship
from app.database import Base


class MonitoringSession(Base):
    __tablename__ = "monitoring_sessions"

    id = Column(Integer, primary_key=True, index=True, autoincrement=True)
    session_code = Column(String(100), unique=True, index=True, nullable=False)
    user_id = Column(Integer, ForeignKey("users.id", ondelete="CASCADE"), nullable=False, index=True)

    mode = Column(String(30), default="simulation", index=True, nullable=False)  # 'hardware', 'simulation', 'offline'
    status = Column(String(30), default="active", index=True, nullable=False)  # 'active', 'paused', 'completed'
    sampling_rate_hz = Column(Float, default=250.0, nullable=False)
    hardware_device = Column(String(100), default="Arduino UNO / Mock Streamer", nullable=False)

    started_at = Column(DateTime(timezone=True), server_default=func.now(), nullable=False, index=True)
    ended_at = Column(DateTime(timezone=True), nullable=True)
    notes = Column(Text, nullable=True)

    # Relationships
    user = relationship("User", back_populates="monitoring_sessions")
    readings = relationship("SensorReading", back_populates="session", cascade="all, delete-orphan")
    risk_assessments = relationship("RiskAssessment", back_populates="session", cascade="all, delete-orphan")
