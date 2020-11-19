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

import throttle from 'lodash/throttle'
import React, {
  Children,
  ReactChild,
  Reducer,
  useEffect,
  useMemo,
  useReducer,
  useRef,
  useState,
} from 'react'
import { useCallbackRef, useMeasuredElement } from '.'

export interface UseWindowVariableProps {
  enabled?: boolean
  children?: JSX.Element | JSX.Element[]
  /** If possible, use a number for better performance.
   * In lists where the item height will vary
   * use a function to derive the height of each child using props, type, etc. */
  getChildHeight: (child: ReactChild) => number
  spacerTag?: 'div' | 'li' | 'tr'
}

interface WindowHeightState {
  start: number
  end: number
  scrollTop: number
  scrollBottom: number
  beforeHeight: number
  afterHeight: number
}

interface WindowHeightPayload {
  scrollPosition: number
  height: number
  childHeightLadder: number[]
  totalHeight: number
}

interface WindowHeightAction {
  type: 'CHANGE'
  payload: WindowHeightPayload
}

const bufferHeight = 1000

const reducer: Reducer<WindowHeightState, WindowHeightAction> = (
  state,
  action
) => {
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

  while (childHeightLadder[start + 1] < scrollTop - bufferHeight) {
    start += 1
  }
  if (start > 0) {
    while (childHeightLadder[start - 1] > scrollTop - bufferHeight) {
      start -= 1
    }
  }
  if (end + 1 <= childHeightLadder.length) {
    while (childHeightLadder[end + 1] < scrollBottom + bufferHeight) {
      end += 1
    }
  }
  while (childHeightLadder[end - 1] > scrollBottom + bufferHeight) {
    end -= 1
  }

  return {
    afterHeight:
      end + 1 === childHeightLadder.length
        ? 0
        : totalHeight - childHeightLadder[end],
    beforeHeight: childHeightLadder[start],
    end,
    scrollBottom,
    scrollTop,
    start,
  }
}

export const useWindowVariable = ({
  children,
  enabled,
  getChildHeight,
  spacerTag = 'div',
}: UseWindowVariableProps) => {
  const childArray = useMemo(() => Children.toArray(children), [children])
  const childrenLength = childArray.length

  const [totalHeight, childHeightLadder] = useMemo(() => {
    let sum = 0
    const ladder: number[] = []
    childArray.forEach((child) => {
      ladder.push(sum)
      sum += getChildHeight(child as ReactChild)
    })
    return [sum, ladder]
  }, [getChildHeight, childArray])

  const [{ start, end, beforeHeight, afterHeight }, dispatch] = useReducer(
    reducer,
    {
      afterHeight: 0,
      beforeHeight: 0,
      end: childrenLength - 1,
      scrollBottom: 0,
      scrollTop: 0,
      start: 0,
    }
  )

  const [scrollPosition, setScrollPosition] = useState(0)
  const [containerElement, ref] = useCallbackRef()
  const { height } = useMeasuredElement(containerElement)

  const throttled = useRef(
    throttle(
      (payload: WindowHeightPayload) => {
        dispatch({ payload, type: 'CHANGE' })
      },
      200,
      { leading: true }
    )
  )

  useEffect(() => {
    if (enabled) {
      throttled.current({
        childHeightLadder,
        height,
        scrollPosition,
        totalHeight,
      })
    }
  }, [enabled, childHeightLadder, height, scrollPosition, totalHeight])

  useEffect(() => {
    const scrollListener = throttle(() => {
      if (containerElement) {
        setScrollPosition(containerElement.scrollTop)
      }
    }, 50)

    if (containerElement) {
      containerElement.addEventListener('scroll', scrollListener)
      scrollListener()
    }

    return () => {
      containerElement &&
        containerElement.removeEventListener('scroll', scrollListener)
      setScrollPosition(0)
    }
  }, [containerElement])

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
