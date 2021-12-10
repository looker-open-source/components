/*

 MIT License

 Copyright (c) 2021 Looker Data Sciences, Inc.

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
import { Box, ChipButton, Popover } from '@looker/components'
import { InputDate } from '@looker/components-date'
import type { FC } from 'react'
import React from 'react'
import styled from 'styled-components'
import { getDateLocale } from '../../../../../../../utils'
import type { PlacementProps } from '../../../../../../utils/filter_styles'
import { inputPlacementStyle } from '../../../../../../utils/filter_styles'
import { FILTERS_DATE_FORMAT, formatDate } from '../../utils/format_date'

interface DateInputProps extends PlacementProps {
  className?: string
  date: Date
  onChange: (date: Date) => void
}

export const DateInputInternal: FC<DateInputProps> = ({
  className,
  date,
  onChange,
}) => {
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
            locale={getDateLocale()}
          />
        </Box>
      }
      placement="bottom-start"
    >
      <ChipButton className={className}>{formatDate(date)}</ChipButton>
    </Popover>
  )
}

export const DateInput = styled(DateInputInternal)`
  ${inputPlacementStyle}
`
