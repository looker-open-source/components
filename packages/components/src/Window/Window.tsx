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
import styled from 'styled-components'
import {
  getWindowedListBoundaries,
  useCallbackRef,
  useMeasuredElement,
} from '../utils'

export interface UseWindowProps {
  length: number
  itemHeight: number
  spacerTag?: 'div' | 'li' | 'tr'
}

export const useWindow = ({
  length,
  itemHeight,
  spacerTag = 'div',
}: UseWindowProps) => {
  const [scrollPosition, setScrollPosition] = useState(0)
  const [element, ref] = useCallbackRef()
  const { height } = useMeasuredElement(element)

  useEffect(() => {
    // track scroll position and menu dom rectangle, and bubble up to context.
    // used in InputTimeSelect for managing very long lists

    const scrollListener = throttle(() => {
      if (element) {
        setScrollPosition(element.scrollTop)
      }
    }, 50)

    if (element) {
      element.addEventListener('scroll', scrollListener)
      scrollListener()
    }

    return () => {
      element && element.removeEventListener('scroll', scrollListener)

      setScrollPosition(0)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [element])

  const { start, end } = useMemo(
    () =>
      getWindowedListBoundaries({
        containerHeight: height,
        containerScrollPosition: scrollPosition,
        itemHeight,
        length,
      }),
    [length, height, itemHeight, scrollPosition]
  )

  const Spacer = spacerTag
  const afterLength = length ? length - 1 - end : 0

  return {
    // after & before are spacers to make scrolling smooth
    after:
      afterLength > 0 ? (
        <Spacer style={{ height: `${afterLength * itemHeight}px` }} />
      ) : null,
    before:
      start > 0 ? (
        <Spacer style={{ height: `${start * itemHeight}px` }} />
      ) : null,
    end,
    ref,
    start,
  }
}

export interface WindowProps extends Omit<UseWindowProps, 'length'> {
  wrapperTag?: 'div' | 'ul' | 'tbody'
  children: JSX.Element | JSX.Element[]
  className: string
}

const WindowLayout = ({
  wrapperTag = 'div',
  children,
  className,
  ...props
}: WindowProps) => {
  const childArray = Children.toArray(children)
  const { after, before, end, ref, start } = useWindow({
    ...props,
    length: childArray.length,
  })
  const itemsToRender = childArray.slice(start, end + 1)

  const Wrapper = wrapperTag

  return (
    <Wrapper ref={ref} className={className}>
      {before}
      {itemsToRender}
      {after}
    </Wrapper>
  )
}

export const Window = styled(WindowLayout)`
  height: 200px;
  overflow: auto;
`
