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

import { useMemo } from 'react'

export interface GetWindowedListProps {
  /**
   * If false, the start and end values will be the entire list length
   * @default true
   */
  enabled?: boolean
  /**
   * The length of items in the list
   */
  length: number
  /**
   * The height of an individual item
   */
  itemHeight: number
  /**
   * The number of items to render above and below the visible area
   * @default 5
   */
  buffer?: number
  /**
   * The height of the scrollable container
   */
  containerHeight?: number
  /**
   * The scroll position of the list in the container
   */
  containerScrollPosition?: number
}

export function useWindowedListBoundaries({
  buffer = 5,
  containerHeight,
  containerScrollPosition,
  enabled = true,
  itemHeight,
  length,
}: GetWindowedListProps) {
  return useMemo(() => {
    if (!enabled) return { end: length - 1, start: 0 }

    if (containerScrollPosition === undefined || containerHeight === undefined)
      return { end: Math.min(length - 1, 50), start: 0 }

    const top = Math.floor(containerScrollPosition / itemHeight)
    const bottom = Math.ceil(
      (containerHeight + containerScrollPosition) / itemHeight
    )
    const start = top - buffer < 0 ? 0 : top - buffer
    const end = bottom + buffer > length - 1 ? length - 1 : bottom + buffer

    return {
      end,
      start,
    }
  }, [
    buffer,
    containerHeight,
    containerScrollPosition,
    enabled,
    itemHeight,
    length,
  ])
}
