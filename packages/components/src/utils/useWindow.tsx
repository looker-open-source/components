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
import React, { Children, useEffect, useMemo, useState } from 'react'
import {
  getWindowedListBoundaries,
  useCallbackRef,
  useMeasuredElement,
} from '.'

export interface UseWindowProps {
  children?: JSX.Element | JSX.Element[]
  element?: HTMLElement
  itemHeight: number
  spacerTag?: 'div' | 'li' | 'tr'
}

export const useWindow = ({
  children,
  element: propsElement,
  itemHeight,
  spacerTag = 'div',
}: UseWindowProps) => {
  const childArray = Children.toArray(children)
  const childrenLength = childArray.length
  const shouldWindow = childrenLength > 100

  const [scrollPosition, setScrollPosition] = useState(0)
  const [internalElement, ref] = useCallbackRef()
  const element = propsElement || internalElement
  const { height } = useMeasuredElement(element)

  useEffect(() => {
    const scrollListener = throttle(() => {
      if (element) {
        setScrollPosition(element.scrollTop)
      }
    }, 50)

    if (shouldWindow && element) {
      element.addEventListener('scroll', scrollListener)
      scrollListener()
    }

    return () => {
      element && element.removeEventListener('scroll', scrollListener)
      setScrollPosition(0)
    }
  }, [shouldWindow, element])

  const { start, end } = useMemo(
    () =>
      getWindowedListBoundaries({
        containerHeight: height,
        containerScrollPosition: scrollPosition,
        enabled: shouldWindow,
        itemHeight,
        length: childrenLength,
      }),
    [childrenLength, height, itemHeight, scrollPosition, shouldWindow]
  )

  const Spacer = spacerTag
  // after & before are spacers to make scrolling smooth
  const afterLength = childrenLength ? childrenLength - 1 - end : 0
  const after =
    afterLength > 0 ? (
      <Spacer style={{ height: `${afterLength * itemHeight}px` }} />
    ) : null
  const before =
    start > 0 ? <Spacer style={{ height: `${start * itemHeight}px` }} /> : null

  return {
    contents: (
      <>
        {before}
        {childArray.slice(start, end + 1)} {after}
      </>
    ),
    element,
    ref,
  }
}
