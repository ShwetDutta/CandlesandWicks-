import React from 'react';
import { ArrowIcon } from './ArrowIcon';
import { PlayIcon } from './PlayIcon';

interface TextLinkProps {
  children: React.ReactNode;
  href: string;
  icon?: 'arrow' | 'play' | 'none';
  variant?: 'mint' | 'muted' | 'text';
  className?: string;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

export const TextLink: React.FC<TextLinkProps> = ({
  children,
  href,
  icon = 'none',
  variant = 'mint',
  className = '',
  onClick,
}) => {
  const isExternal = href.startsWith('http') || href.startsWith('[COMMUNITY');

  const colorClasses = {
    mint: 'text-[var(--mint)]',
    muted: 'text-[var(--muted)] hover:text-[var(--text)]',
    text: 'text-[var(--text)] hover:text-[var(--mint)]',
  }[variant];

  return (
    <a
      href={href}
      onClick={onClick}
      target={isExternal ? '_blank' : undefined}
      rel={isExternal ? 'noopener noreferrer' : undefined}
      className={`
        group relative inline-flex items-center gap-2
        font-hanken font-medium text-[15px] leading-snug
        ${colorClasses}
        transition-colors duration-200
        focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--text)] focus-visible:outline-offset-2
        ${className}
      `}
    >
      {icon === 'play' && (
        <PlayIcon size={12} color="currentColor" className="shrink-0" />
      )}

      <span className="relative">
        {children}
        {/* Growing underline on hover */}
        <span
          className="absolute left-0 bottom-0 w-full h-[1px] bg-current origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-[var(--ease-out)] pointer-events-none"
          aria-hidden="true"
        />
      </span>

      {icon === 'arrow' && (
        <ArrowIcon
          size={14}
          className="transition-transform duration-250 ease-out group-hover:translate-x-1 shrink-0"
        />
      )}

      {isExternal && <span className="sr-only">(opens in a new tab)</span>}
    </a>
  );
};
