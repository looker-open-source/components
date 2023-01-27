/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import React from 'react'
import styled from 'styled-components'
import { Span } from '../Text'
import type { CalendarLocaleProps, RangeProps } from './types'
import { formatDateString, rangeTypeStyle } from './utils'

export type MonthTitleProps = Pick<CalendarLocaleProps, 'locale'> &
  RangeProps & {
    className?: string
    month: Date
    inline: boolean
  }

export const MonthTitle = styled(
  ({ className, locale, month }: MonthTitleProps) => {
    return (
      <Span
        className={className}
        fontSize="xsmall"
        color="text2"
        fontWeight="bold"
        px="u8"
        py="u2"
      >
        {formatDateString(month, 'MMM yyyy', locale)}
      </Span>
    )
  }
)`
  ${rangeTypeStyle}
  display: block;
  /* Title is inline with first week if month starts > 3 days after firstDayOfWeek */
  /* stylelint-disable */
  margin: ${({ inline, theme: { space } }) =>
    inline ? `0 0 -${space.u8} 0` : `${space.u05} 0`};
  /* stylelint-enable */
  position: relative;
  width: fit-content;
  z-index: ${({ theme }) => theme.zIndexFloor};
`
