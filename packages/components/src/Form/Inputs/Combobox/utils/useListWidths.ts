/*

 MIT License

 Copyright (c) 2020 Looker Data Sciences, Inc.

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in all
 copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 SOFTWARE.

 */

import { useEffect, useState } from 'react'
import { WidthProps, MinWidthProps } from 'styled-system'

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
