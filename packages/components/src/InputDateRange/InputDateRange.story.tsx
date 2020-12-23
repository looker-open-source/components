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
import React, { useState } from 'react'
import { Story } from '@storybook/react/types-6-0'
import { VIEWPORT_MAP } from '../utils-storybook'
import { Button } from '../Button'
import { Popover, PopoverContent } from '../Popover'
import { DateFormat } from '../DateFormat'
import { Tabs, Tab, TabList, TabPanels, TabPanel } from '../Tabs'
import { Menu, MenuItem } from '../Menu'
import { InputDateRange, InputDateRangeProps } from './'

export default {
  component: InputDateRange,
  title: 'InputDateRange',
}

const Template: Story<InputDateRangeProps> = (args) => (
  <InputDateRange {...args} />
)

export const Basic = Template.bind({})
Basic.args = {
  defaultValue: {
    from: new Date('July 25, 2020'),
    to: new Date('August 5, 2020'),
  },
}

export const Disabled = Template.bind({})
Disabled.args = {
  defaultValue: {
    from: new Date('Jun 7, 2000'),
    to: new Date('Jun 19, 2000'),
  },
  disabled: true,
}

export const ReadOnly = Template.bind({})
ReadOnly.args = {
  defaultValue: {
    from: new Date('Jun 7, 2000'),
    to: new Date('Jun 19, 2000'),
  },
  readOnly: true,
}

export const MobileUI = Template.bind({})
ReadOnly.args = {
  defaultValue: {
    from: new Date('Jun 7, 2000'),
    to: new Date('Jun 19, 2000'),
  },
  readOnly: true,
}

MobileUI.parameters = {
  viewport: {
    defaultViewport: 'mobile',
    viewports: VIEWPORT_MAP,
  },
}

export const TimeframeFilter = () => {
  const startDate = new Date()
  startDate.setDate(9)
  const endDate = new Date()
  endDate.setDate(15)

  const [controlledDateRange, setControlledDateRange] = useState<any>()

  return (
    <Popover
      label="Select Date"
      content={
        <PopoverContent>
          <Tabs defaultIndex={1}>
            <TabList>
              <Tab>Preset</Tab>
              <Tab>Custom</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <Menu>
                  <MenuItem>Today</MenuItem>
                  <MenuItem>Yesterday</MenuItem>
                  <MenuItem>Last 7 Days</MenuItem>
                  <MenuItem>Last 14 Days</MenuItem>
                  <MenuItem>Last 90 Days</MenuItem>
                  <MenuItem>Year To Date</MenuItem>
                </Menu>
              </TabPanel>
              <TabPanel>
                <InputDateRange
                  value={controlledDateRange}
                  onChange={setControlledDateRange}
                />
              </TabPanel>
            </TabPanels>
          </Tabs>
        </PopoverContent>
      }
    >
      <Button>
        {controlledDateRange ? (
          <>
            <DateFormat>{controlledDateRange.from}</DateFormat> &mdash;{' '}
            <DateFormat>{controlledDateRange.to}</DateFormat>
          </>
        ) : (
          'Select Dates'
        )}
      </Button>
    </Popover>
  )
}

TimeframeFilter.parameters = {
  storyshots: { disable: true },
}
