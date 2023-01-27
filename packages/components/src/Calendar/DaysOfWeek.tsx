/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import React from 'react'
import styled from 'styled-components'
import { Grid } from '../Layout'
import type { CalendarLocaleProps } from './types'

export type DaysOfWeekProps = CalendarLocaleProps & {
  className?: string
}

export const DaysOfWeek = styled(
  ({ className, firstDayOfWeek, locale }: DaysOfWeekProps) => {
    const allDays: string[] = Array.from(Array(7), (_, i) =>
      locale.localize?.day(i, { width: 'narrow' })
    )
    const daysOfWeek = [
      ...allDays.slice(firstDayOfWeek),
      ...allDays.slice(0, firstDayOfWeek),
    ]

    return (
      <div className={className}>
        <Grid columns={7} gap="none">
          {daysOfWeek.map((day, i) => (
            <div key={i}>{day}</div>
          ))}
        </Grid>
      </div>
    )
  }
)`
  background: ${({ theme }) => theme.colors.ui1};
  ${Grid} {
    padding-left: ${({ theme }) => theme.space.u5};
    width: fit-content;
    div {
      color: ${({ theme }) => theme.colors.text2};
      font-family: ${({ theme }) => theme.fonts.body};
      font-size: ${({ theme }) => theme.fontSizes.xsmall};
      line-height: ${({ theme }) => theme.space.u8};
      text-align: center;
      width: ${({ theme }) => theme.space.u8};
    }
  }
`
