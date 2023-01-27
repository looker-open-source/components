/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import { getYear } from 'date-fns'
import React, { useCallback } from 'react'
import { useTheme } from 'styled-components'
import { Grid, SpaceVertical } from '../Layout'
import { Span } from '../Text'
import { MonthPicker } from './MonthPicker'
import type { ScrollableDateListItemProps, YearBaseProps } from './types'
import { confirmToday } from './utils/dateConfirmations'

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

  const { space } = useTheme()
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
                isTodaysMonth={confirmToday(i)}
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
