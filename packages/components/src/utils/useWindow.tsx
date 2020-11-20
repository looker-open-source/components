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

import React, {
  Children,
  ReactChild,
  Reducer,
  useEffect,
  useMemo,
  useReducer,
} from 'react'
import {
  getWindowedListBoundaries,
  useCallbackRef,
  useMeasuredElement,
  useScrollPosition,
} from '.'

interface WindowHeightState {
  start: number
  end: number
  scrollTop: number
  scrollBottom: number
  beforeHeight: number
  afterHeight: number
}

interface WindowHeightPayloadObject {
  scrollPosition: number
  height: number
  childHeightLadder: number[]
  totalHeight: number
}

interface WindowHeightAction {
  type: 'CHANGE' | 'RESET'
  payload: number | WindowHeightPayloadObject
}

const initialState = (length: number) => ({
  afterHeight: 0,
  beforeHeight: 0,
  end: length - 1,
  scrollBottom: 0,
  scrollTop: 0,
  start: 0,
})
const bufferHeight = 1000

// For windowing lists with variable item height,
// a reducer that derives the updated window
// state from the previous state is more efficient
// than starting from scratch every time

// With scroll and resize events, we move up and down the "ladder"
// of saved item heights from the previous window location
// to discover the new window location and spacer heights
const reducer: Reducer<WindowHeightState, WindowHeightAction> = (
  state,
  action
) => {
  // RESET (if disabled after being enabled)
  if (typeof action.payload === 'number') {
    return initialState(action.payload)
  }

  let { beforeHeight, afterHeight, start, end } = state
  const {
    scrollPosition,
    height,
    totalHeight,
    childHeightLadder,
  } = action.payload

  const scrollTop = scrollPosition
  const scrollBottom = scrollPosition + height

  if (!childHeightLadder[start] || beforeHeight !== childHeightLadder[start]) {
    start = 0
  }
  if (
    !childHeightLadder[end] ||
    afterHeight !== totalHeight - childHeightLadder[end]
  ) {
    end = childHeightLadder.length - 1
  }

  const bufferedTop = Math.max(0, scrollTop - bufferHeight)
  const bufferedBottom = Math.min(scrollBottom + bufferHeight, totalHeight)
  while (childHeightLadder[start] < bufferedTop) {
    // move the top of the window down
    start += 1
  }
  if (start > 0) {
    while (childHeightLadder[start] > bufferedTop) {
      // move the top of the window up
      start -= 1
    }
  }
  if (end + 1 <= childHeightLadder.length) {
    while (childHeightLadder[end] < bufferedBottom) {
      // move the bottom of the window down
      end += 1
    }
  }
  while (childHeightLadder[end] > bufferedBottom) {
    // move the bottom of the window up
    end -= 1
  }

  return {
    afterHeight:
      end + 1 === childHeightLadder.length
        ? 0
        : totalHeight - childHeightLadder[end + 1],
    beforeHeight: childHeightLadder[start],
    end,
    scrollBottom,
    scrollTop,
    start,
  }
}

export type ChildHeightFunction = (child: ReactChild) => number

export interface UseWindowProps {
  enabled?: boolean
  children?: JSX.Element | JSX.Element[]
  /** Derive the height of each child using props, type, etc. */
  childHeight: number | ChildHeightFunction
  /** Tagname to use for the spacers above and below the window */
  spacerTag?: 'div' | 'li' | 'tr'
}

export const useWindow = ({
  children,
  enabled,
  childHeight,
  spacerTag = 'div',
}: UseWindowProps) => {
  const childArray = useMemo(() => Children.toArray(children), [children])

  const [totalHeight, childHeightLadder] = useMemo(() => {
    let sum = 0
    const ladder: number[] = []
    if (typeof childHeight === 'function') {
      childArray.forEach((child) => {
        ladder.push(sum)
        sum += childHeight(child as ReactChild)
      })
    }
    return [sum, ladder]
  }, [childHeight, childArray])

  const [containerElement, ref] = useCallbackRef()
  const { height } = useMeasuredElement(containerElement)
  const scrollPosition = useScrollPosition(containerElement)

  // For variable childHeight
  const [variable, dispatch] = useReducer(
    reducer,
    initialState(childArray.length)
  )
  useEffect(() => {
    // If using fixed childHeight, totalHeight will be 0
    if (totalHeight > 0) {
      if (enabled) {
        dispatch({
          payload: {
            childHeightLadder,
            height,
            scrollPosition,
            totalHeight,
          },
          type: 'CHANGE',
        })
      } else {
        dispatch({ payload: childHeightLadder.length, type: 'RESET' })
      }
    }
  }, [enabled, childHeightLadder, height, scrollPosition, totalHeight])

  // For fixed childHeight
  const fixed = useMemo(() => {
    if (typeof childHeight === 'number') {
      return getWindowedListBoundaries({
        enabled,
        height,
        itemHeight: childHeight,
        length: childArray.length,
        scrollPosition,
      })
    }
    return false
  }, [enabled, childArray, height, childHeight, scrollPosition])

  // Get values from fixed unless it's false, in which case use variable
  const { start, end, beforeHeight, afterHeight } = fixed || variable

  const Spacer = spacerTag
  // after & before are spacers to make scrolling smooth
  const before =
    beforeHeight > 0 ? <Spacer style={{ height: `${beforeHeight}px` }} /> : null
  const after =
    afterHeight > 0 ? <Spacer style={{ height: `${afterHeight}px` }} /> : null

  return {
    containerElement,
    contents: (
      <>
        {before}
        {childArray.slice(start, end + 1)}
        {after}
      </>
    ),
    ref,
  }
}
