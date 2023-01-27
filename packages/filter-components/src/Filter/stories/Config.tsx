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

import React from 'react'
import { SpaceVertical, Heading, Space, Divider } from '@looker/components'
import { Filter } from '../Filter'

export default function Config() {
  return (
    <SpaceVertical>
      <Heading as="h3">String</Heading>
      <Space align="start">
        <SpaceVertical>
          <Heading as="h5">button_group</Heading>
          <Filter
            name="Status"
            expressionType="string"
            expression="pending,complete"
            config={{ type: 'button_group' }}
            suggestions={['complete', 'pending', 'cancelled']}
          />
        </SpaceVertical>
        <SpaceVertical>
          <Heading as="h5">button_toggles</Heading>
          <Filter
            name="Status"
            expressionType="string"
            expression="pending"
            config={{ type: 'button_toggles' }}
            suggestions={['complete', 'pending', 'cancelled']}
          />
        </SpaceVertical>
      </Space>
      <Space>
        <SpaceVertical>
          <Heading as="h5">taglist</Heading>
          <Filter
            name="Status"
            expressionType="string"
            expression="pending,complete"
            config={{ type: 'tag_list' }}
            suggestions={['complete', 'pending', 'cancelled']}
          />
        </SpaceVertical>
        <SpaceVertical>
          <Heading as="h5">dropdown_menu</Heading>
          <Filter
            name="Status"
            expressionType="string"
            expression="pending"
            config={{ type: 'dropdown_menu' }}
            suggestions={['complete', 'pending', 'cancelled']}
          />
        </SpaceVertical>
      </Space>
      <Space>
        <SpaceVertical>
          <Heading as="h5">checkboxes</Heading>
          <Filter
            name="Status"
            expressionType="string"
            expression="pending,complete"
            config={{ type: 'checkboxes' }}
            suggestions={['complete', 'pending', 'cancelled']}
          />
        </SpaceVertical>
        <SpaceVertical>
          <Heading as="h5">radio_buttons</Heading>
          <Filter
            name="Status"
            expressionType="string"
            expression="pending"
            config={{ type: 'radio_buttons' }}
            suggestions={['complete', 'pending', 'cancelled']}
          />
        </SpaceVertical>
      </Space>
      <Divider />
      <Heading as="h3">Date</Heading>
      <Space>
        <SpaceVertical>
          <Heading as="h5">relative_timeframes</Heading>
          <Filter
            name="Date"
            expressionType="date"
            expression="7 day"
            config={{ type: 'relative_timeframes' }}
          />
        </SpaceVertical>
        <SpaceVertical>
          <Heading as="h5">day_picker</Heading>
          <Filter
            name="Date"
            expressionType="date"
            expression="2021/06/29"
            config={{ type: 'day_picker' }}
          />
        </SpaceVertical>
      </Space>
      <SpaceVertical>
        <Heading as="h5">day_range_picker</Heading>
        <Filter
          name="Date"
          expressionType="date"
          expression="2021/06/01 to 2021/06/30"
          config={{ type: 'day_range_picker' }}
        />
      </SpaceVertical>
      <Divider />
      <Heading as="h3">Number</Heading>
      <Space>
        <SpaceVertical>
          <Heading as="h5">slider</Heading>
          <Filter
            name="Age"
            expressionType="number"
            expression="55"
            config={{ max: 120, min: 0, type: 'slider' }}
          />
        </SpaceVertical>
        <SpaceVertical>
          <Heading as="h5">range_slider</Heading>
          <Filter
            name="Age"
            expressionType="number"
            expression="[0,45]"
            config={{ max: 120, min: 0, type: 'range_slider' }}
          />
        </SpaceVertical>
      </Space>
    </SpaceVertical>
  )
}
