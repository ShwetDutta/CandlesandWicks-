import React from 'react';
import { Section } from '../layout/Section';
import { Container } from '../layout/Container';
import { Kicker } from '../layout/Kicker';
import { MaskedLines } from '../ui/MaskedLines';
import { FounderVideo } from '../video/FounderVideo';

export const StartHere: React.FC = () => {
  const h2Lines = [
    <>
      Before you join, <span className="text-[var(--mint)]">hear</span> from us.
    </>,
  ];

  return (
    <Section id="start-here" bg="surface-2" aria-labelledby="starthere-heading">
      <Container>
        {/* Section Header */}
        <div className="mb-16">
          <Kicker>A word from the founders</Kicker>
          <MaskedLines
            lines={h2Lines}
            as="h2"
            id="starthere-heading"
            className="text-h2 text-[var(--text)] mt-4"
          />
        </div>

        {/* Video Component */}
        <FounderVideo />
      </Container>
    </Section>
  );
};
