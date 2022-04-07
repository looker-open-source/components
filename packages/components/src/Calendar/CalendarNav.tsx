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
import { useTranslation } from 'react-i18next'
import React from 'react'
import { ChevronLeft } from '@styled-icons/material-rounded/ChevronLeft/ChevronLeft'
import { ChevronRight } from '@styled-icons/material-rounded/ChevronRight/ChevronRight'
import { ArrowDropDown } from '@styled-icons/material/ArrowDropDown/ArrowDropDown'
import { getMonth, setMonth } from 'date-fns'
import { ButtonTransparent, IconButton } from '../Button'
import { Space } from '../Layout'
import type { CalendarLocaleProps, NavCB } from './types'
import { formatDateString } from './utils'

export type CalendarNavProps = Pick<CalendarLocaleProps, 'locale'> & {
  monthYear: Date
  onMonthChange: NavCB
  onOpenMonthPicker: () => void
}

export const CalendarNav = ({
  locale,
  monthYear,
  onMonthChange,
  onOpenMonthPicker,
}: CalendarNavProps) => {
  const { t } = useTranslation('CalendarNav')

  const handleNextMonth = () => {
    onMonthChange && onMonthChange(setMonth(monthYear, getMonth(monthYear) + 1))
  }

  const handlePreviousMonth = () => {
    onMonthChange && onMonthChange(setMonth(monthYear, getMonth(monthYear) - 1))
  }

  return (
    <Space py="u3" px="u4">
      <ButtonTransparent
        color="neutral"
        iconAfter={<ArrowDropDown />}
        onClick={onOpenMonthPicker}
        size="xsmall"
      >
        {formatDateString(monthYear, 'MMM yyyy', locale)}
      </ButtonTransparent>
      <Space justify="end" gap="xsmall">
        <IconButton
          icon={<ChevronLeft />}
          label={t('previous month')}
          onClick={handlePreviousMonth}
        />

        <IconButton
          icon={<ChevronRight />}
          label={t('next month')}
          onClick={handleNextMonth}
        />
      </Space>
    </Space>
  )
}
