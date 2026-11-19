import React from 'react';
import {
  Radio,
  Thermometer,
  Footprints,
  ShieldCheck,
  CheckCircle2,
  Activity,
} from 'lucide-react';
import { Card, CardContent, Badge } from '@/components/ui';
import { DEMO_OVERVIEW_CARDS } from '@/utils';

const iconMap = {
  Radio,
  Thermometer,
  Footprints,
  ShieldCheck,
};

const iconThemeMap = {
  cyan: {
    bg: 'bg-[#DCEBE5]',
    text: 'text-[#267C70]',
  },
  blue: {
    bg: 'bg-[#EBF3F5]',
    text: 'text-[#267C70]',
  },
  emerald: {
    bg: 'bg-[#EAF3F0]',
    text: 'text-[#27856A]',
  },
};

export function OverviewMetricCards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {DEMO_OVERVIEW_CARDS.map((card) => {
        const IconComponent = iconMap[card.icon] || Activity;
        const theme = iconThemeMap[card.accentColor] || iconThemeMap.cyan;

        return (
          <Card
            key={card.id}
            hover
            className="bg-white border border-[#E5EAE6] shadow-clinical-card flex flex-col justify-between"
          >
            <CardContent className="p-5 pb-3.5">
              {/* Header with Title & Refined Icon */}
              <div className="flex items-start justify-between gap-2">
                <div className="flex items-center gap-2.5">
                  <div className={`p-2 rounded-lg ${theme.bg} ${theme.text}`}>
                    <IconComponent className="w-4 h-4" />
                  </div>
                  <h3 className="text-xs font-medium text-[#718078]">
                    {card.title}
                  </h3>
                </div>

                <Badge variant="neutral" className="text-[10px] py-0 px-1.5 font-normal">
                  Demo
                </Badge>
              </div>

              {/* Main Metric Value */}
              <div className="mt-4">
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl font-bold tracking-tight text-[#20332F]">
                    {card.value}
                  </span>
                  {card.id === 'monitoring-status' && (
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#27856A] opacity-40"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-[#27856A]"></span>
                    </span>
                  )}
                </div>
                <p className="text-xs text-[#718078] mt-0.5">{card.subvalue}</p>
              </div>

              {/* Secondary Sub-metrics */}
              <div className="mt-4 grid grid-cols-2 gap-2 pt-3 border-t border-[#E5EAE6]">
                {card.metrics.map((m, idx) => (
                  <div key={idx} className="flex flex-col">
                    <span className="text-[11px] text-[#718078]">
                      {m.label}
                    </span>
                    <span className="text-xs font-semibold text-[#20332F] mt-0.5">
                      {m.value}
                    </span>
                  </div>
                ))}
              </div>
            </CardContent>

            {/* Bottom Status / Trend Bar */}
            <div className="px-5 py-2.5 bg-[#FAFBF9] border-t border-[#E5EAE6] text-xs flex items-center justify-between text-[#718078] rounded-b-clinical">
              <span className="truncate">{card.trend}</span>
              <CheckCircle2 className="w-3.5 h-3.5 text-[#27856A] shrink-0 ml-1.5" />
            </div>
          </Card>
        );
      })}
    </div>
  );
}

export default OverviewMetricCards;
