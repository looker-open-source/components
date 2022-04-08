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
import React, { useState } from 'react'
import type { Story } from '@storybook/react/types-6-0'
import { format } from 'date-fns'
import { defaultArgTypes as argTypes } from '../../../../../../apps/storybook/src/defaultArgTypes'
import { Box2, Space } from '../../../Layout'
import { Heading } from '../../../Text'
import type { InputDateProps } from './InputDate'
import { InputDate } from './InputDate'

export default {
  argTypes,
  component: InputDate,
  title: 'InputDate',
}

const Template: Story<InputDateProps> = args => <InputDate {...args} />

export const Basic = Template.bind({})
Basic.args = {}

export const Value = Template.bind({})
Value.args = {
  onChange: () => undefined,
  value: new Date('February 3, 2009'),
}

export const DisabledWithValue = Template.bind({})
DisabledWithValue.args = {
  defaultValue: new Date('February 3, 2009'),
  disabled: true,
}

export const DateStringFormat = Template.bind({})
DateStringFormat.args = {
  dateStringFormat: 'MM-dd-y',
  defaultValue: new Date('February 3, 2009'),
}

export const Controlled = () => {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(
    new Date('February 3, 2009')
  )
  const handleChange = (date?: Date) => {
    setSelectedDate(date)
  }
  return (
    <Space gap="u10">
      <InputDate value={selectedDate} onChange={handleChange} />
      <Box2 p="u5" height="100%" borderLeft>
        <Heading>Selected:</Heading>
        <Heading>{selectedDate && format(selectedDate, 'dd/MMM/y')}</Heading>
      </Box2>
    </Space>
  )
}
Controlled.parameters = {
  storyshots: { disable: true },
}
