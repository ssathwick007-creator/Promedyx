import React from 'react';
import { cn } from '@/utils';

const variantClasses = {
  stable: 'bg-[#EAF3F0] text-[#27856A] border-[#D2E5DE]',
  success: 'bg-[#EAF3F0] text-[#27856A] border-[#D2E5DE]',
  warning: 'bg-[#FBF5EB] text-[#D69A43] border-[#F3E2C6]',
  critical: 'bg-[#F9EFEF] text-[#C75B5B] border-[#F0D5D5]',
  info: 'bg-[#DCEBE5] text-[#267C70] border-[#C3DDD4]',
  neutral: 'bg-[#F3F5F2] text-[#718078] border-[#E5EAE6]',
  outline: 'bg-transparent text-[#718078] border-[#E5EAE6]',
};

export function Badge({
  children,
  variant = 'neutral',
  className,
  dot = false,
  ...props
}) {
  const dotColorClasses = {
    stable: 'bg-[#27856A]',
    success: 'bg-[#27856A]',
    warning: 'bg-[#D69A43]',
    critical: 'bg-[#C75B5B]',
    info: 'bg-[#267C70]',
    neutral: 'bg-[#718078]',
    outline: 'bg-[#718078]',
  };

  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 px-2.5 py-0.5 text-xs font-medium rounded-full border transition-colors',
        variantClasses[variant] || variantClasses.neutral,
        className
      )}
      {...props}
    >
      {dot && (
        <span
          className={cn('w-1.5 h-1.5 rounded-full', dotColorClasses[variant] || 'bg-[#718078]')}
        />
      )}
      {children}
    </span>
  );
}

export default Badge;
