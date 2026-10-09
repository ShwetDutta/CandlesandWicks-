import React from 'react';
import { useScrolled } from '../../hooks/useScrolled';
import { Badge } from '../brand/Badge';
import { Wordmark } from '../brand/Wordmark';
import { siteConfig } from '../../config/site';

export const Nav: React.FC = () => {
  const scrolled = useScrolled(8);

  return (
    <>
      {/* Skip to Content Link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] px-4 py-2 bg-[var(--mint)] text-[var(--on-mint)] font-hanken font-semibold text-sm focus:outline-none"
      >
        Skip to content
      </a>

      <header
        className={`fixed top-0 left-0 right-0 z-50 h-[72px] max-sm:h-[60px] transition-all duration-300 ${
          scrolled
            ? 'bg-[var(--bg)]/80 backdrop-blur-[14px] border-b border-[var(--line)]'
            : 'bg-transparent border-b border-transparent'
        }`}
      >
        <div className="mx-auto w-full max-w-[1360px] h-full px-[clamp(20px,4.5vw,72px)] flex items-center justify-between">
          {/* Brand Left */}
          <a
            href="#"
            className="flex items-center gap-3 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--text)] focus-visible:outline-offset-2"
          >
            <Badge size={40} className="max-sm:w-[36px] max-sm:h-[36px]" alt="" />
            <Wordmark />
          </a>

          {/* Nav Right */}
          <div className="flex items-center gap-8 max-sm:gap-4">
            {/* Desktop Links */}
            <nav className="hidden md:flex items-center gap-8" aria-label="Main Navigation">
              <a
                href="#approach"
                className="group relative font-hanken font-medium text-[15px] text-[var(--text)]/75 hover:text-[var(--text)] transition-colors duration-200"
              >
                Approach
                <span
                  className="absolute left-0 bottom-[-2px] w-full h-[1px] bg-[var(--mint)] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-[var(--ease-out)]"
                  aria-hidden="true"
                />
              </a>
              <a
                href="#founders"
                className="group relative font-hanken font-medium text-[15px] text-[var(--text)]/75 hover:text-[var(--text)] transition-colors duration-200"
              >
                Founders
                <span
                  className="absolute left-0 bottom-[-2px] w-full h-[1px] bg-[var(--mint)] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-[var(--ease-out)]"
                  aria-hidden="true"
                />
              </a>
              <a
                href="#community"
                className="group relative font-hanken font-medium text-[15px] text-[var(--text)]/75 hover:text-[var(--text)] transition-colors duration-200"
              >
                Community
                <span
                  className="absolute left-0 bottom-[-2px] w-full h-[1px] bg-[var(--mint)] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-[var(--ease-out)]"
                  aria-hidden="true"
                />
              </a>
            </nav>

            {/* Join Free CTA Button */}
            <a
              href={siteConfig.communityUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="chamfer-nav-btn group relative inline-flex items-center justify-center h-[40px] px-[18px] bg-[var(--mint)] text-[var(--on-mint)] font-hanken font-semibold text-[14px] leading-none transition-colors duration-250 hover:bg-[var(--text)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--text)] focus-visible:outline-offset-2"
            >
              <span>Join free</span>
              <span className="sr-only">(opens in a new tab)</span>
            </a>
          </div>
        </div>
      </header>
    </>
  );
};
