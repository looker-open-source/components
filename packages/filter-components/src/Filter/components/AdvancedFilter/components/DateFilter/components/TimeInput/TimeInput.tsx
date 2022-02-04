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
import { InputText } from '@looker/components'
import { InputTimeSelect } from '@looker/components-date'
import type { FC } from 'react'
import React from 'react'
import styled from 'styled-components'
import type { PlacementProps } from '../../../../../../utils/filter_styles'
import { inputPlacementStyle } from '../../../../../../utils/filter_styles'

interface TimeProps extends PlacementProps {
  className?: string
  date: Date
  onChange: (item: Date) => void
}

const TimeInputInternal: FC<TimeProps> = ({ className, date, onChange }) => {
  const value = `${date.getHours()}:${date.getMinutes()}`
  const handleChange = (newTimeString = '0:00') => {
    const [newHour, newMinute] = newTimeString.split(':')
    const newDate = new Date(
      date.getFullYear(),
      date.getMonth(),
      date.getDate(),
      Number(newHour),
      Number(newMinute)
    )
    onChange(newDate)
  }

  return (
    <InputTimeSelect
      className={className}
      interval={30}
      value={value}
      onChange={handleChange}
    />
  )
}

export const TimeInput = styled(TimeInputInternal)`
  width: 120px;
  ${InputText} {
    ${inputPlacementStyle}
  }
`
