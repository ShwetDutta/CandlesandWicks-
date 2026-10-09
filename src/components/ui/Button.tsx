import React from 'react';
import { ArrowIcon } from './ArrowIcon';
import { siteConfig } from '../../config/site';

interface ButtonProps {
  children?: React.ReactNode;
  href?: string;
  className?: string;
  fullWidthMobile?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children = 'Join the free community',
  href = siteConfig.communityUrl,
  className = '',
  fullWidthMobile = true,
}) => {
  const isExternal = href.startsWith('http') || href.startsWith('[COMMUNITY');

  return (
    <a
      href={href}
      target={isExternal ? '_blank' : undefined}
      rel={isExternal ? 'noopener noreferrer' : undefined}
      className={`
        chamfer-btn group relative inline-flex items-center justify-center
        h-[60px] max-sm:h-[56px] px-8
        bg-[var(--mint)] text-[var(--on-mint)]
        font-hanken font-semibold text-[15px] leading-none
        transition-transform duration-150 active:translate-y-[1px]
        focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--text)] focus-visible:outline-offset-3
        ${fullWidthMobile ? 'max-sm:w-full' : ''}
        ${className}
      `}
    >
      {/* Left-to-right sweep background fill on hover */}
      <span
        className="absolute inset-0 bg-[var(--text)] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-400 ease-[var(--ease-inout)] pointer-events-none"
        aria-hidden="true"
      />

      <span className="relative z-10 inline-flex items-center gap-[12px] text-[var(--on-mint)]">
        <span>{children}</span>
        <ArrowIcon
          size={16}
          className="transition-transform duration-250 ease-out group-hover:translate-x-[4px]"
        />
        {isExternal && <span className="sr-only">(opens in a new tab)</span>}
      </span>
    </a>
  );
};
