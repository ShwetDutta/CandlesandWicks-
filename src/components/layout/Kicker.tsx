import React from 'react';
import { useInView } from '../../hooks/useInView';
import { useReducedMotion } from '../../hooks/useReducedMotion';

interface KickerProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
}

export const Kicker: React.FC<KickerProps> = ({ children, id, className = '' }) => {
  const { ref, inView } = useInView(0.25);
  const prefersReduced = useReducedMotion();

  return (
    <div
      ref={ref}
      id={id}
      className={`inline-flex items-center gap-[10px] text-kicker text-[var(--muted)] ${className}`}
      style={{
        opacity: inView || prefersReduced ? 1 : 0,
        transition: prefersReduced ? 'none' : 'opacity 400ms var(--ease-out)',
      }}
    >
      <span
        className="w-[6px] h-[6px] bg-[var(--mint)] shrink-0"
        aria-hidden="true"
      />
      <span>{children}</span>
    </div>
  );
};
