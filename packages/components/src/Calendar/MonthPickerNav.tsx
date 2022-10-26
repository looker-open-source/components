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

import { addYears, getYear, setMonth, setYear } from 'date-fns'
import React, { useCallback, useEffect, useState } from 'react'
import { ChevronLeft } from '@styled-icons/material-rounded/ChevronLeft/ChevronLeft'
import { ChevronRight } from '@styled-icons/material-rounded/ChevronRight/ChevronRight'
import { Close } from '@styled-icons/material/Close'
import { Divider } from '../Divider'
import { IconButton } from '../Button'
import { InlineInputText } from '../Form'
import { Space } from '../Layout'
import { useTranslation } from '../utils'
import { formatDateString } from './utils'
import type { CalendarNavProps } from './CalendarNav'
import { YearList } from './YearList'

export type MonthPickerNavProps = Pick<
  CalendarNavProps,
  'locale' | 'onMonthChange'
> & {
  date: Date
  onClose: () => void
}

export const MonthPickerNav = ({
  date,
  locale,
  onClose,
  onMonthChange,
}: MonthPickerNavProps) => {
  const { t } = useTranslation('MonthPickerNav')
  const [trackYear, setTrackYear] = useState(date)
  const [inputText, setInputText] = useState(
    formatDateString(trackYear, 'yyyy', locale)
  )
  // The base for the scrolling list of years
  // to be updated when user scrolls all the way to the top or bottom
  const [baseMonth, setBaseMonth] = useState(date)

  const handleInputChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) =>
      setInputText(event.target.value),
    [setInputText]
  )

  useEffect(() => {
    setInputText(getYear(trackYear).toString())
  }, [trackYear])

  const handleInputBlur = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      if (event.target.value.length === 4) {
        const newYear = setYear(trackYear, Number(event.target.value))
        setTrackYear(newYear)
        setBaseMonth(newYear)
      }
    },
    [trackYear]
  )

  const handleNextYear = useCallback(() => {
    const newYear = addYears(trackYear, 1)
    setTrackYear(newYear)
    setBaseMonth(newYear)
  }, [setTrackYear, trackYear])

  const handlePreviousYear = useCallback(() => {
    const newYear = addYears(trackYear, -1)
    setTrackYear(newYear)
    setBaseMonth(newYear)
  }, [setTrackYear, trackYear])

  const handleMonthClick = useCallback(
    (month: number) => {
      onMonthChange(setMonth(trackYear, month))
      onClose()
    },
    [trackYear, onMonthChange, onClose]
  )

  return (
    <>
      <Space between py="u3" pl="u05" pr="u5">
        <Space justify="start" gap="u2">
          <IconButton
            icon={<ChevronLeft />}
            label={t('previous year')}
            onClick={handlePreviousYear}
            size="xsmall"
          />
          <InlineInputText
            onBlur={handleInputBlur}
            onChange={handleInputChange}
            value={inputText}
          />
          <IconButton
            icon={<ChevronRight />}
            label={t('next year')}
            onClick={handleNextYear}
            size="xsmall"
          />
        </Space>
        <Space justify="end">
          <IconButton
            icon={<Close />}
            label={t('close')}
            onClick={onClose}
            size="xsmall"
          />
        </Space>
      </Space>
      <Divider appearance="light" />
      <YearList
        baseMonth={baseMonth}
        currentDate={trackYear}
        locale={locale}
        onMonthChange={setTrackYear}
        onMonthClick={handleMonthClick}
        selectedMonth={date}
        setBaseMonth={setBaseMonth}
      />
    </>
  )
}
