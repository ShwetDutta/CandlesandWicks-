import React from 'react';
import { Section } from '../layout/Section';
import { Container } from '../layout/Container';
import { Button } from '../ui/Button';
import { Badge } from '../brand/Badge';
import { MaskedLines } from '../ui/MaskedLines';
import { FadeRise } from '../ui/FadeRise';
import { siteConfig } from '../../config/site';

export const FinalCta: React.FC = () => {
  const h2Lines = [
    <>
      Start with the <span className="text-[var(--mint)]">why.</span>
    </>,
  ];

  return (
    <Section id="final-cta" bg="surface-2" aria-labelledby="finalcta-heading">
      <Container>
        <div className="grid grid-cols-12 gap-8 items-center">
          {/* Mobile Badge Placement (Above headline) */}
          <div className="col-span-12 block lg:hidden pb-4">
            <Badge size={140} alt="" loading="lazy" />
          </div>

          {/* Left Column Copy & CTA (cols 1-8) */}
          <div className="col-span-12 lg:col-span-8 flex flex-col gap-8">
            <MaskedLines
              lines={h2Lines}
              as="h2"
              id="finalcta-heading"
              className="font-bricolage font-medium text-[clamp(52px,7.5vw,120px)] leading-[0.94] tracking-[-0.045em] text-[var(--text)]"
            />

            <FadeRise delay={200} duration={600}>
              <p className="font-hanken text-lead text-[var(--text)]/85">
                Free to join. Built for traders who already know the basics.
              </p>
            </FadeRise>

            <FadeRise delay={300} duration={600}>
              <div className="flex flex-col gap-3 items-start">
                <Button>Join the free community</Button>
                <p className="font-hanken text-[13px] text-[var(--muted)]">
                  Opens {siteConfig.communityPlatform} in a new tab.
                </p>
              </div>
            </FadeRise>
          </div>

          {/* Right Column Logo Badge (cols 9-12 Desktop) */}
          <div className="hidden lg:flex col-span-4 items-center justify-end">
            <FadeRise delay={400} duration={800}>
              <Badge size={220} alt="" loading="lazy" />
            </FadeRise>
          </div>
        </div>
      </Container>
    </Section>
  );
};
