/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import { useCallback, useState } from 'react'
import { useResize } from './useResize'

export const measureElement = (element?: HTMLElement | null) => {
  if (!element) {
    return typeof DOMRect === 'function'
      ? new DOMRect()
      : {
          bottom: 0,
          height: 0,
          left: 0,
          rect: {},
          right: 0,
          toJSON: () => null,
          top: 0,
          width: 0,
          x: 0,
          y: 0,
        }
  }

  return element.getBoundingClientRect()
}

export const useMeasuredElement = (
  element: HTMLElement | null
): [DOMRect, () => void] => {
  const [rect, setRect] = useState(measureElement())

  const refreshDomRect = useCallback(() => {
    // Update client rect
    element && setRect(measureElement(element))
  }, [element])

  useResize(element, refreshDomRect)

  return [rect, refreshDomRect]
}
