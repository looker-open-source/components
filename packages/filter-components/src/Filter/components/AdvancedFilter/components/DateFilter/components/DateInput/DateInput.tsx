/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import { Box, InputDate, Popover } from '@looker/components'
import React from 'react'
import styled from 'styled-components'
import { TokenBase } from '../../../../../../../Token/Token'
import type { PlacementProps } from '../../../../../../utils/filter_styles'
import { inputPlacementStyle } from '../../../../../../utils/filter_styles'
import { FILTERS_DATE_FORMAT, formatDate } from '../../utils/format_date'

interface DateInputProps extends PlacementProps {
  className?: string
  date: Date
  onChange: (date: Date) => void
}

export const DateInputInternal = ({
  className,
  date,
  onChange,
}: DateInputProps) => {
  const handleDayChange = (d?: Date) => {
    const newDate = d || new Date(Date.now())
    // Note: We can't just pass the date object through because that would change the time of the date value.
    // https://github.com/gpbl/react-day-picker/issues/473
    onChange(
      new Date(
        newDate.getFullYear(),
        newDate.getMonth(),
        newDate.getDate(),
        date.getHours(),
        date.getMinutes(),
        date.getSeconds()
      )
    )
  }

  return (
    <Popover
      content={
        <Box p="small">
          <InputDate
            defaultValue={date}
            onChange={handleDayChange}
            // hardcoding 'yyyy/MM/dd' for legacy reasons
            // eventually this should be replaced with the user's preferred locale
            dateStringFormat={FILTERS_DATE_FORMAT}
          />
        </Box>
      }
      placement="bottom-start"
    >
      <TokenBase className={className} aria-selected="true">
        {formatDate(date)}
      </TokenBase>
    </Popover>
  )
}

export const DateInput = styled(DateInputInternal)`
  ${inputPlacementStyle}
`
