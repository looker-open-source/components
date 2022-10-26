import throttle from 'lodash/throttle';
import { useSafeLayoutEffect } from './useSafeLayoutEffect';
export const useResize = (element, handler) => {
  useSafeLayoutEffect(() => {
    const throttledHandler = throttle(handler, 100);

    if (!element) {
      return;
    }

    handler();
    const resizeObserver = new ResizeObserver(() => throttledHandler());

    if (element) {
      resizeObserver.observe(element);
    }

    window.addEventListener('resize', throttledHandler);
    return () => {
      window.removeEventListener('resize', throttledHandler);

      if (resizeObserver) {
        resizeObserver.disconnect();
      }
    };
  }, [handler, element]);
};
//# sourceMappingURL=useResize.js.map