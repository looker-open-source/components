import { useEffect, useState } from 'react';
import { useCallbackRef } from '../utils';
export const useElementVisibility = () => {
  const [element, ref] = useCallbackRef();
  const [isVisible, setIsVisible] = useState(true);
  useEffect(() => {
    const observer = typeof IntersectionObserver === 'undefined' ? null : new IntersectionObserver(([entry]) => {
      setIsVisible(entry.intersectionRatio > 0);
    }, {
      threshold: [0, 1]
    });

    if (element && observer) {
      observer.observe && observer.observe(element);
    }

    return () => {
      if (element && observer) {
        observer.unobserve && observer.unobserve(element);
      }
    };
  }, [element]);
  return [isVisible, ref];
};
//# sourceMappingURL=MenuHeading.hooks.js.map