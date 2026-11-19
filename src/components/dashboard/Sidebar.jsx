import React from 'react';
import {
  LayoutDashboard,
  Activity,
  HeartPulse,
  BrainCircuit,
  BellRing,
  Users2,
  BarChart3,
  Settings,
  ShieldCheck,
  Radio,
  X,
} from 'lucide-react';
import { PulseGuardLogo } from '@/assets';
import { Badge } from '@/components/ui';
import { SIDEBAR_NAV_ITEMS, APP_CONFIG } from '@/utils';

const iconMap = {
  LayoutDashboard,
  Activity,
  HeartPulse,
  BrainCircuit,
  BellRing,
  Users2,
  BarChart3,
  Settings,
};

export function Sidebar({
  activeTab = 'overview',
  onSelectTab,
  isOpen = false,
  onClose,
}) {
  const handleNavClick = (itemId) => {
    if (onSelectTab) {
      onSelectTab(itemId);
    }
    if (onClose) {
      onClose();
    }
  };

  return (
    <>
      {/* Mobile Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/20 backdrop-blur-xs lg:hidden transition-opacity"
          onClick={onClose}
          aria-hidden="true"
        />
      )}

      {/* Sidebar Container */}
      <aside
        className={`fixed top-0 bottom-0 left-0 z-50 w-64 bg-white border-r border-[#E5EAE6] flex flex-col transition-transform duration-200 ease-in-out lg:translate-x-0 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Brand Header */}
        <div className="h-16 flex items-center justify-between px-5 border-b border-[#E5EAE6]">
          <PulseGuardLogo />
          {/* Close button for mobile */}
          <button
            type="button"
            onClick={onClose}
            className="lg:hidden p-1.5 rounded-lg text-[#718078] hover:text-[#20332F] hover:bg-[#F3F5F2] transition-colors"
            aria-label="Close menu"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Clinical Node Label */}
        <div className="px-5 py-2.5 border-b border-[#E5EAE6] bg-[#FAFBF9] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#27856A]"></span>
            <span className="text-[11px] font-medium text-[#718078]">
              Station Alpha-01
            </span>
          </div>
          <Badge variant="neutral" className="text-[10px] py-0 px-1.5 font-normal">
            Demo
          </Badge>
        </div>

        {/* Navigation Items List */}
        <nav className="flex-1 overflow-y-auto px-3 py-4 space-y-1">
          <div className="px-3 pb-2 text-[11px] font-medium text-[#718078] uppercase tracking-wider">
            Clinical Modules
          </div>

          {SIDEBAR_NAV_ITEMS.map((item) => {
            const IconComponent = iconMap[item.icon] || LayoutDashboard;
            const isActive = activeTab === item.id;

            return (
              <button
                key={item.id}
                type="button"
                onClick={() => handleNavClick(item.id)}
                className={`w-full group flex items-center justify-between px-3 py-2 rounded-lg text-xs transition-colors duration-150 text-left select-none ${
                  isActive
                    ? 'bg-[#DCEBE5] text-[#20332F] font-semibold'
                    : 'text-[#718078] hover:text-[#20332F] hover:bg-[#F3F5F2] font-normal'
                }`}
              >
                <div className="flex items-center gap-3 truncate">
                  <IconComponent
                    className={`w-4 h-4 shrink-0 transition-colors ${
                      isActive ? 'text-[#267C70]' : 'text-[#718078] group-hover:text-[#20332F]'
                    }`}
                  />
                  <span className="truncate">{item.label}</span>
                </div>

                {item.badge && (
                  <Badge
                    variant={item.badgeVariant === 'warning' ? 'warning' : 'info'}
                    className="text-[10px] py-0 px-1.5 ml-2 shrink-0 font-normal"
                  >
                    {item.badge}
                  </Badge>
                )}
              </button>
            );
          })}
        </nav>

        {/* Sidebar Footer - Clean Clinical State */}
        <div className="p-4 border-t border-[#E5EAE6] bg-[#FAFBF9]">
          <div className="p-3 rounded-lg bg-white border border-[#E5EAE6] space-y-2">
            <div className="flex items-center justify-between text-xs font-medium text-[#20332F]">
              <span className="flex items-center gap-1.5 text-[#20332F]">
                <Radio className="w-3.5 h-3.5 text-[#27856A]" />
                Telemetry Stream
              </span>
              <span className="text-[11px] text-[#27856A] font-semibold">Active</span>
            </div>

            <div className="text-[11px] text-[#718078] flex items-center justify-between">
              <span>Sampling: 250 Hz</span>
              <span>Simulated Feed</span>
            </div>

            <div className="pt-2 border-t border-[#E5EAE6] flex items-center justify-between text-[11px] text-[#718078]">
              <span className="flex items-center gap-1">
                <ShieldCheck className="w-3 h-3 text-[#267C70]" />
                {APP_CONFIG.NAME}
              </span>
              <span>v{APP_CONFIG.VERSION}</span>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}

export default Sidebar;
