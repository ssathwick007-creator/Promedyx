import React from 'react';
import { cn } from '@/utils';

const variantClasses = {
  primary:
    'bg-[#267C70] hover:bg-[#1E665C] text-white shadow-sm border border-transparent font-medium',
  secondary:
    'bg-[#F3F5F2] hover:bg-[#EAEFEA] text-[#20332F] border border-[#E5EAE6] hover:border-[#DCEBE5]',
  outline:
    'bg-transparent hover:bg-[#F3F5F2] text-[#20332F] border border-[#E5EAE6] hover:border-[#DCEBE5]',
  ghost:
    'bg-transparent hover:bg-[#F3F5F2] text-[#718078] hover:text-[#20332F] border-transparent',
  danger:
    'bg-[#F9EFEF] hover:bg-[#F2E0E0] text-[#C75B5B] border border-[#F0D5D5]',
  teal:
    'bg-[#DCEBE5] hover:bg-[#CEE2DA] text-[#267C70] border border-[#C3DDD4] font-medium',
};

const sizeClasses = {
  sm: 'h-8 px-3 text-xs rounded-lg gap-1.5',
  md: 'h-9 px-3.5 text-xs font-medium rounded-lg gap-2',
  lg: 'h-10 px-4 text-sm font-medium rounded-lg gap-2.5',
  icon: 'h-9 w-9 rounded-lg justify-center p-0',
};

export const Button = React.forwardRef(function Button(
  {
    children,
    className,
    variant = 'secondary',
    size = 'md',
    disabled = false,
    type = 'button',
    ...props
  },
  ref
) {
  return (
    <button
      ref={ref}
      type={type}
      disabled={disabled}
      className={cn(
        'inline-flex items-center justify-center font-sans tracking-normal transition-colors duration-150 select-none',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#267C70]/30 focus-visible:ring-offset-1',
        'disabled:opacity-50 disabled:pointer-events-none disabled:cursor-not-allowed',
        sizeClasses[size],
        variantClasses[variant],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
});

export default Button;
