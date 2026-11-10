import React from 'react';
import { cn } from '../../utils/cn';

interface WaveGraphicProps {
  className?: string;
  variant?: 'contour' | 'flow' | 'divider' | 'crest';
  color?: string; // hex or Tailwind color class
}

export const WaveGraphic: React.FC<WaveGraphicProps> = ({
  className,
  variant = 'contour',
  color = 'currentColor',
}) => {
  if (variant === 'flow') {
    return (
      <svg
        className={cn('w-full h-auto overflow-visible pointer-events-none select-none', className)}
        viewBox="0 0 1200 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M0,60 C150,90 350,20 500,55 C650,90 850,25 1000,50 C1100,65 1170,40 1200,45"
          stroke={color}
          strokeWidth="1.25"
          strokeOpacity="0.4"
          fill="none"
        />
        <path
          d="M0,75 C200,40 380,85 580,60 C780,35 960,80 1200,65"
          stroke={color}
          strokeWidth="1"
          strokeOpacity="0.25"
          strokeDasharray="4 4"
          fill="none"
        />
      </svg>
    );
  }

  if (variant === 'divider') {
    return (
      <div className={cn('w-full overflow-hidden leading-none select-none', className)} aria-hidden="true">
        <svg
          viewBox="0 0 1440 90"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="relative block w-full h-12 md:h-16 text-paper"
        >
          <path
            d="M0,45 C240,80 480,10 720,45 C960,80 1200,15 1440,45 L1440,90 L0,90 Z"
            fill="currentColor"
          />
        </svg>
      </div>
    );
  }

  if (variant === 'crest') {
    return (
      <svg
        className={cn('w-24 h-12 overflow-visible pointer-events-none select-none', className)}
        viewBox="0 0 100 50"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M5,35 Q30,10 50,30 T95,25"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeOpacity="0.6"
        />
        <path
          d="M15,40 Q35,22 55,36 T85,32"
          stroke={color}
          strokeWidth="1"
          strokeLinecap="round"
          strokeOpacity="0.35"
        />
      </svg>
    );
  }

  // Default: elegant minimal contour
  return (
    <svg
      className={cn('w-48 h-10 overflow-visible pointer-events-none select-none', className)}
      viewBox="0 0 240 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M2,20 C45,5 85,35 130,20 C175,5 210,32 238,18"
        stroke={color}
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeOpacity="0.45"
      />
      <circle cx="238" cy="18" r="1.5" fill={color} fillOpacity="0.6" />
    </svg>
  );
};
