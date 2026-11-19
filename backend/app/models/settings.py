from sqlalchemy import Column, Integer, String, Boolean, Float, DateTime, ForeignKey
from sqlalchemy.sql import func
from sqlalchemy.orm import relationship
from app.database import Base


class UserSettings(Base):
    __tablename__ = "user_settings"

    id = Column(Integer, primary_key=True, index=True, autoincrement=True)
    user_id = Column(Integer, ForeignKey("users.id", ondelete="CASCADE"), unique=True, nullable=False, index=True)

    theme = Column(String(30), default="clinical-light", nullable=False)
    notifications_sound = Column(Boolean, default=True, nullable=False)
    notifications_push = Column(Boolean, default=True, nullable=False)
    temperature_unit = Column(String(5), default="F", nullable=False)  # 'F' or 'C'
    hardware_port = Column(String(50), default="COM3", nullable=False)
    hardware_baud_rate = Column(Integer, default=115200, nullable=False)
    simulation_mode = Column(Boolean, default=True, nullable=False)
    alert_sound_enabled = Column(Boolean, default=True, nullable=False)

    # Threshold configurations
    high_temp_threshold = Column(Float, default=100.4, nullable=False)
    low_temp_threshold = Column(Float, default=95.0, nullable=False)
    prolonged_inactivity_minutes = Column(Integer, default=90, nullable=False)

    created_at = Column(DateTime(timezone=True), server_default=func.now(), nullable=False)
    updated_at = Column(DateTime(timezone=True), server_default=func.now(), onupdate=func.now(), nullable=False)

    # Relationships
    user = relationship("User", back_populates="settings")
