import { useEffect } from 'react';
import { useInView } from 'framer-motion';

export const useScrollAnimation = (ref, onEnter, onLeave) => {
  const isInView = useInView(ref, { once: false, amount: 0.3 });

  useEffect(() => {
    if (isInView) {
      onEnter?.();
    } else {
      onLeave?.();
    }
  }, [isInView, onEnter, onLeave]);

  return isInView;
}; 