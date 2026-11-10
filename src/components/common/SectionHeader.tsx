import React from 'react';
import { PaperBadge } from './PaperBadge';
import { WaveGraphic } from './WaveGraphic';
import { cn } from '../../utils/cn';

interface SectionHeaderProps {
  badge?: string;
  badgeVariant?: 'paper' | 'ocean' | 'wave' | 'outline';
  titleTh: string;
  titleEn?: string;
  descriptionTh?: string;
  descriptionEn?: string;
  align?: 'left' | 'center' | 'split';
  className?: string;
  withWave?: boolean;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  badge,
  badgeVariant = 'paper',
  titleTh,
  titleEn,
  descriptionTh,
  descriptionEn,
  align = 'left',
  className,
  withWave = false,
}) => {
  if (align === 'split') {
    return (
      <div className={cn('flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-paper-dark/60', className)}>
        <div className="max-w-2xl space-y-3">
          {badge && <PaperBadge variant={badgeVariant}>{badge}</PaperBadge>}
          <div>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-ink leading-tight font-thai">
              {titleTh}
            </h2>
            {titleEn && (
              <p className="text-sm md:text-base font-sans tracking-widest uppercase text-ink-muted mt-1">
                {titleEn}
              </p>
            )}
          </div>
        </div>

        {(descriptionTh || descriptionEn) && (
          <div className="max-w-md space-y-2 text-ink-muted text-sm md:text-base font-thai leading-relaxed">
            {descriptionTh && <p>{descriptionTh}</p>}
            {descriptionEn && (
              <p className="text-xs md:text-sm font-sans text-ink-faint italic font-normal">
                {descriptionEn}
              </p>
            )}
          </div>
        )}
      </div>
    );
  }

  const isCenter = align === 'center';

  return (
    <div
      className={cn(
        'space-y-4 max-w-3xl',
        isCenter ? 'mx-auto text-center items-center flex flex-col' : '',
        className
      )}
    >
      {badge && <PaperBadge variant={badgeVariant}>{badge}</PaperBadge>}

      <div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-ink leading-[1.1] font-thai">
          {titleTh}
        </h2>
        {titleEn && (
          <p className="text-xs sm:text-sm md:text-base font-sans tracking-widest uppercase text-ink-muted mt-2 font-medium">
            {titleEn}
          </p>
        )}
      </div>

      {withWave && (
        <div className={cn('pt-1', isCenter && 'flex justify-center')}>
          <WaveGraphic variant="contour" className="text-ocean" />
        </div>
      )}

      {(descriptionTh || descriptionEn) && (
        <div className="space-y-1.5 text-ink-muted text-base md:text-lg font-thai leading-relaxed pt-1">
          {descriptionTh && <p>{descriptionTh}</p>}
          {descriptionEn && (
            <p className="text-xs md:text-sm font-sans text-ink-faint font-normal leading-relaxed">
              {descriptionEn}
            </p>
          )}
        </div>
      )}
    </div>
  );
};
