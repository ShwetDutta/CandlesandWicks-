import { useEffect, useState } from 'react';

/**
 * Tracks active step index (0, 1, 2, 3) for the Premise section based on step blocks in view.
 */
export function useActiveStep(stepRefs: React.RefObject<(HTMLElement | null)[]>): number {
  const [activeStep, setActiveStep] = useState<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      const elements = stepRefs.current;
      if (!elements || elements.length === 0) return;

      const targetFocusY = window.innerHeight * 0.45; // 45% down the viewport

      let closestIndex = 0;
      let minDistance = Infinity;

      elements.forEach((el, index) => {
        if (!el) return;
        const rect = el.getBoundingClientRect();
        // Element center relative to viewport top
        const elementCenter = rect.top + rect.height / 2;
        const distance = Math.abs(elementCenter - targetFocusY);

        if (distance < minDistance) {
          minDistance = distance;
          closestIndex = index;
        }
      });

      setActiveStep(closestIndex);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, [stepRefs]);

  return activeStep;
}

