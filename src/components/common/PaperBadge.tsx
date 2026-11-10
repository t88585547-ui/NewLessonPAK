import React from 'react';
import { cn } from '../../utils/cn';

interface PaperBadgeProps {
  children: React.ReactNode;
  variant?: 'paper' | 'ocean' | 'wave' | 'outline';
  className?: string;
  dot?: boolean;
}

export const PaperBadge: React.FC<PaperBadgeProps> = ({
  children,
  variant = 'paper',
  className,
  dot = true,
}) => {
  const variantStyles = {
    paper: 'bg-paper text-ink border-paper-dark/60',
    ocean: 'bg-ocean text-white border-ocean-deep/30',
    wave: 'bg-wave/20 text-ocean-deep border-wave/40',
    outline: 'bg-transparent text-ink-muted border-ink/20',
  };

  const dotColors = {
    paper: 'bg-ocean',
    ocean: 'bg-wave',
    wave: 'bg-ocean',
    outline: 'bg-ink-muted',
  };

  return (
    <span
      className={cn(
        'inline-flex items-center gap-2 px-3 py-1 text-[11px] md:text-xs font-medium tracking-wide uppercase rounded-full border transition-colors',
        variantStyles[variant],
        className
      )}
    >
      {dot && (
        <span
          className={cn('w-1.5 h-1.5 rounded-full shrink-0', dotColors[variant])}
          aria-hidden="true"
        />
      )}
      <span>{children}</span>
    </span>
  );
};
