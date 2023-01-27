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

import React, { useCallback } from 'react'
import styled from 'styled-components'
import type { CompatibleHTMLProps } from '@looker/design-tokens'
import pick from 'lodash/pick'
import {
  rippleHandlerKeys,
  rippleStyle,
  useBoundedRipple,
  useRippleHandlers,
} from '../Ripple'
import type { YearBaseProps } from './types'
import { isThisMonth } from './utils/dateConfirmations'

type MonthPickerProps = YearBaseProps &
  Omit<CompatibleHTMLProps<HTMLButtonElement>, 'onSelect' | 'type'> & {
    date: Date
    monthNumber: number
    isTodaysMonth?: boolean
  }

export const MonthPicker = styled(
  ({
    className,
    date = new Date(),
    isTodaysMonth,
    locale,
    monthNumber,
    onMonthClick,
    selected,
    selectedMonth,
    style,
    ...restProps
  }: MonthPickerProps) => {
    const { callbacks, ...rippleProps } = useBoundedRipple({
      className,
      color: 'neutral',
      style,
    })

    const rippleHandlers = useRippleHandlers(
      callbacks,
      pick(restProps, rippleHandlerKeys),
      restProps.disabled
    )
    const isMonth =
      selectedMonth && isThisMonth(selectedMonth, monthNumber, date)

    isTodaysMonth = isTodaysMonth && isThisMonth(new Date(), monthNumber, date)

    return (
      <button
        aria-current={isTodaysMonth}
        aria-selected={isMonth}
        type="button"
        onClick={useCallback(
          () => onMonthClick(monthNumber),
          [monthNumber, onMonthClick]
        )}
        {...restProps}
        {...rippleProps}
        {...rippleHandlers}
      >
        {locale.localize?.month(monthNumber, { width: 'abbreviated' })}
      </button>
    )
  }
)`
  ${rippleStyle}
  background: transparent;
  border: 1px solid ${({ theme }) => theme.colors.ui2};
  border-radius: ${({ theme }) => theme.space.u5};
  color: ${({ theme }) => theme.colors.text3};
  font-size: ${({ theme }) => theme.fontSizes.xsmall};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  height: ${({ theme }) => theme.space.u7};
  width: ${({ theme }) => theme.space.u12};
  &[aria-current='true'] {
    border: 1px solid ${({ theme }) => theme.colors.key};
    color: ${({ theme }) => theme.colors.key};
  }
  &[aria-selected='true'] {
    background: ${({ theme }) => theme.colors.key};
    color: ${({ theme }) => theme.colors.keyText};
  }
`
