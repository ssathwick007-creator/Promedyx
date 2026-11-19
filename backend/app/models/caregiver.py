from sqlalchemy import Column, Integer, String, DateTime, ForeignKey, Text
from sqlalchemy.sql import func
from sqlalchemy.orm import relationship
from app.database import Base


class Caregiver(Base):
    __tablename__ = "caregivers"

    id = Column(Integer, primary_key=True, index=True, autoincrement=True)
    user_id = Column(Integer, ForeignKey("users.id", ondelete="CASCADE"), unique=True, nullable=False, index=True)

    qualification = Column(String(255), nullable=True)
    organization = Column(String(255), nullable=True)
    phone_number = Column(String(50), nullable=True)
    notification_channel = Column(String(50), default="all", nullable=False)  # 'email', 'sms', 'in-app', 'all'

    created_at = Column(DateTime(timezone=True), server_default=func.now(), nullable=False)
    updated_at = Column(DateTime(timezone=True), server_default=func.now(), onupdate=func.now(), nullable=False)

    # Relationships
    user = relationship("User", back_populates="caregiver_profile")
    patient_relationships = relationship("CaregiverRelationship", back_populates="caregiver", cascade="all, delete-orphan")


class CaregiverRelationship(Base):
    __tablename__ = "caregiver_relationships"

    id = Column(Integer, primary_key=True, index=True, autoincrement=True)
    caregiver_id = Column(Integer, ForeignKey("caregivers.id", ondelete="CASCADE"), nullable=False, index=True)
    patient_id = Column(Integer, ForeignKey("users.id", ondelete="CASCADE"), nullable=False, index=True)

    relationship_type = Column(String(100), default="primary_caregiver", nullable=False)
    permissions = Column(String(255), default="view_telemetry,receive_alerts,acknowledge_alerts", nullable=False)
    status = Column(String(50), default="active", index=True, nullable=False)  # 'active', 'pending', 'revoked'

    created_at = Column(DateTime(timezone=True), server_default=func.now(), nullable=False)
    updated_at = Column(DateTime(timezone=True), server_default=func.now(), onupdate=func.now(), nullable=False)

    # Relationships
    caregiver = relationship("Caregiver", back_populates="patient_relationships")
    patient = relationship("User", foreign_keys=[patient_id])
