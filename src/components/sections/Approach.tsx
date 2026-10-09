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
  const h2Lines = ['Four principles that guide our approach.'];

  const items: ApproachItem[] = [
    {
      id: '01',
      title: 'Understand the reason behind the move',
      body: 'A price chart shows you what happened. We also want to understand why it happened. We look at the news, events and other factors that may have influenced the market.',
      colOffset: 'lg:col-start-1',
    },
    {
      id: '02',
      title: 'Follow a plan, not your emotions',
      body: 'Making decisions in the heat of the moment can lead to mistakes. We believe in using clear rules and a consistent process that can be reviewed and improved over time.',
      colOffset: 'lg:col-start-3',
    },
    {
      id: '03',
      title: 'Focus on the process, not predictions',
      body: 'No one can predict every market move. Instead of trying to guess what happens next, we focus on research, preparation and making better-informed decisions.',
      colOffset: 'lg:col-start-2',
    },
    {
      id: '04',
      title: 'Use technology to make decisions more systematic',
      body: 'We combine market research and education with algorithmic trading technology built around defined rules. Our goal is to bring more structure and discipline to the decision-making process.',
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
