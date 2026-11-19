import React, { useState } from 'react';
import { Sidebar, DashboardHeader, DemoNoticeBanner } from '@/components/dashboard';
import { SIDEBAR_NAV_ITEMS, APP_CONFIG } from '@/utils';
import { Activity, Lock } from 'lucide-react';
import { useSystemHealth } from '@/hooks';

export function DashboardLayout({ children, activeTab = 'overview', onSelectTab }) {
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  const { uptimeSeconds } = useSystemHealth();

  const currentTabObj =
    SIDEBAR_NAV_ITEMS.find((item) => item.id === activeTab) || SIDEBAR_NAV_ITEMS[0];

  return (
    <div className="min-h-screen bg-[#F3F5F2] text-[#20332F] flex font-sans selection:bg-[#DCEBE5] selection:text-[#20332F]">
      {/* Fixed Left Sidebar (Desktop) + Mobile Drawer */}
      <Sidebar
        activeTab={activeTab}
        onSelectTab={onSelectTab}
        isOpen={mobileSidebarOpen}
        onClose={() => setMobileSidebarOpen(false)}
      />

      {/* Main Right Content Area */}
      <div className="flex-1 flex flex-col min-w-0 lg:pl-64">
        {/* Top Sticky Navigation Bar */}
        <DashboardHeader
          activeTabTitle={currentTabObj.label}
          onToggleMobileSidebar={() => setMobileSidebarOpen(true)}
        />

        {/* Global Demo Warning Banner */}
        <DemoNoticeBanner />

        {/* Dynamic Content Viewport */}
        <main className="flex-1 p-4 sm:p-6 lg:p-8 max-w-7xl w-full mx-auto space-y-6">
          {children}
        </main>

        {/* Commercial Healthcare Light Footer */}
        <footer className="bg-white border-t border-[#E5EAE6] py-3.5 px-4 sm:px-6 lg:px-8 text-xs text-[#718078]">
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="flex items-center gap-4 text-xs">
              <span className="flex items-center gap-1.5 text-[#20332F] font-medium">
                <Activity className="w-3.5 h-3.5 text-[#267C70]" />
                Telemetry Stream Active ({uptimeSeconds}s)
              </span>
              <span className="text-[#E5EAE6] hidden sm:inline">|</span>
              <span className="hidden sm:flex items-center gap-1 text-[#718078]">
                <Lock className="w-3 h-3 text-[#718078]" />
                TLS 1.3 · FHIR HL7 Architectural Specification
              </span>
            </div>

            <div className="flex items-center gap-3 text-xs text-[#718078]">
              <span className="text-[#20332F] font-medium">{APP_CONFIG.NAME} v{APP_CONFIG.VERSION}</span>
              <span className="text-[#E5EAE6]">•</span>
              <span className="text-[#267C70] font-medium">Simulated Demonstration Environment</span>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default DashboardLayout;
