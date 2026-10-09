import React from 'react';
import { Section } from '../layout/Section';
import { Container } from '../layout/Container';
import { Kicker } from '../layout/Kicker';
import { Button } from '../ui/Button';
import { TextLink } from '../ui/TextLink';
import { MaskedLines } from '../ui/MaskedLines';
import { FadeRise } from '../ui/FadeRise';
import { Monolith } from '../brand/Monolith';

export const Hero: React.FC = () => {
  const h1Lines = [
    <>
      Understand <span className="text-[var(--mint)]">why</span>
    </>,
    'the market moves.',
  ];

  return (
    <Section id="hero" bg="bg" className="min-h-screen flex flex-col justify-center pt-[88px] pb-6 overflow-hidden">
      <Container className="relative z-10 w-full">
        <div className="grid grid-cols-12 gap-6 items-center">
          {/* Left Column Content (cols 1-8) */}
          <div className="col-span-12 lg:col-span-8 flex flex-col justify-center gap-4 z-10">
            <Kicker>Trading education and research</Kicker>

            <MaskedLines
              lines={h1Lines}
              as="h1"
              className="text-h1 font-bricolage text-[var(--text)]"
              delay={250}
              stagger={90}
              duration={900}
            />

            <FadeRise delay={800} duration={600}>
              <p className="text-lead text-[var(--text)]/80 max-w-[32em] pt-1">
                A chart shows you what happened. We study what was underneath it: the events, decisions, expectations and context that move price.
              </p>
            </FadeRise>

            {/* CTAs Row */}
            <FadeRise delay={880} duration={600}>
              <div className="flex items-center gap-6 flex-wrap pt-2">
                <Button>Join the free community</Button>
                <TextLink href="#start-here" icon="play" variant="text">
                  Watch the introduction
                </TextLink>
              </div>
            </FadeRise>

            {/* Note under buttons */}
            <FadeRise delay={960} duration={600}>
              <p className="font-hanken text-[13px] text-[var(--muted)]">
                Free. Built for traders who already know the basics.
              </p>
            </FadeRise>

            {/* Bottom-Left Disclaimer Line */}
            <FadeRise delay={1040} duration={600} className="pt-2">
              <p className="font-hanken text-[12px] text-[var(--muted)]/80">
                Educational content. Not financial advice.
              </p>
            </FadeRise>
          </div>

          {/* Right Column Monolith Candle (cols 9-12) */}
          <div className="col-span-12 lg:col-span-4 flex items-center justify-center relative h-[360px] lg:h-[460px]">
            <Monolith />
          </div>
        </div>
      </Container>
    </Section>
  );
};
