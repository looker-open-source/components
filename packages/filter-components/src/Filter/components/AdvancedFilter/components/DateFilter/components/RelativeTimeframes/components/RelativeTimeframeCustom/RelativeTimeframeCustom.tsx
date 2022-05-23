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

import { Box2, InputDateRange } from '@looker/components'
import React from 'react'
import type { DayRange } from '../../../../types/day_range'
import type { RelativeTimeframeModel } from '../../../../types/relative_timeframe_types'
import { FILTERS_DATE_FORMAT } from '../../../../utils/format_date'

interface RelativeTimeframeCustomProps {
  value: RelativeTimeframeModel
  onCustomChange: (range: DayRange) => void
}

const defaultValue = {
  from: new Date(Date.now()),
  to: new Date(Date.now()),
}

export const RelativeTimeframeCustom = ({
  value,
  onCustomChange,
}: RelativeTimeframeCustomProps) => {
  const range = typeof value === 'string' ? defaultValue : value

  const handleCustomChange = (d: Partial<DayRange> = {}) => {
    const newDateRange = {
      from: new Date(Date.now()),
      to: new Date(Date.now()),
      ...d,
    }
    onCustomChange(newDateRange)
  }

  return (
    <Box2 p="u3">
      <InputDateRange
        // hardcoding 'yyyy/MM/dd' for legacy reasons
        // eventually this should be replaced with the user's preferred locale
        dateStringFormat={FILTERS_DATE_FORMAT}
        value={range}
        onChange={handleCustomChange}
      />
    </Box2>
  )
}
