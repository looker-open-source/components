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
import React from 'react'
import { useTranslation } from 'react-i18next'
import {
  ButtonTransparent,
  Heading,
  Select,
  Space,
  theme,
  Tooltip,
} from '@looker/components'
import type { LocaleUtils } from 'react-day-picker'
import { headingSizeMap } from './CalendarNav'
import type { CalendarSize } from './calendar-size'

export const currentYear = new Date().getFullYear()
export const fromMonth = new Date(currentYear - 100, 0)
export const toMonth = new Date(currentYear + 10, 11)

type NavCB = (date: Date) => void

type YearMonthFormProps = {
  selectMonth?: boolean
  date?: Date
  disabled?: boolean
  localeUtils?: LocaleUtils
  onChange?: NavCB
  onNowClick?: NavCB
  size?: CalendarSize
}

export const YearMonthForm = ({
  selectMonth,
  date,
  disabled,
  localeUtils,
  onChange,
  onNowClick,
  size,
}: YearMonthFormProps) => {
  const { t } = useTranslation('Calendar')

  const months = localeUtils?.getMonths()

  const years = []
  for (let i = fromMonth.getFullYear(); i <= toMonth.getFullYear(); i++) {
    years.push(i.toString())
  }
  const monthOptions = months?.map((month: string, index: number) => {
    return {
      label: month,
      value: index.toString(),
    }
  })

  const yearOptions = years.map((year: string) => {
    return {
      label: year,
      value: year,
    }
  })

  const handleMonth = (month: string) => {
    onChange && date && onChange(new Date(date.getFullYear(), parseInt(month)))
  }
  const handleYear = (year: string) => {
    onChange && date && onChange(new Date(parseInt(year), date.getMonth()))
  }

  const handleLabelClick = () => {
    onNowClick && Date && onNowClick(new Date(Date.now())) // specify Date.now() to facilitate testing mocks
  }

  const StationaryMonthYear = disabled ? (
    <Space my={theme.space.u2} justifyContent="center">
      <Heading
        as={headingSizeMap(size)}
        fontWeight="semiBold"
        fontFamily="body"
      >
        {date && localeUtils && localeUtils.formatMonthTitle(date)}
      </Heading>
    </Space>
  ) : (
    <Space justifyContent="center">
      <Tooltip placement="bottom" content={t('View Current Month')}>
        <ButtonTransparent onClick={handleLabelClick} color="key">
          <Heading
            as={headingSizeMap(size)}
            fontWeight="semiBold"
            fontFamily="body"
          >
            {date && localeUtils && localeUtils.formatMonthTitle(date)}
          </Heading>
        </ButtonTransparent>
      </Tooltip>
    </Space>
  )

  return selectMonth ? (
    <Space justifyContent="center" gap="xsmall" py="u2">
      <Select
        autoResize
        onChange={handleMonth}
        value={date?.getMonth().toString()}
        options={monthOptions}
      />
      <Select
        autoResize
        onChange={handleYear}
        value={date?.getFullYear().toString()}
        options={yearOptions}
      />
    </Space>
  ) : (
    StationaryMonthYear
  )
}
