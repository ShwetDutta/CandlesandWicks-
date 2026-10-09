import React from 'react';
import { useInView } from '../../hooks/useInView';
import { useReducedMotion } from '../../hooks/useReducedMotion';

interface MaskedLinesProps {
  lines: React.ReactNode[];
  as?: React.ElementType;
  id?: string;
  className?: string;
  lineClassName?: string;
  delay?: number; // base delay in ms
  stagger?: number; // ms stagger between lines
  duration?: number; // ms animation duration
}

export const MaskedLines: React.FC<MaskedLinesProps> = ({
  lines,
  as: Component = 'h2',
  id,
  className = '',
  lineClassName = '',
  delay = 0,
  stagger = 90,
  duration = 800,
}) => {
  const { ref, inView } = useInView(0.25);
  const prefersReduced = useReducedMotion();

  return (
    <Component ref={ref} id={id} className={className}>
      {lines.map((line, idx) => {
        const lineDelay = prefersReduced ? 0 : delay + idx * stagger;

        return (
          <span key={idx} className="block overflow-hidden">
            <span
              className={`block transform transition-transform ${lineClassName}`}
              style={{
                transform: inView || prefersReduced ? 'translateY(0%)' : 'translateY(105%)',
                transitionDuration: prefersReduced ? '0ms' : `${duration}ms`,
                transitionTimingFunction: 'var(--ease-out)',
                transitionDelay: `${lineDelay}ms`,
              }}
            >
              {line}
            </span>
          </span>
        );
      })}
    </Component>
  );
};
