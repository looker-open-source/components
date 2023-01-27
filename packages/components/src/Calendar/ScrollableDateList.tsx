/*

 MIT License

 Copyright (c) 2022 Looker Data Sciences, Inc.

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

import { isSameMonth } from 'date-fns'
import debounce from 'lodash/debounce'
import React, { useCallback, useEffect, useMemo, useRef } from 'react'
import styled from 'styled-components'
import { useCallbackRef, useMeasuredElement, useScrollPosition } from '../utils'
import type {
  ScrollableDateListBaseProps,
  YearListItemProps,
  MonthListItemProps,
} from './types'

type ItemPosition = { date: Date; top?: number; bottom?: number }

export type ScrollableScrollableDateListBaseProps =
  ScrollableDateListBaseProps & {
    className?: string
    buffer: number
    getItemDate: (baseMonth: Date, offset: number) => Date
    // Guy Ellis 2022-09-23 - I've taken a few stabs at removing the no-explicit-any for itemComponent and
    // each time the refactor turns out to be very large and messy and makes the code far more complex.
    // I think that this is still a candidate for a refactor and a fix and that this should happen if and
    // when this component is refactored for a different reason. b/201417582
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    itemComponent: (itemProps: any) => JSX.Element
    itemProps: YearListItemProps | MonthListItemProps
    thresholdRatio: number
  }

export const ScrollableDateList = styled(
  ({
    className,
    currentDate,
    baseMonth,
    setBaseMonth,
    buffer,
    getItemDate,
    onMonthChange,
    itemComponent: Component,
    itemProps,
    thresholdRatio,
  }: ScrollableScrollableDateListBaseProps) => {
    const [containerElement, ref] = useCallbackRef()
    const [{ height }] = useMeasuredElement(containerElement)
    const scrollPosition = useScrollPosition(containerElement)
    // Store the top & bottom position for each child
    // in order to update the date as the user scrolls
    const itemPositions = useRef<ItemPosition[]>([])

    const dates = useMemo(() => {
      // Total size is full buffer before and after, plus current item
      const total = Array(buffer * 2 + 1)
      const dateArray = Array.from(total, (_, i) =>
        getItemDate(baseMonth, i - buffer)
      )
      itemPositions.current = dateArray.map(d => ({ date: d }))
      return dateArray
    }, [baseMonth, buffer, getItemDate])

    // Passed to each child so that it can add its own positions
    // to the collection
    const containerHasHeight = height !== 0
    const setItemPosition = useCallback(
      (index: number, element: HTMLElement) => {
        if (containerHasHeight) {
          itemPositions.current[index] = {
            ...itemPositions.current[index],
            bottom: element.offsetTop + element.offsetHeight,
            top: element.offsetTop,
          }
        }
      },
      [containerHasHeight]
    )

    // For tracking the behavior that automatically moves
    // the scroll position to the base element (the middle of the list)
    const hasAutoScrolledToBaseItem = useRef(false)
    useEffect(() => {
      hasAutoScrolledToBaseItem.current = false
    }, [baseMonth, buffer])

    useEffect(() => {
      // Timeout variable for debouncing the month change on scroll
      let t = 0
      if (containerElement && height) {
        if (!hasAutoScrolledToBaseItem.current) {
          // Auto scroll to the current month (middle of the list)
          // only on first render and after the baseMonth updates
          const currentMonth = itemPositions.current.find(
            (itemPos: ItemPosition) => isSameMonth(itemPos.date, baseMonth)
          )
          if (currentMonth?.top && currentMonth?.bottom) {
            const closeToBottom =
              scrollPosition > containerElement.scrollHeight - height * 2
            const scrollTarget = closeToBottom
              ? currentMonth.bottom - height
              : currentMonth.top
            containerElement.scrollTo(0, scrollTarget)
            hasAutoScrolledToBaseItem.current = true
          }
        } else {
          // If user has scrolled to the top or bottom,
          // we update the baseMonth which resets the list
          // to allow them to continue scrolling in the same direction
          const atTop = scrollPosition === 0
          const atBottom =
            scrollPosition === containerElement.scrollHeight - height
          if (atTop || atBottom) {
            const goToMonth = atTop ? dates[0] : dates[dates.length - 1]
            onMonthChange(goToMonth)
            setBaseMonth(goToMonth)
          } else {
            // Update the Calendar "viewMonth" with a debounce delay
            // no need to update mid-scroll
            const updateCurrentMonth = debounce(() => {
              const threshold = scrollPosition + height * thresholdRatio
              const inView = itemPositions.current.find(
                (itemPos: ItemPosition) =>
                  itemPos.top &&
                  itemPos.bottom &&
                  threshold > itemPos.top &&
                  threshold < itemPos.bottom
              )
              if (inView && !isSameMonth(currentDate, inView.date)) {
                // Just update the view month, but not the baseMonth
                // since the latter would reset the list and we only need
                // to do that when the user has scrolled to the top or bottom
                onMonthChange(inView.date)
              }
            })
            t = window.setTimeout(updateCurrentMonth, 50)
          }
        }
      }
      return () => {
        window.clearTimeout(t)
      }
    }, [
      containerElement,
      currentDate,
      height,
      scrollPosition,
      dates,
      onMonthChange,
      setBaseMonth,
      thresholdRatio,
      baseMonth,
    ])

    // Need to find the index of the in-view item in order to
    // fully render it and the items before & after
    const inViewIndex = dates.findIndex(d => isSameMonth(d, currentDate))

    return (
      <div className={className} ref={ref}>
        {dates.map((item, i) => {
          const fullRender = Math.abs(i - inViewIndex) <= 1
          return (
            <Component
              key={item.toString()}
              index={i}
              fullRender={fullRender}
              date={item}
              {...itemProps}
              setItemPosition={setItemPosition}
            />
          )
        })}
      </div>
    )
  }
)`
  height: 220px;
  overflow-y: scroll;
  position: relative;
`
