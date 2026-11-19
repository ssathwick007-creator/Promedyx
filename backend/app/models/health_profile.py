from sqlalchemy import Column, Integer, String, Float, Text, DateTime, ForeignKey
from sqlalchemy.sql import func
from sqlalchemy.orm import relationship
from app.database import Base


class HealthProfile(Base):
    __tablename__ = "health_profiles"

    id = Column(Integer, primary_key=True, index=True, autoincrement=True)
    user_id = Column(Integer, ForeignKey("users.id", ondelete="CASCADE"), unique=True, nullable=False, index=True)

    date_of_birth = Column(String(20), nullable=True)
    gender = Column(String(30), nullable=True)
    blood_type = Column(String(10), nullable=True)
    emergency_contact_name = Column(String(255), nullable=True)
    emergency_contact_phone = Column(String(50), nullable=True)
    emergency_contact_relation = Column(String(100), nullable=True)
    medical_notes = Column(Text, nullable=True)

    # Baselines & Preferences
    baseline_temperature = Column(Float, default=98.4, nullable=False)
    baseline_activity_target = Column(Integer, default=6000, nullable=False)  # target steps / intensity
    temperature_unit_preference = Column(String(5), default="F", nullable=False)
    monitoring_frequency = Column(String(30), default="continuous", nullable=False)

    created_at = Column(DateTime(timezone=True), server_default=func.now(), nullable=False)
    updated_at = Column(DateTime(timezone=True), server_default=func.now(), onupdate=func.now(), nullable=False)

    # Relationships
    user = relationship("User", back_populates="health_profile")
