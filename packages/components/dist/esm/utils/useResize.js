import throttle from 'lodash/throttle';
import { useMemo } from 'react';
import { useSafeLayoutEffect } from './useSafeLayoutEffect';
export const useResize = (element, handler) => {
  const throttledHandler = useMemo(() => throttle(handler, 100), [handler]);
  useSafeLayoutEffect(() => {
    if (!element) return;
    handler();
    const resizeObserver = new ResizeObserver(throttledHandler);
    resizeObserver.observe(element);
    window.addEventListener('resize', throttledHandler);
    return () => {
      resizeObserver.disconnect();
      window.removeEventListener('resize', throttledHandler);
    };
  }, [handler, throttledHandler, element]);
};
//# sourceMappingURL=useResize.js.map