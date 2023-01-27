/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import { useEffect, useState } from 'react'
import type { WidthProps, MinWidthProps } from '@looker/design-tokens'

export interface UseListWidthProps extends MinWidthProps, WidthProps {
  isVisible?: boolean
  wrapperElement?: HTMLElement | null
}

export function useListWidths({
  isVisible,
  minWidth: propsMinWidth,
  width: propsWidth,
  wrapperElement,
}: UseListWidthProps) {
  const [width, setWidth] = useState<WidthProps['width']>('auto')
  const [minWidth, setMinWidth] = useState<MinWidthProps['minWidth']>()

  useEffect(() => {
    // Avoid calling expensive getBoundingClientWidth if width/minWidth are defined in props
    // or if the list is currently not visible
    function getWrapperWidth() {
      return wrapperElement && wrapperElement.getBoundingClientRect().width
    }
    if (isVisible) {
      const newWidth = propsWidth || getWrapperWidth() || 'auto'
      const newMinWidth =
        propsMinWidth || (propsWidth === 'auto' ? getWrapperWidth() : undefined)

      setWidth(newWidth)
      setMinWidth(newMinWidth)
    }
  }, [propsMinWidth, propsWidth, wrapperElement, isVisible])

  return { minWidth, width }
}
