import React from 'react';

interface SectionProps {
  id?: string;
  children: React.ReactNode;
  bg?: 'bg' | 'surface' | 'surface-2' | 'footer';
  className?: string;
  'aria-labelledby'?: string;
}

export const Section: React.FC<SectionProps> = ({
  id,
  children,
  bg = 'bg',
  className = '',
  'aria-labelledby': ariaLabelledBy,
}) => {
  const bgClasses = {
    bg: 'bg-[var(--bg)]',
    surface: 'bg-[var(--surface)]',
    'surface-2': 'bg-[var(--surface-2)]',
    footer: 'bg-[var(--footer)]',
  }[bg];

  return (
    <section
      id={id}
      aria-labelledby={ariaLabelledBy}
      className={`relative py-[clamp(72px,7vw,128px)] ${bgClasses} ${className}`}
    >
      {children}
    </section>
  );
};
