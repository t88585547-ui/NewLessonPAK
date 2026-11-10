import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, ArrowRight } from 'lucide-react';
import { cn } from '../../utils/cn';

interface EditorialButtonProps {
  children: React.ReactNode;
  to?: string;
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'paper' | 'outline' | 'text-arrow';
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  icon?: 'arrow-right' | 'arrow-up-right' | 'none';
  target?: string;
  rel?: string;
}

export const EditorialButton: React.FC<EditorialButtonProps> = ({
  children,
  to,
  href,
  onClick,
  variant = 'primary',
  className,
  size = 'md',
  icon = 'none',
  target,
  rel,
}) => {
  const sizeStyles = {
    sm: 'text-xs px-3.5 py-1.5 gap-1.5',
    md: 'text-sm px-5 py-2.5 gap-2',
    lg: 'text-base px-7 py-3.5 gap-2.5',
  };

  const variantStyles = {
    primary:
      'bg-ocean text-white border border-ocean shadow-sm hover:bg-ocean-deep hover:shadow-paper-lift active:scale-[0.99] transition-all duration-200',
    paper:
      'bg-paper text-ink border border-paper-dark hover:bg-paper-light hover:border-ink/30 hover:shadow-paper active:scale-[0.99] transition-all duration-200',
    outline:
      'bg-transparent text-ink border border-ink/25 hover:border-ink hover:bg-paper/40 active:scale-[0.99] transition-all duration-200',
    'text-arrow':
      'bg-transparent text-ink hover:text-ocean underline-offset-4 hover:underline p-0 font-medium group transition-colors duration-150',
  };

  const isTextArrow = variant === 'text-arrow';
  const combinedClass = cn(
    'inline-flex items-center justify-center font-sans tracking-tight transition-all select-none',
    !isTextArrow && 'rounded-full font-medium',
    !isTextArrow && sizeStyles[size],
    variantStyles[variant],
    className
  );

  const renderIcon = () => {
    if (icon === 'arrow-up-right') {
      return (
        <ArrowUpRight
          className={cn(
            'w-4 h-4 transition-transform duration-200',
            isTextArrow && 'group-hover:translate-x-0.5 group-hover:-translate-y-0.5'
          )}
        />
      );
    }
    if (icon === 'arrow-right') {
      return (
        <ArrowRight
          className={cn(
            'w-4 h-4 transition-transform duration-200',
            isTextArrow && 'group-hover:translate-x-1'
          )}
        />
      );
    }
    return null;
  };

  if (to) {
    return (
      <Link to={to} className={combinedClass}>
        <span>{children}</span>
        {renderIcon()}
      </Link>
    );
  }

  if (href) {
    return (
      <a
        href={href}
        target={target || '_blank'}
        rel={rel || 'noopener noreferrer'}
        className={combinedClass}
      >
        <span>{children}</span>
        {renderIcon()}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={combinedClass} type="button">
      <span>{children}</span>
      {renderIcon()}
    </button>
  );
};
