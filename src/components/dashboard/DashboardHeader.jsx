import React, { useState, useRef, useEffect } from 'react';
import {
  Bell,
  Menu,
  ShieldCheck,
  User,
  Settings,
  LogOut,
  Calendar,
  CheckCheck,
  ChevronDown,
  Radio,
} from 'lucide-react';
import { Badge } from '@/components/ui';
import { DEMO_NOTIFICATIONS, DEMO_USER_PROFILE } from '@/utils';

export function DashboardHeader({ onToggleMobileSidebar, activeTabTitle = 'Overview' }) {
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const [notifications, setNotifications] = useState(DEMO_NOTIFICATIONS);

  const notificationRef = useRef(null);
  const profileRef = useRef(null);

  const unreadCount = notifications.filter((n) => !n.read).length;

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        notificationRef.current &&
        !notificationRef.current.contains(event.target)
      ) {
        setNotificationsOpen(false);
      }
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setProfileOpen(false);
      }
    }

    function handleKeyDown(event) {
      if (event.key === 'Escape') {
        setNotificationsOpen(false);
        setProfileOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const markAllAsRead = () => {
    setNotifications((prev) => prev.map((item) => ({ ...item, read: true })));
  };

  const currentDateFormatted = new Date().toLocaleDateString('en-US', {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });

  return (
    <header className="sticky top-0 z-30 bg-white border-b border-[#E5EAE6] px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
      {/* Left: Title, Breadcrumb & Mobile Menu Toggle */}
      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={onToggleMobileSidebar}
          className="lg:hidden p-2 rounded-lg text-[#718078] hover:text-[#20332F] hover:bg-[#F3F5F2] transition-colors"
          aria-label="Open sidebar navigation"
        >
          <Menu className="w-5 h-5" />
        </button>

        <div className="flex flex-col">
          <div className="flex items-center gap-2">
            <h1 className="text-base sm:text-lg font-bold tracking-tight text-[#20332F] leading-none">
              {activeTabTitle}
            </h1>
            <Badge variant="info" className="hidden sm:inline-flex text-[11px] py-0 px-2 font-medium">
              Continuous Telemetry
            </Badge>
          </div>
          <span className="text-xs text-[#718078] mt-1 flex items-center gap-1.5">
            <span>Welcome back, {DEMO_USER_PROFILE.name}</span>
            <span className="text-[#E5EAE6] hidden sm:inline">•</span>
            <span className="hidden sm:inline text-[#718078]">Central Clinical Station</span>
          </span>
        </div>
      </div>

      {/* Right Controls: Date, Stream Beacon, Notifications, Profile */}
      <div className="flex items-center gap-2 sm:gap-3">
        {/* Date Display */}
        <div className="hidden md:flex items-center gap-1.5 text-xs text-[#718078] bg-[#F8FAF9] px-3 py-1.5 rounded-lg border border-[#E5EAE6]">
          <Calendar className="w-3.5 h-3.5 text-[#267C70]" />
          <span>{currentDateFormatted}</span>
        </div>

        {/* Live Monitoring Status Pill */}
        <div className="hidden sm:flex items-center gap-2 bg-[#EAF3F0] border border-[#D2E5DE] px-3 py-1.5 rounded-lg text-xs">
          <span className="w-2 h-2 rounded-full bg-[#27856A] animate-pulse"></span>
          <span className="text-[#27856A] font-medium">Monitoring Active</span>
        </div>

        {/* Notification Icon & Dropdown */}
        <div className="relative" ref={notificationRef}>
          <button
            type="button"
            onClick={() => {
              setNotificationsOpen(!notificationsOpen);
              setProfileOpen(false);
            }}
            className={`relative p-2 rounded-lg transition-colors border ${
              notificationsOpen
                ? 'bg-[#F3F5F2] border-[#C3DDD4] text-[#20332F]'
                : 'bg-white border-[#E5EAE6] text-[#718078] hover:text-[#20332F] hover:bg-[#F3F5F2]'
            }`}
            aria-label="View notifications"
            aria-expanded={notificationsOpen}
          >
            <Bell className="w-4 h-4" />
            {unreadCount > 0 && (
              <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-[#267C70]" />
            )}
          </button>

          {/* Notifications Dropdown */}
          {notificationsOpen && (
            <div className="absolute right-0 mt-2 w-80 sm:w-96 rounded-xl bg-white border border-[#E5EAE6] shadow-clinical-dropdown z-50 overflow-hidden animate-in fade-in duration-150">
              <div className="p-3.5 border-b border-[#E5EAE6] flex items-center justify-between bg-[#FAFBF9]">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-semibold text-[#20332F]">Notifications</span>
                  {unreadCount > 0 && (
                    <Badge variant="info" className="text-[10px] py-0 px-1.5 font-medium">
                      {unreadCount} unread
                    </Badge>
                  )}
                </div>
                {unreadCount > 0 && (
                  <button
                    type="button"
                    onClick={markAllAsRead}
                    className="text-[11px] text-[#267C70] hover:underline flex items-center gap-1 font-medium"
                  >
                    <CheckCheck className="w-3.5 h-3.5" />
                    Mark all read
                  </button>
                )}
              </div>

              <div className="max-h-80 overflow-y-auto divide-y divide-[#E5EAE6]">
                {notifications.map((item) => (
                  <div
                    key={item.id}
                    className={`p-3.5 text-xs transition-colors hover:bg-[#FAFBF9] flex items-start gap-3 ${
                      !item.read ? 'bg-[#F8FAF9]' : ''
                    }`}
                  >
                    <span
                      className={`w-2 h-2 mt-1 rounded-full shrink-0 ${
                        item.severity === 'warning'
                          ? 'bg-[#D69A43]'
                          : item.severity === 'critical'
                          ? 'bg-[#C75B5B]'
                          : 'bg-[#267C70]'
                      }`}
                    />
                    <div className="flex-1 space-y-1">
                      <div className="flex items-center justify-between">
                        <span className="font-semibold text-[#20332F]">{item.title}</span>
                        <span className="text-[10px] text-[#718078]">{item.time}</span>
                      </div>
                      <p className="text-xs text-[#718078] leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="p-2.5 border-t border-[#E5EAE6] bg-[#FAFBF9] text-center text-[11px] text-[#718078]">
                Demonstration Telemetry Stream
              </div>
            </div>
          )}
        </div>

        {/* User Profile Avatar & Dropdown */}
        <div className="relative" ref={profileRef}>
          <button
            type="button"
            onClick={() => {
              setProfileOpen(!profileOpen);
              setNotificationsOpen(false);
            }}
            className={`flex items-center gap-2.5 p-1.5 pr-2.5 rounded-lg border transition-colors ${
              profileOpen
                ? 'bg-[#F3F5F2] border-[#C3DDD4] text-[#20332F]'
                : 'bg-white border-[#E5EAE6] text-[#20332F] hover:bg-[#FAFBF9]'
            }`}
            aria-label="User profile menu"
            aria-expanded={profileOpen}
          >
            <div className="w-7 h-7 rounded-full bg-[#DCEBE5] text-[#267C70] flex items-center justify-center text-xs font-semibold">
              {DEMO_USER_PROFILE.avatarInitials}
            </div>
            <div className="hidden sm:flex flex-col text-left leading-none">
              <span className="text-xs font-semibold text-[#20332F]">{DEMO_USER_PROFILE.name}</span>
              <span className="text-[10px] text-[#718078] mt-0.5 font-normal">
                {DEMO_USER_PROFILE.role}
              </span>
            </div>
            <ChevronDown className="w-3.5 h-3.5 text-[#718078]" />
          </button>

          {/* Profile Dropdown */}
          {profileOpen && (
            <div className="absolute right-0 mt-2 w-72 rounded-xl bg-white border border-[#E5EAE6] shadow-clinical-dropdown z-50 overflow-hidden animate-in fade-in duration-150">
              <div className="p-4 border-b border-[#E5EAE6] bg-[#FAFBF9]">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#DCEBE5] text-[#267C70] flex items-center justify-center text-sm font-bold">
                    {DEMO_USER_PROFILE.avatarInitials}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-semibold text-[#20332F] truncate">
                      {DEMO_USER_PROFILE.name}
                    </p>
                    <p className="text-[11px] text-[#718078] truncate">
                      {DEMO_USER_PROFILE.department}
                    </p>
                    <div className="flex items-center gap-1.5 mt-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#27856A]"></span>
                      <span className="text-[10px] text-[#27856A] font-medium">
                        {DEMO_USER_PROFILE.status}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-2 space-y-0.5 text-xs text-[#20332F]">
                <button
                  type="button"
                  onClick={() => setProfileOpen(false)}
                  className="w-full flex items-center gap-2.5 px-3 py-2 rounded-lg hover:bg-[#F3F5F2] transition-colors text-left font-normal"
                >
                  <User className="w-3.5 h-3.5 text-[#718078]" />
                  <span>Clinical Operator Profile</span>
                </button>
                <button
                  type="button"
                  onClick={() => setProfileOpen(false)}
                  className="w-full flex items-center gap-2.5 px-3 py-2 rounded-lg hover:bg-[#F3F5F2] transition-colors text-left font-normal"
                >
                  <Settings className="w-3.5 h-3.5 text-[#718078]" />
                  <span>Telemetry Settings</span>
                </button>
                <div className="px-3 py-1.5 text-[10px] text-[#718078]">
                  Session: {DEMO_USER_PROFILE.sessionId}
                </div>
              </div>

              <div className="p-2 border-t border-[#E5EAE6] bg-[#FAFBF9]">
                <button
                  type="button"
                  onClick={() => {
                    setProfileOpen(false);
                    alert('Demonstration: Session sign-out simulated.');
                  }}
                  className="w-full flex items-center gap-2.5 px-3 py-1.5 rounded-lg text-xs text-[#C75B5B] hover:bg-[#F9EFEF] transition-colors text-left font-medium"
                >
                  <LogOut className="w-3.5 h-3.5" />
                  <span>End Operator Session (Demo)</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

export default DashboardHeader;
