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

import { getYear } from 'date-fns'
import React, { useCallback, useContext } from 'react'
import { ThemeContext } from 'styled-components'
import { Grid, SpaceVertical } from '../Layout'
import { Span } from '../Text'
import { MonthPicker } from './MonthPicker'
import type { ScrollableDateListItemProps, YearBaseProps } from './types'

export type YearProps = YearBaseProps & ScrollableDateListItemProps

export const Year = ({
  fullRender,
  index,
  setItemPosition,
  date,
  locale,
  ...props
}: YearProps) => {
  // Calls setItemPosition to store the current child's position
  // in the parent list
  const ref = useCallback(
    (element: HTMLElement | null) => {
      if (element) {
        setItemPosition(index, element)
      }
    },
    [setItemPosition, index]
  )

  const { space } = useContext(ThemeContext)
  const height = `calc(${space.u7} * 3 + ${space.u3} * 2)`

  return (
    <SpaceVertical py="u3" px="u4" gap="u5" ref={ref}>
      <Span fontSize="small" color="text5" fontWeight="bold">
        {getYear(date)}
      </Span>
      <Grid columns={4} gap="u3" height={height}>
        {fullRender &&
          [...Array(12)].map((_, i) => {
            return (
              <MonthPicker
                key={i}
                monthNumber={i}
                date={date}
                locale={locale}
                {...props}
              />
            )
          })}
      </Grid>
    </SpaceVertical>
  )
}
