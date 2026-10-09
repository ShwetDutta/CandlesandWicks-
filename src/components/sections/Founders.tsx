import React from 'react';
import { Section } from '../layout/Section';
import { Container } from '../layout/Container';
import { Kicker } from '../layout/Kicker';
import { FadeRise } from '../ui/FadeRise';
import { MaskedLines } from '../ui/MaskedLines';

export const Founders: React.FC = () => {
  const h2Lines = [
    <>
      Seven years of watching <span className="text-[var(--mint)]">why</span> things moved.
    </>,
  ];

  return (
    <Section id="founders" bg="bg" aria-labelledby="founders-heading">
      <Container>
        <div className="grid grid-cols-12 gap-8 items-start">
          {/* Left Column (cols 1-5) */}
          <div className="col-span-12 lg:col-span-5 flex flex-col gap-4">
            <Kicker>The founders</Kicker>

            {/* Large Numeral ~7 */}
            <FadeRise delay={200} duration={1000}>
              <div className="text-numeral-large text-[var(--steel)] font-bricolage select-none">
                ~7
              </div>
              <p className="font-hanken font-normal text-[15px] text-[var(--muted)] mt-2">
                years in the markets, each
              </p>
            </FadeRise>
          </div>

          {/* Right Column (cols 7-12) */}
          <div className="col-span-12 lg:col-span-6 lg:col-start-7 flex flex-col gap-8 pt-2">
            <MaskedLines
              lines={h2Lines}
              as="h2"
              id="founders-heading"
              className="text-h2 text-[var(--text)]"
            />

            <FadeRise delay={300} duration={600}>
              <p className="font-hanken text-body text-[var(--muted)]">
                The founders of Candles &amp; Wicks have each spent around seven years trading. Long enough to learn how much of a move is visible on the chart, and how much isn&apos;t.
              </p>
            </FadeRise>
          </div>
        </div>
      </Container>
    </Section>
  );
};
