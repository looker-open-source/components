/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import throttle from 'lodash/throttle'
import { useSafeLayoutEffect } from './useSafeLayoutEffect'

/**
 * Calls the provided handler function when the element is resized.
 * If the handler contains a state setter, it should be wrapped in useCallback to avoid an infinite loop.
 * @param element the element to observe
 * @param handler the function to call on resize
 */
export const useResize = (element: HTMLElement | null, handler: () => void) => {
  useSafeLayoutEffect(() => {
    const throttledHandler = throttle(handler, 100)

    if (!element) {
      return
    }

    handler()

    const resizeObserver = new ResizeObserver(() => throttledHandler())

    if (element) {
      resizeObserver.observe(element as unknown as HTMLElement)
    }

    window.addEventListener('resize', throttledHandler)

    return () => {
      window.removeEventListener('resize', throttledHandler)
      if (resizeObserver) {
        resizeObserver.disconnect()
      }
    }
  }, [handler, element])
}
