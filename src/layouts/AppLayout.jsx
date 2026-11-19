import React from 'react';
import { ShieldCheck, Activity, Bell, Radio, Lock } from 'lucide-react';
import { PulseGuardLogo } from '@/assets';
import { StatusIndicator, Badge, Button } from '@/components/ui';
import { useSystemHealth } from '@/hooks';
import { APP_CONFIG } from '@/utils';

export function AppLayout({ children }) {
  const { isOnline, status, uptimeSeconds } = useSystemHealth();

  return (
    <div className="min-h-screen bg-[#F3F5F2] text-[#20332F] flex flex-col font-sans selection:bg-[#DCEBE5] selection:text-[#20332F]">
      {/* Top Clinical Navigation Bar */}
      <header className="sticky top-0 z-50 bg-white border-b border-[#E5EAE6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          {/* Brand & Tier */}
          <div className="flex items-center gap-6">
            <PulseGuardLogo />
            <div className="hidden md:flex items-center gap-2 pl-6 border-l border-[#E5EAE6]">
              <Badge variant="info" className="text-xs py-0.5">
                <ShieldCheck className="w-3.5 h-3.5 text-[#267C70] mr-1" />
                {APP_CONFIG.CLASSIFICATION}
              </Badge>
            </div>
          </div>

          {/* Right System State & Controls */}
          <div className="flex items-center gap-3">
            <div className="hidden sm:flex items-center gap-2 bg-[#FAFBF9] px-3 py-1.5 rounded-lg border border-[#E5EAE6] text-xs">
              <Radio className="w-3.5 h-3.5 text-[#27856A]" />
              <span className="text-[#718078]">Core Stream:</span>
              <StatusIndicator status={status} pulse={isOnline} />
            </div>

            <Button variant="ghost" size="icon" aria-label="Alerts" className="relative">
              <Bell className="w-4 h-4 text-[#718078]" />
              <span className="absolute top-2 right-2 w-1.5 h-1.5 bg-[#267C70] rounded-full"></span>
            </Button>

            <div className="flex items-center gap-2 pl-2 border-l border-[#E5EAE6]">
              <div className="w-8 h-8 rounded-full bg-[#DCEBE5] text-[#267C70] flex items-center justify-center text-xs font-semibold">
                PG
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content Viewport */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {children}
      </main>

      {/* Commercial Telemetry Footer */}
      <footer className="bg-white border-t border-[#E5EAE6] py-3.5 text-xs text-[#718078]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-4 text-xs">
            <span className="flex items-center gap-1.5 text-[#20332F] font-medium">
              <Activity className="w-3.5 h-3.5 text-[#267C70]" />
              Telemetry Stream Active ({uptimeSeconds}s)
            </span>
            <span className="text-[#E5EAE6]">|</span>
            <span className="flex items-center gap-1 text-[#718078]">
              <Lock className="w-3 h-3 text-[#718078]" />
              TLS 1.3 · FHIR SPEC HL7
            </span>
          </div>

          <div className="flex items-center gap-3 text-xs text-[#718078]">
            <span className="text-[#20332F] font-medium">{APP_CONFIG.NAME} v{APP_CONFIG.VERSION}</span>
            <span className="text-[#E5EAE6]">·</span>
            <span className="text-[#267C70]">Demonstration Mode</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default AppLayout;
