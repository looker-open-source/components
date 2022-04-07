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

import { dateFnLocaleMap } from '@looker/i18n'
import React, { useState } from 'react'
import type { Story } from '@storybook/react/types-6-0'
import { defaultArgTypes as argTypes } from '../../../../apps/storybook/src/defaultArgTypes'
import type { CalendarProps } from './Calendar'
import type { RangeModifier } from './types'
import { Calendar } from './Calendar'

export default {
  argTypes: {
    ...argTypes,
    locale: {
      control: { type: 'select' },
      mapping: dateFnLocaleMap,
      options: Object.keys(dateFnLocaleMap),
    },
  },
  component: Calendar,
  title: 'Calendar',
}

const Template: Story<CalendarProps> = ({
  onSelectDate,
  selectedDate,
  viewMonth: viewMonthProp,
  ...args
}) => {
  const [date, setDate] = useState(selectedDate)
  const handleSelect = (newDate: Date) => {
    onSelectDate?.(newDate)
    setDate(newDate)
  }
  const [viewMonth, setViewMonth] = useState(viewMonthProp)
  return (
    <Calendar
      {...args}
      onSelectDate={handleSelect}
      selectedDate={date}
      viewMonth={viewMonth}
      onMonthChange={setViewMonth}
    />
  )
}
const TemplateRange: Story<CalendarProps> = ({
  onSelectRange,
  selectedRange,
  viewMonth: viewMonthProp,
  ...args
}) => {
  const [range, setRange] = useState(selectedRange)
  const handleSelect = (newRange: RangeModifier) => {
    onSelectRange?.(newRange)
    setRange(newRange)
  }
  const [viewMonth, setViewMonth] = useState(viewMonthProp)
  return (
    <Calendar
      {...args}
      isRange
      onSelectRange={handleSelect}
      selectedRange={range}
      viewMonth={viewMonth}
      onMonthChange={setViewMonth}
    />
  )
}

export const Basic = Template.bind({})
Basic.args = { viewMonth: new Date('Jul 1, 2021') }
Basic.parameters = {
  storyshots: { disable: true },
}

export const Range = TemplateRange.bind({})
Range.args = { viewMonth: new Date('Feb 1, 2022') }
Range.parameters = {
  storyshots: { disable: true },
}
