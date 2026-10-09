import React, { useEffect, useState } from 'react';
import { useReducedMotion } from '../../hooks/useReducedMotion';

export const Monolith: React.FC = () => {
  const prefersReduced = useReducedMotion();
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // Wait for initial render/fonts load
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const isAnimated = loaded && !prefersReduced;

  return (
    <div
      className="relative w-full h-full flex items-center justify-center select-none"
      aria-hidden="true"
    >
      {/* Monolith Container */}
      <div
        className="relative flex flex-col items-center justify-center transition-all duration-900"
        style={{
          filter: isAnimated || prefersReduced ? 'drop-shadow(0 0 32px rgba(44, 245, 168, 0.28))' : 'none',
        }}
      >
        {/* Monolith Wick - extends 8svh above top and 12svh below bottom */}
        <div
          className="w-[1.5px] bg-[var(--mint)] absolute"
          style={{
            top: '-8svh',
            bottom: '-12svh',
            left: '50%',
            transformOrigin: 'top',
            transform: isAnimated || prefersReduced ? 'translateX(-50%) scaleY(1)' : 'translateX(-50%) scaleY(0)',
            transition: prefersReduced ? 'none' : 'transform 1200ms cubic-bezier(0.65, 0, 0.35, 1)',
          }}
        />

        {/* Monolith Body */}
        <div
          className="relative z-10 w-[132px] max-sm:w-[44px] h-[38svh] max-sm:h-[24svh] bg-[var(--mint-deep)] border border-[var(--mint)]"
          style={{
            transformOrigin: 'center',
            transform: isAnimated || prefersReduced ? 'scaleY(1)' : 'scaleY(0)',
            opacity: isAnimated || prefersReduced ? 1 : 0,
            transition: prefersReduced
              ? 'none'
              : 'transform 900ms cubic-bezier(0.16, 1, 0.3, 1) 500ms, opacity 900ms cubic-bezier(0.16, 1, 0.3, 1) 500ms',
          }}
        >
          {/* Dashed Crosshair Line & Tag - aligned to top edge of body */}
          <div
            className="absolute top-0 left-1/2 flex items-center z-20"
            style={{
              width: 'calc(50vw + 200px)',
            }}
          >
            {/* Dashed horizontal line */}
            <div
              className="h-[1px] bg-transparent border-t border-dashed border-[var(--mint)] opacity-35 origin-left"
              style={{
                width: 'calc(100% - 64px)',
                transform: isAnimated || prefersReduced ? 'scaleX(1)' : 'scaleX(0)',
                transition: prefersReduced
                  ? 'none'
                  : 'transform 700ms cubic-bezier(0.65, 0, 0.35, 1) 1100ms',
              }}
            />

            {/* Chamfered "WHY" Tag */}
            <div
              className="chamfer-tag relative flex items-center justify-center bg-[var(--mint)] text-[var(--on-mint)] font-mono-plex text-[12px] font-normal w-[56px] h-[24px] max-sm:w-[48px] max-sm:h-[22px] ml-[-1px]"
              style={{
                opacity: isAnimated || prefersReduced ? 1 : 0,
                transition: prefersReduced ? 'none' : 'opacity 300ms ease-out 1800ms',
              }}
            >
              WHY
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
