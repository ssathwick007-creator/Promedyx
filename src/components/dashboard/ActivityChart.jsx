import React from 'react';
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Cell,
} from 'recharts';
import { Footprints, Clock, Zap, Target } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, Badge } from '@/components/ui';
import { DEMO_ACTIVITY_DATA } from '@/utils';

function ActivityTooltip({ active, payload, label }) {
  if (!active || !payload || !payload.length) return null;
  const data = payload[0].payload;

  return (
    <div className="bg-white border border-[#E5EAE6] p-3 rounded-lg shadow-clinical-dropdown text-xs space-y-1 min-w-[160px]">
      <div className="flex items-center justify-between pb-1 border-b border-[#E5EAE6] text-[#718078]">
        <span className="flex items-center gap-1 font-medium">
          <Clock className="w-3 h-3 text-[#267C70]" />
          {label}
        </span>
        <span className="text-[11px] font-semibold text-[#267C70]">{data.label}</span>
      </div>
      <div className="pt-1 flex items-center justify-between text-[#718078]">
        <span>Intensity:</span>
        <span className="font-bold text-[#20332F]">{data.intensity}%</span>
      </div>
      <div className="flex items-center justify-between text-[#718078]">
        <span>Steps:</span>
        <span className="font-bold text-[#267C70]">{data.steps}</span>
      </div>
    </div>
  );
}

export function ActivityChart() {
  return (
    <Card className="bg-white border border-[#E5EAE6] shadow-clinical-card flex flex-col justify-between">
      <CardHeader className="p-5 pb-3.5 flex flex-row items-center justify-between border-b border-[#E5EAE6]">
        <div>
          <div className="flex items-center gap-2">
            <CardTitle className="text-sm font-semibold text-[#20332F] flex items-center gap-2">
              <Footprints className="w-4 h-4 text-[#267C70]" />
              Kinetic Movement
            </CardTitle>
            <Badge variant="neutral" className="text-[10px] py-0 px-1.5 font-normal">
              Demo Data
            </Badge>
          </div>
          <CardDescription className="text-xs text-[#718078] mt-1">
            Hourly distribution of motion sensor activity.
          </CardDescription>
        </div>

        <div className="text-right">
          <span className="text-[11px] text-[#718078] block">Today</span>
          <span className="text-sm font-bold text-[#20332F]">6,420 steps</span>
        </div>
      </CardHeader>

      <CardContent className="p-5 pt-4">
        {/* Metric indicators */}
        <div className="flex items-center justify-between mb-4 text-xs">
          <div className="flex items-center gap-2">
            <span className="p-1.5 rounded-lg bg-[#DCEBE5] text-[#267C70]">
              <Zap className="w-3.5 h-3.5" />
            </span>
            <div>
              <span className="text-[11px] text-[#718078] block">Active Time</span>
              <span className="text-xs font-bold text-[#20332F]">46 Minutes</span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <span className="p-1.5 rounded-lg bg-[#EAF3F0] text-[#27856A]">
              <Target className="w-3.5 h-3.5" />
            </span>
            <div>
              <span className="text-[11px] text-[#718078] block">Daily Goal</span>
              <span className="text-xs font-bold text-[#27856A]">112% Met</span>
            </div>
          </div>
        </div>

        {/* Bar Chart */}
        <div className="w-full h-56">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={DEMO_ACTIVITY_DATA} margin={{ top: 5, right: 5, left: -25, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#E5EAE6" vertical={false} />

              <XAxis
                dataKey="hour"
                stroke="#E5EAE6"
                tick={{ fill: '#718078', fontSize: 10 }}
                tickLine={false}
                axisLine={{ stroke: '#E5EAE6' }}
              />

              <YAxis
                stroke="#E5EAE6"
                domain={[0, 100]}
                tick={{ fill: '#718078', fontSize: 10 }}
                tickLine={false}
                axisLine={{ stroke: '#E5EAE6' }}
              />

              <Tooltip content={<ActivityTooltip />} cursor={{ fill: 'rgba(220, 235, 229, 0.4)' }} />

              <Bar dataKey="intensity" radius={[4, 4, 0, 0]}>
                {DEMO_ACTIVITY_DATA.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={entry.intensity > 70 ? '#267C70' : '#7BB0A6'}
                  />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Footer */}
        <div className="mt-2 pt-2 border-t border-[#E5EAE6] flex items-center justify-between text-xs text-[#718078]">
          <span>Cadence: 112 spm (Active)</span>
          <span className="text-[11px] text-[#718078]">Simulated IMU Feed</span>
        </div>
      </CardContent>
    </Card>
  );
}

export default ActivityChart;
