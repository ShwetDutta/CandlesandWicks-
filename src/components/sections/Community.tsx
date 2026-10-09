import React from 'react';
import { Section } from '../layout/Section';
import { Container } from '../layout/Container';
import { Kicker } from '../layout/Kicker';
import { MaskedLines } from '../ui/MaskedLines';
import { FadeRise } from '../ui/FadeRise';

export const Community: React.FC = () => {
  const h2Lines = [
    <>
      A place to think about markets <span className="text-[var(--mint)]">properly.</span>
    </>,
  ];

  const features = [
    'Market context, explained',
    'Founder-led breakdowns of how events moved price',
    'Questions answered by traders at a similar level',
    'Education that builds on the basics',
  ];

  return (
    <Section id="community" bg="bg" aria-labelledby="community-heading">
      <Container>
        <div className="flex flex-col gap-16">
          {/* Header */}
          <div>
            <Kicker>Inside the free community</Kicker>
            <MaskedLines
              lines={h2Lines}
              as="h2"
              id="community-heading"
              className="text-h2 text-[var(--text)] mt-4"
            />
          </div>

          {/* 2 x 2 Arrangement (No cards, no backgrounds, 1px top border) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {features.map((title, idx) => (
              <FadeRise key={idx} delay={idx * 100} duration={600}>
                <div className="pt-5 border-t border-[var(--line)]">
                  <h3 className="font-bricolage font-medium text-[28px] text-[var(--text)] leading-[1.1]">
                    {title}
                  </h3>
                </div>
              </FadeRise>
            ))}
          </div>

          {/* Descriptive Copy */}
          <FadeRise delay={400} duration={600} className="flex flex-col gap-3 max-w-[36em]">
            <p className="font-hanken text-body text-[var(--text)]">
              For retail traders who already know the basics and want to understand more than the chart.
            </p>
            <p className="font-hanken text-body text-[var(--muted)]">
              Probably not for you if you are looking for signals, tips or guaranteed outcomes.
            </p>
          </FadeRise>
        </div>
      </Container>
    </Section>
  );
};
