import { useState, useCallback } from 'react';
import { useSafeLayoutEffect } from './useSafeLayoutEffect';

const isOverflowing = node => node.offsetWidth < node.scrollWidth;

export const useIsTruncated = (element, identity) => {
  const [isTruncated, setIsTruncated] = useState(false);
  const handleResize = useCallback(() => {
    element && setIsTruncated(isOverflowing(element));
  }, [element]);
  useSafeLayoutEffect(() => {
    if (!element) {
      return;
    }

    const resizeObserver = new ResizeObserver(() => handleResize());

    if (element) {
      resizeObserver.observe(element);
    }

    return () => {
      if (!resizeObserver) {
        return;
      }

      resizeObserver.disconnect();
    };
  }, [handleResize, element, identity]);
  return isTruncated;
};
//# sourceMappingURL=useIsTruncated.js.map