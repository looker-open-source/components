/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import { useState, useCallback } from 'react'
import { useSafeLayoutEffect } from './useSafeLayoutEffect'
import { isOverflowing } from './isOverflowing'

/**
 * Detects if an element's content overflows its width using a ResizeObserver.
 * Avoid using repeatedly in long lists for performance concerns.
 */
export const useIsTruncated = (
  element: HTMLElement | null,
  identity?: number
): boolean => {
  const [isTruncated, setIsTruncated] = useState(false)

  // Re-run truncation detection when element is resized.
  // Could run on window resize or just dom element change
  // thanks to Resize Observer.
  const handleResize = useCallback(() => {
    element && setIsTruncated(isOverflowing(element))
  }, [element])

  useSafeLayoutEffect(() => {
    if (!element) {
      return
    }

    const resizeObserver = new ResizeObserver(() => handleResize())
    if (element) {
      resizeObserver.observe(element as unknown as HTMLElement)
    }

    return () => {
      if (!resizeObserver) {
        return
      }

      resizeObserver.disconnect()
    }
  }, [handleResize, element, identity])

  return isTruncated
}
