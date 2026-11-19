from sqlalchemy import Column, Integer, String, Text, DateTime, ForeignKey
from sqlalchemy.sql import func
from sqlalchemy.orm import relationship
from app.database import Base


class Alert(Base):
    __tablename__ = "alerts"

    id = Column(Integer, primary_key=True, index=True, autoincrement=True)
    user_id = Column(Integer, ForeignKey("users.id", ondelete="CASCADE"), nullable=True, index=True)
    sensor_id = Column(Integer, ForeignKey("sensors.id", ondelete="SET NULL"), nullable=True, index=True)

    alert_code = Column(String(50), nullable=False, index=True)  # e.g. 'ALT-1092', 'THERMAL_SPIKE'
    severity = Column(String(30), nullable=False, index=True)  # 'info', 'warning', 'critical'
    title = Column(String(255), nullable=False)
    message = Column(Text, nullable=False)
    source = Column(String(30), default="simulation", index=True, nullable=False)  # 'hardware', 'simulation', 'ai_risk_engine'
    channel = Column(String(100), default="Clinical Telemetry", nullable=False)
    status = Column(String(30), default="active", index=True, nullable=False)  # 'active', 'acknowledged', 'resolved'

    acknowledged_at = Column(DateTime(timezone=True), nullable=True)
    acknowledged_by_id = Column(Integer, ForeignKey("users.id", ondelete="SET NULL"), nullable=True)
    resolved_at = Column(DateTime(timezone=True), nullable=True)
    resolved_by_id = Column(Integer, ForeignKey("users.id", ondelete="SET NULL"), nullable=True)

    created_at = Column(DateTime(timezone=True), server_default=func.now(), index=True, nullable=False)

    # Relationships
    user = relationship("User", foreign_keys=[user_id], back_populates="alerts")
    sensor = relationship("Sensor", back_populates="alerts")
    acknowledged_by = relationship("User", foreign_keys=[acknowledged_by_id])
    resolved_by = relationship("User", foreign_keys=[resolved_by_id])
