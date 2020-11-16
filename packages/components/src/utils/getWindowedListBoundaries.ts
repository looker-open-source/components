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

export type ItemHeight =
  | number
  | {
      above: number
      below: number
    }

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
  itemHeight: ItemHeight
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

const getBoundary = (
  fromPosition: number,
  toPosition: number,
  heightArr: number[],
  currentIndex: number
): [number, number] => {
  if (fromPosition < toPosition) {
    return getBoundary(
      fromPosition + heightArr[currentIndex],
      toPosition,
      heightArr,
      currentIndex + 1
    )
  }
  return [fromPosition, currentIndex]
}

const getItemAboveBelowHeights = (itemHeight: ItemHeight) => {
  return {
    itemHeightAbove:
      typeof itemHeight === 'number' ? itemHeight : itemHeight.above,
    itemHeightBelow:
      typeof itemHeight === 'number' ? itemHeight : itemHeight.below,
  }
}

const getBoundaries = (
  scrollPosition: number,
  height: number,
  itemHeight: ItemHeight
) => {
  const { itemHeightAbove } = getItemAboveBelowHeights(itemHeight)
  const top = Math.floor(scrollPosition / itemHeightAbove)
  const bottom = Math.ceil((height + scrollPosition) / itemHeightAbove)
  return { bottom, top }
}

const getBeforeAfter = (
  start: number,
  end: number,
  length: number,
  itemHeight: ItemHeight
) => {
  const { itemHeightBelow, itemHeightAbove } = getItemAboveBelowHeights(
    itemHeight
  )
  const afterLength = length ? length - 1 - end : 0
  return {
    afterHeight: afterLength * itemHeightBelow,
    beforeHeight: start * itemHeightAbove,
  }
}

export function getWindowedListBoundaries({
  buffer = 5,
  height,
  scrollPosition,
  enabled = true,
  itemHeight,
  length,
}: GetWindowedListBoundaryProps) {
  if (!enabled)
    return { afterHeight: 0, beforeHeight: 0, end: length - 1, start: 0 }

  if (scrollPosition === undefined || height === undefined)
    // scroll position and height probably undefined on initial render
    // best to render no list items before we have these values
    return { afterHeight: 0, beforeHeight: 0, end: 0, start: 0 }

  const { top, bottom } = getBoundaries(scrollPosition, height, itemHeight)

  const end = bottom + buffer > length - 1 ? length - 1 : bottom + buffer
  const start = top - buffer < 0 ? 0 : top - buffer

  const { afterHeight, beforeHeight } = getBeforeAfter(
    start,
    end,
    length,
    itemHeight
  )

  return {
    afterHeight,
    beforeHeight,
    end,
    start,
  }
}
