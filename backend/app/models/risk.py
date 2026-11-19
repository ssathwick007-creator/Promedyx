from sqlalchemy import Column, Integer, String, Float, Text, DateTime, ForeignKey
from sqlalchemy.sql import func
from sqlalchemy.orm import relationship
from app.database import Base


class RiskAssessment(Base):
    __tablename__ = "risk_assessments"

    id = Column(Integer, primary_key=True, index=True, autoincrement=True)
    user_id = Column(Integer, ForeignKey("users.id", ondelete="CASCADE"), nullable=False, index=True)
    session_id = Column(Integer, ForeignKey("monitoring_sessions.id", ondelete="SET NULL"), nullable=True, index=True)

    score = Column(Float, nullable=False)  # 0 to 100
    risk_level = Column(String(30), default="low", index=True, nullable=False)  # 'low', 'medium', 'high', 'critical'
    confidence = Column(Float, default=0.95, nullable=False)  # 0.0 to 1.0
    factors = Column(Text, nullable=True)  # JSON-encoded factor explanations
    explanation = Column(Text, nullable=False)
    source = Column(String(30), default="simulation", index=True, nullable=False)  # 'hardware', 'simulation'
    algorithm_version = Column(String(50), default="1.0-rules-engine", nullable=False)

    timestamp = Column(DateTime(timezone=True), server_default=func.now(), index=True, nullable=False)

    # Relationships
    user = relationship("User", back_populates="risk_assessments")
    session = relationship("MonitoringSession", back_populates="risk_assessments")
