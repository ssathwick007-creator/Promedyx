import React, { useState } from 'react';
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from 'recharts';
import { Activity, Heart, Droplets, Clock } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, Badge } from '@/components/ui';
import { DEMO_VITALS_TREND } from '@/utils';

/**
 * Clean clinical light tooltip for telemetry waveform.
 */
function ClinicalChartTooltip({ active, payload, label }) {
  if (!active || !payload || !payload.length) return null;

  return (
    <div className="bg-white border border-[#E5EAE6] p-3 rounded-lg shadow-clinical-dropdown text-xs space-y-1.5 min-w-[170px]">
      <div className="flex items-center justify-between pb-1.5 border-b border-[#E5EAE6] text-[#718078]">
        <span className="flex items-center gap-1 font-medium">
          <Clock className="w-3 h-3 text-[#267C70]" />
          {label}
        </span>
        <Badge variant="neutral" className="text-[10px] py-0 px-1 font-normal">
          Demo
        </Badge>
      </div>

      {payload.map((entry, index) => (
        <div key={index} className="flex items-center justify-between gap-3 pt-0.5">
          <span className="flex items-center gap-1.5 font-medium" style={{ color: entry.color }}>
            <span
              className="w-2 h-2 rounded-full inline-block"
              style={{ backgroundColor: entry.color }}
            />
            {entry.name}:
          </span>
          <span className="font-bold text-[#20332F]">
            {entry.value} {entry.unit}
          </span>
        </div>
      ))}
    </div>
  );
}

export function VitalsTrendChart() {
  const [timeRange, setTimeRange] = useState('24H');
  const [showHeartRate, setShowHeartRate] = useState(true);
  const [showSpo2, setShowSpo2] = useState(true);

  const data = DEMO_VITALS_TREND[timeRange] || DEMO_VITALS_TREND['24H'];

  return (
    <Card className="bg-white border border-[#E5EAE6] shadow-clinical-card">
      <CardHeader className="p-5 pb-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#E5EAE6]">
        <div>
          <div className="flex items-center gap-2">
            <CardTitle className="text-sm font-semibold text-[#20332F] flex items-center gap-2">
              <Activity className="w-4 h-4 text-[#267C70]" />
              Continuous Vitals Trend
            </CardTitle>
            <Badge variant="info" className="text-[10px] py-0 px-1.5 font-medium">
              Demo Stream
            </Badge>
          </div>
          <CardDescription className="text-xs text-[#718078] mt-1">
            24-hour cardiovascular and oxygen saturation circadian waveform.
          </CardDescription>
        </div>

        {/* Time Filter Controls & Vitals Toggles */}
        <div className="flex flex-wrap items-center gap-2">
          {/* Vitals Toggles */}
          <div className="flex items-center bg-[#F3F5F2] p-0.5 rounded-lg border border-[#E5EAE6]">
            <button
              type="button"
              onClick={() => setShowHeartRate(!showHeartRate)}
              className={`px-2.5 py-1 text-xs rounded-md flex items-center gap-1.5 transition-colors ${
                showHeartRate
                  ? 'bg-white text-[#267C70] font-medium shadow-xs border border-[#E5EAE6]'
                  : 'text-[#718078] hover:text-[#20332F]'
              }`}
            >
              <Heart className="w-3 h-3 text-[#267C70]" />
              HR (BPM)
            </button>
            <button
              type="button"
              onClick={() => setShowSpo2(!showSpo2)}
              className={`px-2.5 py-1 text-xs rounded-md flex items-center gap-1.5 transition-colors ${
                showSpo2
                  ? 'bg-white text-[#4A7C9B] font-medium shadow-xs border border-[#E5EAE6]'
                  : 'text-[#718078] hover:text-[#20332F]'
              }`}
            >
              <Droplets className="w-3 h-3 text-[#4A7C9B]" />
              SpO2 (%)
            </button>
          </div>

          {/* Time Range Selector */}
          <div className="flex items-center bg-[#F3F5F2] p-0.5 rounded-lg border border-[#E5EAE6]">
            {['1H', '6H', '24H'].map((range) => (
              <button
                key={range}
                type="button"
                onClick={() => setTimeRange(range)}
                className={`px-2.5 py-1 text-xs rounded-md transition-colors ${
                  timeRange === range
                    ? 'bg-[#267C70] text-white font-medium shadow-xs'
                    : 'text-[#718078] hover:text-[#20332F]'
                }`}
              >
                {range}
              </button>
            ))}
          </div>
        </div>
      </CardHeader>

      <CardContent className="p-5 pt-4">
        {/* Summary Metric Ribbon */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-4 p-3 rounded-xl bg-[#FAFBF9] border border-[#E5EAE6]">
          <div>
            <span className="text-[11px] text-[#718078] block">Mean Heart Rate</span>
            <div className="text-base font-bold text-[#20332F] mt-0.5 flex items-baseline gap-1">
              <span>68.2</span>
              <span className="text-xs text-[#718078] font-normal">BPM</span>
            </div>
            <span className="text-[11px] text-[#27856A] font-medium">Normal Range (60-80)</span>
          </div>

          <div>
            <span className="text-[11px] text-[#718078] block">SpO2 Mean</span>
            <div className="text-base font-bold text-[#20332F] mt-0.5 flex items-baseline gap-1">
              <span>98.4</span>
              <span className="text-xs text-[#718078] font-normal">%</span>
            </div>
            <span className="text-[11px] text-[#27856A] font-medium">Optimal (&gt; 95%)</span>
          </div>

          <div>
            <span className="text-[11px] text-[#718078] block">Skin Temp Mean</span>
            <div className="text-base font-bold text-[#20332F] mt-0.5 flex items-baseline gap-1">
              <span>98.3</span>
              <span className="text-xs text-[#718078] font-normal">°F</span>
            </div>
            <span className="text-[11px] text-[#27856A] font-medium">Thermal Equilibrium</span>
          </div>

          <div>
            <span className="text-[11px] text-[#718078] block">Telemetry Cadence</span>
            <div className="text-base font-bold text-[#267C70] mt-0.5">
              250 Hz
            </div>
            <span className="text-[11px] text-[#718078]">Continuous Link</span>
          </div>
        </div>

        {/* Recharts Area Chart */}
        <div className="w-full h-72">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
              <defs>
                {/* Muted Teal Gradient for Heart Rate */}
                <linearGradient id="tealGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#267C70" stopOpacity={0.12} />
                  <stop offset="95%" stopColor="#267C70" stopOpacity={0.0} />
                </linearGradient>

                {/* Slate Blue Gradient for SpO2 */}
                <linearGradient id="slateBlueGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#4A7C9B" stopOpacity={0.10} />
                  <stop offset="95%" stopColor="#4A7C9B" stopOpacity={0.0} />
                </linearGradient>
              </defs>

              <CartesianGrid strokeDasharray="3 3" stroke="#E5EAE6" vertical={false} />

              <XAxis
                dataKey="time"
                stroke="#E5EAE6"
                tick={{ fill: '#718078', fontSize: 11 }}
                tickLine={false}
                axisLine={{ stroke: '#E5EAE6' }}
              />

              <YAxis
                stroke="#E5EAE6"
                domain={[50, 105]}
                tick={{ fill: '#718078', fontSize: 11 }}
                tickLine={false}
                axisLine={{ stroke: '#E5EAE6' }}
              />

              <Tooltip content={<ClinicalChartTooltip />} />

              {showHeartRate && (
                <Area
                  type="monotone"
                  dataKey="heartRate"
                  name="Heart Rate"
                  unit="BPM"
                  stroke="#267C70"
                  strokeWidth={2}
                  fillOpacity={1}
                  fill="url(#tealGradient)"
                  activeDot={{ r: 4, stroke: '#267C70', strokeWidth: 2, fill: '#FFFFFF' }}
                />
              )}

              {showSpo2 && (
                <Area
                  type="monotone"
                  dataKey="spo2"
                  name="SpO2"
                  unit="%"
                  stroke="#4A7C9B"
                  strokeWidth={2}
                  fillOpacity={1}
                  fill="url(#slateBlueGradient)"
                  activeDot={{ r: 4, stroke: '#4A7C9B', strokeWidth: 2, fill: '#FFFFFF' }}
                />
              )}
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* Bottom Chart Footer / Legend */}
        <div className="mt-3 pt-3 border-t border-[#E5EAE6] flex flex-col sm:flex-row items-center justify-between text-xs text-[#718078] gap-2">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-[#20332F] font-medium">
              <span className="w-2.5 h-1 rounded bg-[#267C70]"></span>
              Heart Rate (60-100 Normal)
            </span>
            <span className="flex items-center gap-1.5 text-[#20332F] font-medium">
              <span className="w-2.5 h-1 rounded bg-[#4A7C9B]"></span>
              Oxygen Saturation (&gt;95% Normal)
            </span>
          </div>
          <span className="text-[#718078]">
            Simulated demonstration telemetry
          </span>
        </div>
      </CardContent>
    </Card>
  );
}

export default VitalsTrendChart;
