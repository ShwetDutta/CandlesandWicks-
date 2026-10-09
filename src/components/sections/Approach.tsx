import React from 'react';
import { Section } from '../layout/Section';
import { Container } from '../layout/Container';
import { Kicker } from '../layout/Kicker';
import { MaskedLines } from '../ui/MaskedLines';
import { DrawLine } from '../ui/DrawLine';
import { FadeRise } from '../ui/FadeRise';

interface ApproachItem {
  id: string;
  title: string;
  body: string;
  colOffset: string;
}

export const Approach: React.FC = () => {
  const h2Lines = ['Four ideas we keep returning to.'];

  const items: ApproachItem[] = [
    {
      id: '01',
      title: 'Context before pattern',
      body: 'Patterns describe price. Context explains it. We start with what was happening in the world, then look at what the chart did.',
      colOffset: 'lg:col-start-1',
    },
    {
      id: '02',
      title: 'Systems over impulse',
      body: 'Decisions made in the moment are hard to repeat and harder to learn from. We prefer rules that can be written down, questioned and improved.',
      colOffset: 'lg:col-start-3',
    },
    {
      id: '03',
      title: 'Process over prediction',
      body: 'Nobody knows what happens next. We focus on understanding, preparation and discipline, not on being right about the future.',
      colOffset: 'lg:col-start-2',
    },
    {
      id: '04',
      title: 'Technology as a tool',
      body: 'Alongside education and research, we build algorithmic trading technology. This page isn\'t about that. It is about how we think.',
      colOffset: 'lg:col-start-4',
    },
  ];

  return (
    <Section id="approach" bg="bg" aria-labelledby="approach-heading">
      <Container>
        {/* Header */}
        <div className="mb-20">
          <Kicker>How we think</Kicker>
          <MaskedLines
            lines={h2Lines}
            as="h2"
            id="approach-heading"
            className="text-h2 text-[var(--text)] mt-4"
          />
        </div>

        {/* Staggered Items */}
        <div className="flex flex-col gap-16">
          {items.map((item, idx) => (
            <div key={item.id} className="flex flex-col gap-6">
              {/* Top Separator Line */}
              <DrawLine color="var(--line)" duration={800} />

              <div className="grid grid-cols-12 gap-6 pt-4">
                <div className={`col-span-12 lg:col-span-7 ${item.colOffset}`}>
                  <FadeRise delay={idx * 100} duration={600}>
                    <div className="group flex flex-col gap-4">
                      {/* Mint indicator line above title */}
                      <div className="w-[28px] h-[2px] bg-[var(--mint)] transition-all duration-350 ease-[var(--ease-out)] group-hover:w-[56px]" />

                      {/* H3 Title with right hover shift */}
                      <h3 className="font-bricolage font-medium text-h3 text-[var(--text)] transition-transform duration-350 ease-[var(--ease-out)] group-hover:translate-x-[10px]">
                        {item.title}
                      </h3>

                      {/* Body */}
                      <p className="font-hanken font-normal text-body text-[var(--muted)] max-w-[28em]">
                        {item.body}
                      </p>
                    </div>
                  </FadeRise>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
};
