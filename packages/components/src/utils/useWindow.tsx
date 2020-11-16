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

import meanBy from 'lodash/meanBy'
import throttle from 'lodash/throttle'
import React, {
  Children,
  ReactChild,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react'
import {
  getWindowedListBoundaries,
  useCallbackRef,
  useMeasuredElement,
} from '.'

export type ChildHeightFunction = (child: ReactChild) => number
export type ChildHeight = ChildHeightFunction | number

export interface UseWindowProps {
  children?: JSX.Element | JSX.Element[]
  /** If possible, use a number for better performance.
   * In lists where the item height will vary
   * use a function to derive the height of each child using props, type, etc. */
  childHeight: ChildHeight
  spacerTag?: 'div' | 'li' | 'tr'
}

export const useWindow = ({
  children,
  childHeight,
  spacerTag = 'div',
}: UseWindowProps) => {
  const childArray = Children.toArray(children)
  const childrenLength = childArray.length
  const shouldWindow = childrenLength > 100
  const [midWindow, setMidWindow] = useState(childrenLength / 2)

  const avgItemHeights = useMemo(() => {
    if (
      !shouldWindow ||
      typeof childHeight === 'number' ||
      childrenLength === 0
    ) {
      return { above: 0, below: 0 }
    }
    return {
      above: meanBy(childArray.slice(0, midWindow), (child) =>
        childHeight(child as ReactChild)
      ),
      below: meanBy(childArray.slice(midWindow), (child) =>
        childHeight(child as ReactChild)
      ),
    }
  }, [midWindow, shouldWindow, childHeight, childrenLength, childArray])

  const itemHeight = useMemo(() => {
    if (typeof childHeight === 'number') return childHeight
    return avgItemHeights
  }, [childHeight, avgItemHeights])

  const [scrollPosition, setScrollPosition] = useState(0)
  const [containerElement, ref] = useCallbackRef()
  const { height } = useMeasuredElement(containerElement)

  useEffect(() => {
    const scrollListener = throttle(() => {
      if (containerElement) {
        setScrollPosition(containerElement.scrollTop)
      }
    }, 50)

    if (shouldWindow && containerElement) {
      containerElement.addEventListener('scroll', scrollListener)
      scrollListener()
    }

    return () => {
      containerElement &&
        containerElement.removeEventListener('scroll', scrollListener)
      setScrollPosition(0)
    }
  }, [shouldWindow, containerElement])

  const { start, end, beforeHeight, afterHeight } = useMemo(
    () =>
      getWindowedListBoundaries({
        enabled: shouldWindow,
        height,
        itemHeight,
        length: childrenLength,
        scrollPosition,
      }),
    [childrenLength, height, itemHeight, scrollPosition, shouldWindow]
  )

  const midPoint = Math.floor(start + (end - start) / 2)
  const throttled = useRef(
    throttle((newValue) => {
      console.log(newValue)
      setMidWindow(newValue)
    }, 1000)
  )
  useEffect(() => throttled.current(midPoint), [midPoint])

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
