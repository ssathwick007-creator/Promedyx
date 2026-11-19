import React from 'react';
import {
  ShieldCheck,
  AlertTriangle,
  Info,
  Clock,
  CheckCircle2,
  TrendingDown,
} from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, Badge } from '@/components/ui';
import { DEMO_RISK_PANEL_DATA } from '@/utils';

export function RiskStatusPanel() {
  const { status, score, maxScore, confidence, lastUpdated, explanation, factors, disclaimer } =
    DEMO_RISK_PANEL_DATA;

  const percentage = (score / maxScore) * 100;

  return (
    <Card className="bg-white border border-[#E5EAE6] shadow-clinical-card flex flex-col justify-between">
      <CardHeader className="p-5 pb-3.5 flex flex-row items-center justify-between border-b border-[#E5EAE6]">
        <div>
          <div className="flex items-center gap-2">
            <CardTitle className="text-sm font-semibold text-[#20332F] flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#27856A]" />
              AI Risk Intelligence Engine
            </CardTitle>
            <Badge variant="stable" className="text-[10px] py-0 px-1.5 font-medium">
              {status}
            </Badge>
          </div>
          <CardDescription className="text-xs text-[#718078] mt-1">
            Contextual anomaly index synthesized from multi-parameter telemetry.
          </CardDescription>
        </div>

        <Badge variant="neutral" className="text-[10px] py-0 px-1.5 font-normal">
          Demo Model
        </Badge>
      </CardHeader>

      <CardContent className="p-5 pt-4 space-y-4">
        {/* Risk Score Gauge & Status Ribbon */}
        <div className="p-4 rounded-xl bg-[#FAFBF9] border border-[#E5EAE6] space-y-3">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-bold text-[#20332F]">{score}</span>
              <span className="text-sm text-[#718078]">/ {maxScore}</span>
              <Badge variant="stable" className="ml-2 text-[11px] py-0 px-2 font-medium">
                <TrendingDown className="w-3 h-3 mr-0.5" />
                -2 pts (Stable)
              </Badge>
            </div>

            <div className="flex items-center gap-1.5 text-xs text-[#718078]">
              <Clock className="w-3.5 h-3.5 text-[#267C70]" />
              <span>{lastUpdated}</span>
            </div>
          </div>

          {/* Calibrated Risk Bar */}
          <div>
            <div className="flex items-center justify-between text-[11px] text-[#718078] mb-1.5">
              <span className="text-[#27856A] font-semibold">Low (0 - 30)</span>
              <span className="text-[#D69A43] font-medium">Moderate (31 - 70)</span>
              <span className="text-[#C75B5B] font-medium">High (71 - 100)</span>
            </div>

            <div className="relative w-full h-2.5 rounded-full bg-[#E5EAE6] overflow-hidden">
              {/* Threshold zone background */}
              <div className="absolute inset-0 flex">
                <div className="w-[30%] bg-[#D2E5DE]" />
                <div className="w-[40%] bg-[#F3E2C6]" />
                <div className="w-[30%] bg-[#F0D5D5]" />
              </div>

              {/* Current Score Fill */}
              <div
                className="h-full bg-[#27856A] rounded-full transition-all duration-500 relative"
                style={{ width: `${percentage}%` }}
              />
            </div>
          </div>
        </div>

        {/* Clinical Rationale Explanation */}
        <div className="p-3.5 rounded-xl bg-[#F8FAF9] border border-[#E5EAE6]">
          <div className="flex items-start gap-2.5">
            <Info className="w-4 h-4 text-[#267C70] shrink-0 mt-0.5" />
            <div className="space-y-1">
              <h4 className="text-xs font-semibold text-[#20332F]">
                Algorithmic Context Assessment (Demonstration)
              </h4>
              <p className="text-xs text-[#718078] leading-relaxed">
                {explanation}
              </p>
            </div>
          </div>
        </div>

        {/* Contributing Parameter Factors */}
        <div>
          <div className="text-[11px] font-medium text-[#718078] uppercase tracking-wider mb-2 flex items-center justify-between">
            <span>Telemetry Parameters</span>
            <span>Confidence: {confidence}</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {factors.map((factor, index) => (
              <div
                key={index}
                className="p-2.5 rounded-lg bg-[#FAFBF9] border border-[#E5EAE6] flex items-center justify-between text-xs"
              >
                <div className="flex items-center gap-1.5 truncate">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#27856A] shrink-0" />
                  <span className="text-[#718078] truncate">{factor.label}</span>
                </div>
                <span className="text-xs text-[#20332F] font-semibold shrink-0 ml-2">
                  {factor.score}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Medical Notice */}
        <div className="p-3 rounded-lg bg-[#FBF5EB] border border-[#F3E2C6] text-xs text-[#D69A43] flex items-start gap-2 leading-relaxed">
          <AlertTriangle className="w-4 h-4 text-[#D69A43] shrink-0 mt-0.5" />
          <span className="text-[#20332F]">
            <strong className="text-[#D69A43] font-semibold">Demonstration Metric:</strong> {disclaimer}
          </span>
        </div>
      </CardContent>
    </Card>
  );
}

export default RiskStatusPanel;
