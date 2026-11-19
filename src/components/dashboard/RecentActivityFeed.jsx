import React from 'react';
import {
  Clock,
  Radio,
  Thermometer,
  Footprints,
  Activity,
  Calendar,
} from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, Badge } from '@/components/ui';
import { DEMO_RECENT_ACTIVITIES } from '@/utils';

const iconMap = {
  Radio,
  Thermometer,
  Footprints,
  Activity,
};

export function RecentActivityFeed() {
  return (
    <Card className="bg-white border border-[#E5EAE6] shadow-clinical-card flex flex-col justify-between">
      <CardHeader className="p-5 pb-3.5 flex flex-row items-center justify-between border-b border-[#E5EAE6]">
        <div>
          <div className="flex items-center gap-2">
            <CardTitle className="text-sm font-semibold text-[#20332F] flex items-center gap-2">
              <Clock className="w-4 h-4 text-[#267C70]" />
              Recent Telemetry Activity
            </CardTitle>
            <Badge variant="neutral" className="text-[10px] py-0 px-1.5 font-normal">
              Demo Feed
            </Badge>
          </div>
          <CardDescription className="text-xs text-[#718078] mt-1">
            Chronological log of baseline handshakes and circadian observations.
          </CardDescription>
        </div>

        <div className="flex items-center gap-1.5 text-xs text-[#718078]">
          <Calendar className="w-3.5 h-3.5 text-[#267C70]" />
          <span>Today</span>
        </div>
      </CardHeader>

      <CardContent className="p-5 pt-4">
        <div className="relative pl-6 space-y-4 before:absolute before:left-2.5 before:top-2 before:bottom-2 before:w-px before:bg-[#E5EAE6]">
          {DEMO_RECENT_ACTIVITIES.map((act) => {
            const IconComponent = iconMap[act.icon] || Activity;

            return (
              <div key={act.id} className="relative group">
                {/* Timeline Dot */}
                <div className="absolute -left-6 top-1 w-5 h-5 rounded-full bg-white border border-[#DCEBE5] flex items-center justify-center text-[#267C70] shadow-xs">
                  <IconComponent className="w-2.5 h-2.5" />
                </div>

                <div className="p-3 rounded-lg bg-[#FAFBF9] border border-[#E5EAE6] hover:border-[#C3DDD4] transition-colors">
                  <div className="flex items-center justify-between gap-2 text-xs">
                    <span className="font-semibold text-[#20332F]">{act.category}</span>
                    <span className="text-[11px] text-[#718078]">{act.time}</span>
                  </div>
                  <p className="text-xs text-[#718078] mt-1 leading-relaxed">
                    {act.description}
                  </p>
                  <div className="mt-2 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#27856A]"></span>
                    <span className="text-[11px] text-[#27856A] font-medium">Verified (Simulated)</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-3 pt-3 border-t border-[#E5EAE6] flex items-center justify-between text-xs text-[#718078]">
          <span>Continuous Observation Loop</span>
          <span className="text-[11px] text-[#718078]">Mock Event Dispatcher</span>
        </div>
      </CardContent>
    </Card>
  );
}

export default RecentActivityFeed;
