import React from 'react';
import { cn } from '@/utils';

const statusConfig = {
  stable: {
    dot: 'bg-[#27856A]',
    text: 'text-[#27856A]',
    label: 'Continuous Telemetry',
  },
  warning: {
    dot: 'bg-[#D69A43]',
    text: 'text-[#D69A43]',
    label: 'Attention Required',
  },
  critical: {
    dot: 'bg-[#C75B5B]',
    text: 'text-[#C75B5B]',
    label: 'Threshold Alert',
  },
  standby: {
    dot: 'bg-[#267C70]',
    text: 'text-[#267C70]',
    label: 'Engine Ready',
  },
  offline: {
    dot: 'bg-[#95A39C]',
    text: 'text-[#718078]',
    label: 'System Offline',
  },
};

export function StatusIndicator({
  status = 'stable',
  label,
  pulse = true,
  className,
}) {
  const config = statusConfig[status] || statusConfig.stable;
  const displayLabel = label || config.label;

  return (
    <div className={cn('inline-flex items-center gap-2', className)}>
      <span className="relative flex h-2 w-2">
        {pulse && (
          <span
            className={cn(
              'animate-ping absolute inline-flex h-full w-full rounded-full opacity-30',
              config.dot
            )}
          />
        )}
        <span
          className={cn('relative inline-flex rounded-full h-2 w-2', config.dot)}
        />
      </span>
      {displayLabel && (
        <span className={cn('text-xs font-medium', config.text)}>
          {displayLabel}
        </span>
      )}
    </div>
  );
}

export default StatusIndicator;
