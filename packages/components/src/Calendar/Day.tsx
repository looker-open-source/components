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
import type { CompatibleHTMLProps } from '@looker/design-tokens'
import type { Locale } from 'date-fns'
import { getDate, isSameDay } from 'date-fns'
import React from 'react'
import styled from 'styled-components'
import pick from 'lodash/pick'
import {
  rippleHandlerKeys,
  rippleStyle,
  useRipple,
  useRippleHandlers,
} from '../Ripple'
import type { DateSelectionProps } from './types'
import { formatDateString } from './utils'

export const HitArea = styled.div`
  height: ${({ theme }) => theme.space.u8};
  left: 50%;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  width: ${({ theme }) => theme.space.u8};
`

type DayProps = Omit<
  CompatibleHTMLProps<HTMLButtonElement>,
  'onSelect' | 'type'
> &
  DateSelectionProps & {
    date: Date
    locale: Locale
    selected?: boolean
  }

export const Day = styled(
  ({
    className,
    date,
    locale,
    onDraftSelect,
    onSelect,
    selected,
    style,
    ...props
  }: DayProps) => {
    const dateString = formatDateString(date, 'EEE MMM dd, yyyy', locale)
    const today = isSameDay(date, new Date())
    const handleClick = () => {
      onSelect(date)
    }

    const handleHoverFocus = () => onDraftSelect(date)

    const { callbacks, ...rippleProps } = useRipple({
      className,
      color: 'neutral',
      style,
    })

    const rippleHandlers = useRippleHandlers(
      callbacks,
      {
        ...pick(props, rippleHandlerKeys),
        onFocus: handleHoverFocus,
        onMouseEnter: handleHoverFocus,
      },
      props.disabled
    )

    return (
      <button
        {...props}
        aria-current={today ? 'date' : 'false'}
        aria-label={dateString}
        aria-selected={selected}
        onClick={handleClick}
        title={dateString}
        type="button"
        {...rippleProps}
        {...rippleHandlers}
      >
        <HitArea />
        {getDate(date)}
      </button>
    )
  }
)`
  ${rippleStyle}
  background-color: transparent;
  border: none;
  border-radius: ${({ theme }) => theme.space.u5};
  box-sizing: border-box;
  color: ${({ theme }) => theme.colors.text3};
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: ${({ theme }) => theme.fontSizes.xsmall};
  height: ${({ theme }) => theme.space.u7};
  line-height: ${({ theme }) => theme.space.u4};
  margin: 0 ${({ theme }) => theme.space.u05};
  outline: none;
  position: relative;
  width: ${({ theme }) => theme.space.u7};
  &[aria-current='date'] {
    border: 1px solid ${({ theme }) => theme.colors.key};
    color: ${({ theme }) => theme.colors.key};
  }
  &[aria-selected='true'] {
    background: ${({ theme }) => theme.colors.key};
    border: 1px solid ${({ theme }) => theme.colors.key};
    color: ${({ theme }) => theme.colors.background};
  }
`
