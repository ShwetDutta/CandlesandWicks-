import React from 'react';
import { useInView } from '../../hooks/useInView';
import { useReducedMotion } from '../../hooks/useReducedMotion';

interface FadeRiseProps {
  children: React.ReactNode;
  as?: React.ElementType;
  className?: string;
  delay?: number;
  duration?: number;
  threshold?: number;
}

export const FadeRise: React.FC<FadeRiseProps> = ({
  children,
  as: Component = 'div',
  className = '',
  delay = 0,
  duration = 600,
  threshold = 0.25,
}) => {
  const { ref, inView } = useInView(threshold);
  const prefersReduced = useReducedMotion();

  return (
    <Component
      ref={ref}
      className={`transition-all ${className}`}
      style={{
        opacity: inView || prefersReduced ? 1 : 0,
        transform: inView || prefersReduced ? 'translateY(0px)' : 'translateY(12px)',
        transitionDuration: prefersReduced ? '0ms' : `${duration}ms`,
        transitionTimingFunction: 'var(--ease-out)',
        transitionDelay: prefersReduced ? '0ms' : `${delay}ms`,
      }}
    >
      {children}
    </Component>
  );
};
