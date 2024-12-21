import { cn } from '@/app/lib/utils';
import { ButtonHTMLAttributes, forwardRef } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'danger' | 'ghost';
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'default', ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          'p-2 rounded-lg transition-colors',
          variant === 'default' && 'hover:bg-gray-100 text-gray-600 hover:text-gray-900',
          variant === 'danger' && 'hover:bg-red-100 text-red-500 hover:text-red-600',
          variant === 'ghost' && 'hover:bg-gray-100 text-gray-400',
          className
        )}
        {...props}
      />
    );
  }
);