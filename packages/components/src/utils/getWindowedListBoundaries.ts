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

export interface GetWindowedListBoundaryProps {
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
  height?: number
  /**
   * The scroll position of the list in the container
   */
  scrollPosition?: number
}

const initialResult = { afterHeight: 0, beforeHeight: 0, end: 0, start: 0 }

export function getWindowedListBoundaries({
  buffer = 5,
  height,
  scrollPosition,
  enabled = true,
  itemHeight,
  length,
}: GetWindowedListBoundaryProps) {
  if (!enabled) return { ...initialResult, end: length - 1 }

  if (scrollPosition === undefined || height === undefined)
    // scroll position and height probably undefined on initial render
    // best to render no list items before we have these values
    return initialResult

  const top = Math.floor(scrollPosition / itemHeight)
  const bottom = Math.ceil((height + scrollPosition) / itemHeight)

  const start = top - buffer < 0 ? 0 : top - buffer
  const end = bottom + buffer > length - 1 ? length - 1 : bottom + buffer
  const afterLength = length - 1 - end

  return {
    afterHeight: afterLength * itemHeight,
    beforeHeight: start * itemHeight,
    end,
    start,
  }
}
