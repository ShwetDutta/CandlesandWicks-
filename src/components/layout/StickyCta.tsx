import React, { useEffect, useState } from 'react';
import { ArrowIcon } from '../ui/ArrowIcon';
import { siteConfig } from '../../config/site';

export const StickyCta: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroEl = document.getElementById('hero');
      const finalCtaEl = document.getElementById('final-cta');

      const heroBottom = heroEl ? heroEl.getBoundingClientRect().bottom : 600;
      const finalCtaTop = finalCtaEl ? finalCtaEl.getBoundingClientRect().top : Infinity;
      const windowHeight = window.innerHeight;

      // Show after hero scrolled out of view AND final CTA is not in view
      const isPastHero = heroBottom < 0;
      const isFinalCtaVisible = finalCtaTop <= windowHeight;

      setVisible(isPastHero && !isFinalCtaVisible);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className={`
        fixed bottom-0 left-0 right-0 z-40 sm:hidden
        bg-[var(--mint)] text-[var(--on-mint)]
        pb-[env(safe-area-inset-bottom)]
        transition-transform duration-250 ease-[var(--ease-out)]
        ${visible ? 'translate-y-0' : 'translate-y-full'}
      `}
    >
      <a
        href={siteConfig.communityUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-3 h-[56px] w-full px-6 font-hanken font-semibold text-[15px]"
      >
        <span>Join the free community</span>
        <ArrowIcon size={16} />
        <span className="sr-only">(opens in a new tab)</span>
      </a>
    </div>
  );
};
