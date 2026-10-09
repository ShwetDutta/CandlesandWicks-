import { useEffect, useState } from 'react';

/**
 * Tracks active step index (0, 1, 2, 3) for the Premise section based on step blocks in view.
 */
export function useActiveStep(stepRefs: React.RefObject<(HTMLElement | null)[]>): number {
  const [activeStep, setActiveStep] = useState<number>(0);

  useEffect(() => {
    const elements = stepRefs.current;
    if (!elements || elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = elements.findIndex((el) => el === entry.target);
            if (index !== -1) {
              setActiveStep(index);
            }
          }
        });
      },
      {
        rootMargin: '-45% 0px -45% 0px',
        threshold: 0,
      }
    );

    elements.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [stepRefs]);

  return activeStep;
}
