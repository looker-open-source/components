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
import React, { useState } from 'react'
import type { Story } from '@storybook/react/types-6-0'
import { Box2, Heading, Space, Text } from '@looker/components'
import { defaultArgTypes as argTypes } from '../../../../storybook/src/defaultArgTypes'
import { DateFormat } from '../DateFormat'
import type { InputDateProps } from './InputDate'
import { InputDate } from './InputDate'

export default {
  argTypes,
  component: InputDate,
  title: 'Date / InputDate',
}

const Template: Story<InputDateProps> = (args) => <InputDate {...args} />

export const Value = Template.bind({})
Value.args = {
  value: new Date('February 3, 2009'),
}

export const DisabledWithValue = Template.bind({})
DisabledWithValue.args = {
  disabled: true,
  value: new Date('February 3, 2009'),
}

export const ReadOnlyWithValue = Template.bind({})
ReadOnlyWithValue.args = {
  readOnly: true,
  value: new Date('March 3, 2009'),
}
export const Controlled = () => {
  const [selectedDate, setSelectedDate] = useState<undefined | Date>(new Date())
  const handleChange = (date?: Date) => {
    setSelectedDate(date)
  }
  return (
    <Space gap="u10">
      <InputDate defaultValue={selectedDate} onChange={handleChange} />
      <Box2 p="u5" height="100%" borderLeft>
        <Heading>Selected:</Heading>
        <Text color="text2">
          <DateFormat>{selectedDate}</DateFormat>
        </Text>
      </Box2>
    </Space>
  )
}

Controlled.parameters = {
  storyshots: { disable: true },
}
