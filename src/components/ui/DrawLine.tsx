import React from 'react';
import { useInView } from '../../hooks/useInView';
import { useReducedMotion } from '../../hooks/useReducedMotion';

interface DrawLineProps {
  className?: string;
  color?: string;
  delay?: number;
  duration?: number;
  vertical?: boolean;
}

export const DrawLine: React.FC<DrawLineProps> = ({
  className = '',
  color = 'var(--line)',
  delay = 0,
  duration = 800,
  vertical = false,
}) => {
  const { ref, inView } = useInView(0.2);
  const prefersReduced = useReducedMotion();

  return (
    <div
      ref={ref}
      className={`relative ${vertical ? 'w-[1px] h-full' : 'w-full h-[1px]'} ${className}`}
      style={{ backgroundColor: color }}
    >
      <div
        className="absolute inset-0 bg-current origin-left"
        style={{
          transformOrigin: vertical ? 'top' : 'left',
          transform: inView || prefersReduced ? (vertical ? 'scaleY(1)' : 'scaleX(1)') : (vertical ? 'scaleY(0)' : 'scaleX(0)'),
          transitionProperty: 'transform',
          transitionDuration: prefersReduced ? '0ms' : `${duration}ms`,
          transitionTimingFunction: 'var(--ease-inout)',
          transitionDelay: prefersReduced ? '0ms' : `${delay}ms`,
        }}
      />
    </div>
  );
};
