import React from 'react';
import { cn } from '../../utils/cn';

interface FloatingPaperProps {
  children: React.ReactNode;
  className?: string;
  tilt?: 'left' | 'right' | 'none';
  elevation?: 'flat' | 'paper' | 'elevated';
  border?: boolean;
  padded?: boolean | 'sm' | 'md' | 'lg' | 'none';
}

export const FloatingPaper: React.FC<FloatingPaperProps> = ({
  children,
  className,
  tilt = 'none',
  elevation = 'paper',
  border = true,
  padded = 'md',
}) => {
  const tiltClasses = {
    left: 'paper-tilt-left',
    right: 'paper-tilt-right',
    none: '',
  };

  const elevationClasses = {
    flat: '',
    paper: 'shadow-paper-natural',
    elevated: 'shadow-paper-elevated',
  };

  const paddingClasses = {
    none: '',
    sm: 'p-4 md:p-5',
    md: 'p-6 md:p-8',
    lg: 'p-8 md:p-12',
    true: 'p-6 md:p-8',
    false: '',
  };

  const currentPadding = typeof padded === 'boolean' ? paddingClasses[padded ? 'true' : 'false'] : paddingClasses[padded];

  return (
    <div
      className={cn(
        'relative bg-paper/90 backdrop-blur-xs rounded-sm transition-all duration-300',
        border && 'border border-paper-dark/70',
        elevationClasses[elevation],
        tiltClasses[tilt],
        currentPadding,
        className
      )}
    >
      {/* Subtle paper grain / micro border accent */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-white/40" />
      {children}
    </div>
  );
};
