import { useEffect, useState, useRef } from 'react';
import { useReducedMotion } from './useReducedMotion';

/**
 * Triggers `inView = true` once when element enters threshold.
 */
export function useInView<T extends HTMLElement = HTMLDivElement>(
  threshold = 0.25,
  rootMargin = '0px 0px -10% 0px'
): { ref: React.RefObject<T | null>; inView: boolean } {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState<boolean>(false);
  const prefersReduced = useReducedMotion();

  useEffect(() => {
    if (prefersReduced) {
      setInView(true);
      return;
    }

    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(node);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold, rootMargin, prefersReduced]);

  return { ref, inView };
}
