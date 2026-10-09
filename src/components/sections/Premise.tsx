import React, { useRef } from 'react';
import { Section } from '../layout/Section';
import { Container } from '../layout/Container';
import { Kicker } from '../layout/Kicker';
import { MaskedLines } from '../ui/MaskedLines';
import { CandleStage } from '../premise/CandleStage';
import { premiseSteps } from '../premise/steps';
import { useActiveStep } from '../../hooks/useActiveStep';

export const Premise: React.FC = () => {
  const stepRefs = useRef<(HTMLElement | null)[]>([]);
  const activeStep = useActiveStep(stepRefs);

  const h2Lines = [
    <>
      A chart tells you <span className="text-[var(--mint)]">what</span> happened.
    </>,
  ];

  return (
    <Section id="premise" bg="surface" aria-labelledby="premise-heading">
      <Container>
        {/* Section Header */}
        <div className="mb-12 max-w-[720px]">
          <Kicker>What you see, and what&apos;s underneath</Kicker>
          <MaskedLines
            lines={h2Lines}
            as="h2"
            id="premise-heading"
            className="text-h2 text-[var(--text)] mt-4"
          />
        </div>

        {/* 2-Column Grid / Stack for Steps & Sticky Stage */}
        <div className="grid grid-cols-12 gap-6 lg:gap-8 items-start relative">
          {/* Left Column Steps */}
          <div className="col-span-12 lg:col-span-5 flex flex-col order-2 lg:order-1">
            <div className="flex flex-col">
              {premiseSteps.map((step, idx) => {
                const isActive = activeStep === idx;

                return (
                  <article
                    key={step.id}
                    ref={(el) => {
                      stepRefs.current[idx] = el;
                    }}
                    className={`
                      min-h-[75vh] max-sm:min-h-[55vh] flex flex-col justify-center py-10 transition-opacity duration-300
                      ${isActive ? 'opacity-100' : 'opacity-40'}
                    `}
                  >
                    <span className="font-mono-plex text-[12px] text-[var(--muted)] mb-2">
                      0{step.id}
                    </span>
                    <h3 className="font-bricolage font-medium text-[clamp(26px,3vw,44px)] text-[var(--text)] leading-[1.08] tracking-[-0.03em] mb-4">
                      {step.title}
                    </h3>
                    <p className="font-hanken font-normal text-body text-[var(--muted)] max-w-[28em]">
                      {step.body}
                    </p>
                  </article>
                );
              })}
            </div>
          </div>

          {/* Right Column Sticky Candle Stage */}
          <div className="col-span-12 lg:col-span-6 lg:col-start-7 sticky top-[96px] max-sm:top-[70px] z-20 order-1 lg:order-2 max-lg:mb-6">
            <CandleStage activeStep={activeStep} />
          </div>
        </div>
      </Container>
    </Section>
  );
};

