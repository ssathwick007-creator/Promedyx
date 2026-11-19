from sqlalchemy import Column, Integer, String, Boolean, DateTime
from sqlalchemy.sql import func
from sqlalchemy.orm import relationship
from app.database import Base


class User(Base):
    __tablename__ = "users"

    id = Column(Integer, primary_key=True, index=True, autoincrement=True)
    username = Column(String(100), unique=True, index=True, nullable=False)
    email = Column(String(255), unique=True, index=True, nullable=False)
    full_name = Column(String(255), nullable=False)
    hashed_password = Column(String(255), nullable=False)
    role = Column(String(50), default="operator", nullable=False)  # 'operator', 'patient', 'caregiver', 'admin'
    is_active = Column(Boolean, default=True, nullable=False)
    is_superuser = Column(Boolean, default=False, nullable=False)
    created_at = Column(DateTime(timezone=True), server_default=func.now(), nullable=False)
    updated_at = Column(DateTime(timezone=True), server_default=func.now(), onupdate=func.now(), nullable=False)

    # Relationships
    health_profile = relationship("HealthProfile", back_populates="user", uselist=False, cascade="all, delete-orphan")
    caregiver_profile = relationship("Caregiver", back_populates="user", uselist=False, cascade="all, delete-orphan")
    settings = relationship("UserSettings", back_populates="user", uselist=False, cascade="all, delete-orphan")
    monitoring_sessions = relationship("MonitoringSession", back_populates="user", cascade="all, delete-orphan")
    sensor_readings = relationship("SensorReading", back_populates="user", cascade="all, delete-orphan")
    risk_assessments = relationship("RiskAssessment", back_populates="user", cascade="all, delete-orphan")
    alerts = relationship("Alert", foreign_keys="Alert.user_id", back_populates="user", cascade="all, delete-orphan")
