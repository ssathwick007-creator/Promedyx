import React, { useState } from 'react';
import { X } from 'lucide-react';
import { Badge } from '@/components/ui';

export function DemoNoticeBanner() {
  const [dismissed, setDismissed] = useState(false);

  if (dismissed) return null;

  return (
    <div className="bg-[#DCEBE5]/70 border-b border-[#C3DDD4] px-4 py-2 sm:px-6">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-3 text-xs">
        <div className="flex items-center gap-2.5 overflow-hidden">
          <Badge variant="info" className="shrink-0 text-[10px] py-0 px-2 uppercase font-medium bg-white border-[#C3DDD4]">
            Demo Environment
          </Badge>
          <span className="text-[#20332F] truncate">
            <strong className="font-semibold">Demonstration Mode:</strong> All displayed vitals, activity levels, and risk calculations are simulated mock data for interface evaluation. Not for medical diagnosis.
          </span>
        </div>

        <button
          type="button"
          onClick={() => setDismissed(true)}
          className="text-[#718078] hover:text-[#20332F] transition-colors p-1 rounded hover:bg-[#DCEBE5]"
          title="Dismiss notification"
          aria-label="Dismiss demo banner"
        >
          <X className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
}

export default DemoNoticeBanner;
