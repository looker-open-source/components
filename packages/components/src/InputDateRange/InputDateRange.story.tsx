/*

 MIT License

 Copyright (c) 2020 Looker Data Sciences, Inc.

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
import React, { FC, useState } from 'react'
import { Story } from '@storybook/react/types-6-0'
import { Button } from '../Button'
import { Popover, PopoverContent } from '../Popover'
import { DateFormat } from '../DateFormat'
import { InputDateRange, InputDateRangeProps } from './'

export default {
  title: 'Forms/InputDateRange',
}

const Template: Story<InputDateRangeProps> = (args) => (
  <InputDateRange {...args} />
)

export const Basic = Template.bind({})
export const Disabled = () => <InputDateRange disabled />

export const Controlled: FC = () => {
  const startDate = new Date()
  startDate.setDate(9)
  const endDate = new Date()
  endDate.setDate(15)

  const [controlledDateRange, setControlledDateRange] = useState<any>()

  const handleNextWeekClick = () => {
    setControlledDateRange({
      from: new Date('03/02/2020'),
      to: new Date('03/09/2020'),
    })
  }

  return (
    <Popover
      content={
        <PopoverContent>
          <Button onClick={handleNextWeekClick}>Next Week</Button>
          <InputDateRange
            value={controlledDateRange}
            onChange={setControlledDateRange}
          />
        </PopoverContent>
      }
    >
      <Button>
        {controlledDateRange ? (
          <>
            <DateFormat>{controlledDateRange.from}</DateFormat> &mdash;
            <DateFormat>{controlledDateRange.to}</DateFormat>
          </>
        ) : (
          'Select Dates'
        )}
      </Button>
    </Popover>
  )
}

Controlled.parameters = {
  storyshots: { disable: true },
}
