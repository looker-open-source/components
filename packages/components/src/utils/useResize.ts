/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import throttle from 'lodash/throttle';
import { useMemo } from 'react';
import { useSafeLayoutEffect } from './useSafeLayoutEffect';

/**
 * Calls the provided handler function when the element is resized.
 * If the handler contains a state setter, it should be wrapped in useCallback to avoid an infinite loop.
 * @param element the element to observe
 * @param handler the function to call on resize
 */
export const useResize = (element: HTMLElement | null, handler: () => void) => {
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
