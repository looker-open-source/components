/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import React from 'react'
import { ChevronLeft } from '@styled-icons/material-rounded/ChevronLeft/ChevronLeft'
import { ChevronRight } from '@styled-icons/material-rounded/ChevronRight/ChevronRight'
import { ArrowDropDown } from '@styled-icons/material/ArrowDropDown/ArrowDropDown'
import { getMonth, setMonth } from 'date-fns'
import { ButtonTransparent, IconButton } from '../Button'
import { Space } from '../Layout'
import { useTranslation } from '../utils'
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
