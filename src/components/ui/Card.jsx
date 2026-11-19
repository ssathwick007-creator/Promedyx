import React from 'react';
import { cn } from '@/utils';

export function Card({ className, children, hover = false, ...props }) {
  return (
    <div
      className={cn(
        'rounded-clinical bg-white border border-[#E5EAE6] shadow-clinical-card text-[#20332F]',
        hover && 'hover:border-[#C3DDD4] hover:shadow-clinical-elevated transition-all duration-150',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export function CardHeader({ className, children, ...props }) {
  return (
    <div
      className={cn('flex flex-col space-y-1 p-5 pb-3.5 border-b border-[#E5EAE6]', className)}
      {...props}
    >
      {children}
    </div>
  );
}

export function CardTitle({ className, children, ...props }) {
  return (
    <h3
      className={cn(
        'text-sm font-semibold tracking-tight text-[#20332F] flex items-center justify-between',
        className
      )}
      {...props}
    >
      {children}
    </h3>
  );
}

export function CardDescription({ className, children, ...props }) {
  return (
    <p className={cn('text-xs text-[#718078] font-normal leading-relaxed', className)} {...props}>
      {children}
    </p>
  );
}

export function CardContent({ className, children, ...props }) {
  return (
    <div className={cn('p-5', className)} {...props}>
      {children}
    </div>
  );
}

export function CardFooter({ className, children, ...props }) {
  return (
    <div
      className={cn('flex items-center p-5 pt-3 border-t border-[#E5EAE6] bg-[#FAFBF9]/60 rounded-b-clinical', className)}
      {...props}
    >
      {children}
    </div>
  );
}
