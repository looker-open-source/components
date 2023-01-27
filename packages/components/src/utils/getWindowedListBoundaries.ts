/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

export interface GetWindowedListBoundaryProps {
  /**
   * If false, the start and end values will be the entire list length
   * @default true
   */
  enabled?: boolean
  /**
   * The total number of items in the list
   */
  itemCount: number
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
  itemCount,
  itemHeight,
}: GetWindowedListBoundaryProps) {
  if (!enabled) return { ...initialResult, end: itemCount - 1 }

  if (scrollPosition === undefined || height === undefined)
    // scroll position and height probably undefined on initial render
    // best to render no list items before we have these values
    return initialResult

  const top = Math.floor(scrollPosition / itemHeight)
  const bottom = Math.ceil((height + scrollPosition) / itemHeight)

  const start = top - buffer < 0 ? 0 : top - buffer
  const end = bottom + buffer > itemCount - 1 ? itemCount - 1 : bottom + buffer
  const afterLength = itemCount - 1 - end

  return {
    afterHeight: afterLength * itemHeight,
    beforeHeight: start * itemHeight,
    end,
    start,
  }
}
