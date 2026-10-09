import React from 'react';
import { ChamferPanel } from '../ui/ChamferPanel';
import { premiseSteps } from './steps';
import { useReducedMotion } from '../../hooks/useReducedMotion';

interface CandleStageProps {
  activeStep: number; // 0, 1, 2, 3
}

export const CandleStage: React.FC<CandleStageProps> = ({ activeStep }) => {
  const prefersReduced = useReducedMotion();

  // Step state definitions
  const currentStep = premiseSteps[activeStep] || premiseSteps[0];

  return (
    <figure
      aria-label="An illustrative candlestick showing market context"
      className="w-full h-full flex flex-col justify-between"
    >
      <figcaption className="sr-only">
        An illustrative candlestick. As you scroll, it shows how a single candle can hide the events, decisions, news and expectations that moved price.
      </figcaption>

      <ChamferPanel
        cut={24}
        mobileCut={16}
        fill="var(--surface-2)"
        borderColor="var(--line-strong)"
        className="w-full h-[calc(100vh-200px)] max-h-[580px] max-sm:h-[46svh]"
      >
        <div
          aria-hidden="true"
          className="relative w-full h-full flex flex-col items-center justify-between p-6 max-sm:p-4 overflow-hidden select-none"
        >
          {/* Stage Mono Label Top */}
          <div className="w-full text-center">
            <span className="font-mono-plex text-[12px] text-[var(--muted)] tracking-wider uppercase transition-opacity duration-300">
              {currentStep.stageLabel}
            </span>
          </div>

          {/* Candlestick Graphic Center */}
          <div className="relative flex-1 w-full max-w-[360px] flex items-center justify-center my-4">
            {/* Background Grid Baselines (every 64px, 6% opacity steel) */}
            <div className="absolute inset-0 flex flex-col justify-between pointer-events-none opacity-6">
              <div className="w-full h-[1px] bg-[var(--steel)]" />
              <div className="w-full h-[1px] bg-[var(--steel)]" />
              <div className="w-full h-[1px] bg-[var(--steel)]" />
              <div className="w-full h-[1px] bg-[var(--steel)]" />
              <div className="w-full h-[1px] bg-[var(--steel)]" />
            </div>

            {/* Wick */}
            <div
              className="absolute w-[1.5px] bg-[var(--mint)] transition-all duration-800 ease-[var(--ease-inout)]"
              style={{
                top: activeStep >= 1 ? '4px' : '22%',
                bottom: activeStep >= 1 ? '4px' : '22%',
                left: '50%',
                transform: 'translateX(-50%)',
              }}
            />

            {/* Ticks on Wick (Steps 3 & 4) - 2 above body on top wick, 2 below body on bottom wick */}
            {(activeStep >= 2 || prefersReduced) && (
              <>
                {/* Top Wick Ticks (Above body) */}
                <div className="absolute top-2 bottom-[calc(50%+140px)] max-sm:bottom-[calc(50%+100px)] left-1/2 w-full max-w-[320px] -translate-x-1/2 pointer-events-none flex flex-col justify-evenly max-sm:hidden z-20">
                  <div
                    className="relative flex items-center gap-2 left-[50%] transition-opacity duration-500"
                    style={{ transitionDelay: '0ms' }}
                  >
                    <div className="w-[14px] h-[1.5px] bg-[var(--mint)] -translate-x-1/2 shrink-0" />
                    <span className="font-mono-plex text-[12px] text-[var(--muted)] whitespace-nowrap pl-1">
                      Policy decision
                    </span>
                  </div>
                  <div
                    className="relative flex items-center gap-2 left-[50%] transition-opacity duration-500"
                    style={{ transitionDelay: '350ms' }}
                  >
                    <div className="w-[14px] h-[1.5px] bg-[var(--mint)] -translate-x-1/2 shrink-0" />
                    <span className="font-mono-plex text-[12px] text-[var(--muted)] whitespace-nowrap pl-1">
                      Earnings
                    </span>
                  </div>
                </div>

                {/* Bottom Wick Ticks (Below body) */}
                <div className="absolute top-[calc(50%+140px)] max-sm:top-[calc(50%+100px)] bottom-2 left-1/2 w-full max-w-[320px] -translate-x-1/2 pointer-events-none flex flex-col justify-evenly max-sm:hidden z-20">
                  <div
                    className="relative flex items-center gap-2 left-[50%] transition-opacity duration-500"
                    style={{ transitionDelay: '700ms' }}
                  >
                    <div className="w-[14px] h-[1.5px] bg-[var(--mint)] -translate-x-1/2 shrink-0" />
                    <span className="font-mono-plex text-[12px] text-[var(--muted)] whitespace-nowrap pl-1">
                      Unscheduled news
                    </span>
                  </div>
                  <div
                    className="relative flex items-center gap-2 left-[50%] transition-opacity duration-500"
                    style={{ transitionDelay: '1050ms' }}
                  >
                    <div className="w-[14px] h-[1.5px] bg-[var(--mint)] -translate-x-1/2 shrink-0" />
                    <span className="font-mono-plex text-[12px] text-[var(--muted)] whitespace-nowrap pl-1">
                      Positioning
                    </span>
                  </div>
                </div>
              </>
            )}

            {/* Candle Body */}
            <div
              className={`
                relative z-10 w-[240px] max-sm:w-[172px] h-[280px] max-sm:h-[200px]
                flex items-center justify-center p-6 text-center
                transition-all duration-600 ease-[var(--ease-out)]
                ${activeStep === 0 || activeStep === 1 ? 'bg-[var(--text)] text-[var(--bg)]' : ''}
                ${activeStep === 2 ? 'bg-[var(--mint-deep)] border border-[var(--mint)] text-[var(--text)]' : ''}
                ${activeStep === 3 ? 'bg-[var(--mint)] text-[var(--on-mint)]' : ''}
              `}
            >
              {/* Step 1 Content */}
              {activeStep === 0 && (
                <span className="font-bricolage font-medium text-[28px] max-sm:text-[20px] leading-tight">
                  A candle.
                </span>
              )}

              {/* Step 2 Content */}
              {activeStep === 1 && (
                <span className="font-bricolage font-medium text-[24px] max-sm:text-[18px] leading-snug">
                  It travelled further than it settled.
                </span>
              )}

              {/* Step 3 Content */}
              {(activeStep === 2 || prefersReduced) && (
                <div className="flex flex-col gap-2 font-bricolage font-medium text-[22px] max-sm:text-[16px] text-left w-full">
                  <span className="block opacity-100 transition-opacity duration-300">A decision.</span>
                  <span className="block opacity-100 transition-opacity duration-300 delay-100">A headline.</span>
                  <span className="block opacity-100 transition-opacity duration-300 delay-200">An expectation.</span>
                  <span className="block opacity-100 transition-opacity duration-300 delay-300">A surprise.</span>
                </div>
              )}

              {/* Step 4 Content */}
              {activeStep === 3 && !prefersReduced && (
                <span className="font-bricolage font-medium text-[88px] max-sm:text-[56px] leading-none">
                  Why?
                </span>
              )}
            </div>
          </div>

          {/* Stage Caption Bottom */}
          <div className="w-full text-center">
            <span className="font-hanken text-[13px] text-[var(--muted)]">
              Illustrative. Not market data.
            </span>
          </div>
        </div>
      </ChamferPanel>
    </figure>
  );
};
