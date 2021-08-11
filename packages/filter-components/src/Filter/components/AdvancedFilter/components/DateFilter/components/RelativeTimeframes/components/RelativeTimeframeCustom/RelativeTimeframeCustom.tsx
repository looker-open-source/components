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

import { InputDateRange, Locales } from '@looker/components-date'
import React from 'react'
import styled from 'styled-components'
import type { DayRange } from '../../../../types/day_range'
import type { RelativeTimeframeModel } from '../../../../types/relative_timeframe_types'
import { useDateLocalization } from '../../../../utils/format_date'

interface RelativeTimeframeCustomProps {
  value: RelativeTimeframeModel
  onCustomChange: (range: DayRange) => void
}

export const RelativeTimeframeCustom = ({
  value,
  onCustomChange,
}: RelativeTimeframeCustomProps) => {
  const range = typeof value === 'string' ? undefined : value

  const dateLocalization = useDateLocalization()

  const handleCustomChange = (d: Partial<DayRange> = {}) => {
    const newDateRange = {
      from: new Date(Date.now()),
      to: new Date(Date.now()),
      ...d,
    }
    onCustomChange(newDateRange)
  }

  return (
    <InputWrapper>
      <InputDateRange
        localization={dateLocalization}
        // hardcoding `Japanese` as it matches the current date format: YYYY/MM/DD
        // eventually this should be replaced with the user's preferred locale
        // when the rest of dates are localized
        dateStringLocale={Locales.Japanese}
        value={range}
        onChange={handleCustomChange}
      />
    </InputWrapper>
  )
}

const InputWrapper = styled.div`
  padding: ${({ theme }) => theme.space.u3};
  & > div {
    display: flex;
    flex-direction: column;
  }
`
