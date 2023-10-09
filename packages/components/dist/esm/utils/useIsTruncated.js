import { useState, useCallback } from 'react';
import { useSafeLayoutEffect } from './useSafeLayoutEffect';
import { isOverflowing } from './isOverflowing';
export const useIsTruncated = (element, identity) => {
  const [isTruncated, setIsTruncated] = useState(false);
  const handleResize = useCallback(() => {
    if (!element) return;
    setIsTruncated(isOverflowing(element));
  }, [element]);
  useSafeLayoutEffect(() => {
    if (!element) return;
    const resizeObserver = new ResizeObserver(handleResize);
    resizeObserver.observe(element);
    return () => {
      resizeObserver.disconnect();
    };
  }, [handleResize, element, identity]);
  return isTruncated;
};
//# sourceMappingURL=useIsTruncated.js.map