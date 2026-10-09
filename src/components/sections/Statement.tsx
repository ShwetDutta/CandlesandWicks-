import React from 'react';
import { Section } from '../layout/Section';
import { Container } from '../layout/Container';
import { Kicker } from '../layout/Kicker';
import { MaskedLines } from '../ui/MaskedLines';
import { FadeRise } from '../ui/FadeRise';

export const Statement: React.FC = () => {
  const h2Lines = ['A clear line.'];

  return (
    <Section id="statement" bg="surface" aria-labelledby="statement-heading">
      <Container>
        {/* Header */}
        <div className="mb-20">
          <Kicker>Where we stand</Kicker>
          <MaskedLines
            lines={h2Lines}
            as="h2"
            id="statement-heading"
            className="text-h2 text-[var(--text)] mt-4"
          />
        </div>

        {/* Two Flowing Statement Blocks */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start relative">
          {/* Block A: What it is */}
          <FadeRise delay={100} duration={600} className="flex flex-col gap-6">
            <span className="font-hanken font-medium text-[14px] text-[var(--mint)]">
              What it is
            </span>
            <p className="text-large-statement text-[var(--text)]">
              Education built around market context. Research into why price moves. Systematic, disciplined thinking. A community of traders who already know the basics.
            </p>
          </FadeRise>

          {/* Vertical Divider (Desktop) / Horizontal Divider (Mobile) */}
          <div
            className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-[1px] bg-[var(--line)] -translate-x-1/2"
            aria-hidden="true"
          />
          <div
            className="block lg:hidden w-full h-[1px] bg-[var(--line)]"
            aria-hidden="true"
          />

          {/* Block B: What it isn't */}
          <FadeRise delay={250} duration={600} className="flex flex-col gap-6">
            <span className="font-hanken font-medium text-[14px] text-[var(--muted)]">
              What it isn&apos;t
            </span>
            <p className="text-large-statement text-[var(--muted)]">
              Not a signal service. Not trade calls. Not a promise of returns. Not financial advice.
            </p>
          </FadeRise>
        </div>
      </Container>
    </Section>
  );
};
