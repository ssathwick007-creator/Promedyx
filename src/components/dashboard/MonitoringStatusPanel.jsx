import React from 'react';
import {
  Radio,
  Wifi,
  BatteryCharging,
  Cpu,
  CheckCircle2,
  HardDrive,
  Zap,
} from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, Badge } from '@/components/ui';

export function MonitoringStatusPanel() {
  const subsystems = [
    { name: 'Optical PPG (Cardiovascular)', status: 'Active', latency: '24ms', state: 'stable' },
    { name: 'Skin Thermistor (Temperature)', status: 'Calibrated', latency: '32ms', state: 'stable' },
    { name: '6-Axis IMU (Motion)', status: 'Active', latency: '18ms', state: 'stable' },
    { name: 'Ambient Context Sensor', status: 'Synced', latency: '40ms', state: 'info' },
  ];

  return (
    <Card className="bg-white border border-[#E5EAE6] shadow-clinical-card flex flex-col justify-between">
      <CardHeader className="p-5 pb-3.5 flex flex-row items-center justify-between border-b border-[#E5EAE6]">
        <div>
          <div className="flex items-center gap-2">
            <CardTitle className="text-sm font-semibold text-[#20332F] flex items-center gap-2">
              <Radio className="w-4 h-4 text-[#267C70]" />
              Monitoring Status & Telemetry
            </CardTitle>
            <Badge variant="stable" dot className="text-[10px] py-0 px-1.5 font-medium">
              Online
            </Badge>
          </div>
          <CardDescription className="text-xs text-[#718078] mt-1">
            Real-time interface connection & telemetry health diagnostics.
          </CardDescription>
        </div>

        <Badge variant="neutral" className="text-[10px] py-0 px-1.5 font-normal">
          Demo Feed
        </Badge>
      </CardHeader>

      <CardContent className="p-5 pt-4 space-y-4">
        {/* Core Connection Diagnostics Grid */}
        <div className="grid grid-cols-2 gap-2.5 text-xs">
          <div className="p-3 rounded-xl bg-[#FAFBF9] border border-[#E5EAE6] flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Wifi className="w-3.5 h-3.5 text-[#267C70]" />
              <span className="text-[#718078]">BLE Link</span>
            </div>
            <span className="text-[#20332F] font-semibold">-48 dBm</span>
          </div>

          <div className="p-3 rounded-xl bg-[#FAFBF9] border border-[#E5EAE6] flex items-center justify-between">
            <div className="flex items-center gap-2">
              <BatteryCharging className="w-3.5 h-3.5 text-[#27856A]" />
              <span className="text-[#718078]">Battery</span>
            </div>
            <span className="text-[#27856A] font-semibold">88% (36h)</span>
          </div>

          <div className="p-3 rounded-xl bg-[#FAFBF9] border border-[#E5EAE6] flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Cpu className="w-3.5 h-3.5 text-[#267C70]" />
              <span className="text-[#718078]">Throughput</span>
            </div>
            <span className="text-[#20332F] font-semibold">250 pkt/s</span>
          </div>

          <div className="p-3 rounded-xl bg-[#FAFBF9] border border-[#E5EAE6] flex items-center justify-between">
            <div className="flex items-center gap-2">
              <HardDrive className="w-3.5 h-3.5 text-[#27856A]" />
              <span className="text-[#718078]">Loss Rate</span>
            </div>
            <span className="text-[#27856A] font-semibold">0.00%</span>
          </div>
        </div>

        {/* Subsystems List */}
        <div>
          <div className="text-[11px] font-medium text-[#718078] uppercase tracking-wider mb-2 flex items-center justify-between">
            <span>Subsystem Telemetry Channels</span>
            <span className="text-[#27856A]">4 / 4 Synchronized</span>
          </div>

          <div className="space-y-1.5">
            {subsystems.map((sub, idx) => (
              <div
                key={idx}
                className="flex items-center justify-between p-2.5 rounded-lg bg-[#FAFBF9] border border-[#E5EAE6] text-xs"
              >
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#27856A] shrink-0" />
                  <span className="text-[#20332F] font-medium">{sub.name}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[11px] text-[#718078]">{sub.latency}</span>
                  <Badge variant={sub.state} className="text-[10px] py-0 px-1.5 font-normal">
                    {sub.status}
                  </Badge>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Notice */}
        <div className="p-2.5 rounded-lg bg-[#F8FAF9] border border-[#E5EAE6] text-xs text-[#718078] flex items-center justify-between">
          <span className="flex items-center gap-1.5 text-[#20332F] font-medium">
            <Zap className="w-3.5 h-3.5 text-[#267C70]" />
            Telemetry Hardware Interface
          </span>
          <span className="text-[#267C70] font-medium">Station Ready</span>
        </div>
      </CardContent>
    </Card>
  );
}

export default MonitoringStatusPanel;
