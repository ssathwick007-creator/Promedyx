import React from 'react';

/**
 * PulseGuard Brand Emblem
 * Elegant, trustworthy clinical monitoring emblem.
 */
export function PulseGuardLogo({ className = 'h-8 w-auto', showText = true }) {
  return (
    <div className={`inline-flex items-center gap-2.5 ${className}`}>
      <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-[#267C70] shadow-sm">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          className="w-4.5 h-4.5 text-white"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3 12H6.5L9 6L13 18L16 9.5L18 13.5H21"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      {showText && (
        <div className="flex flex-col leading-none">
          <span className="text-base font-semibold tracking-tight text-[#20332F] flex items-center">
            Pulse<span className="text-[#267C70]">Guard</span>
          </span>
          <span className="text-[10px] tracking-wide text-[#718078] font-normal mt-0.5">
            Clinical Telemetry
          </span>
        </div>
      )}
    </div>
  );
}

export default PulseGuardLogo;
