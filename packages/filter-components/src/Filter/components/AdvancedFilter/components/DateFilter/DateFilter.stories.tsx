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
import React from 'react'
import type { Story } from '@storybook/react/types-6-0'
import type { DateFilterType } from '@looker/filter-expressions'

import { DateFilter } from './DateFilter'
import type { FilterParamProps } from '../../../../types/filter_param_props'

const Template: Story<FilterParamProps<DateFilterType>> = (args) => (
  <DateFilter {...args} />
)

export const Basic = Template.bind({})
Basic.args = {
  filterType: 'date',
  name: 'filtername',
  item: {
    id: '1',
    type: 'after',
    is: false,
  },
  showAdd: false,
  showName: true,
  showRemove: false,
  showOperator: false,
  showMatchesAdvanced: false,
}

export const Relative = Template.bind({})
Relative.args = {
  ...Basic.args,
  item: {
    id: '1',
    is: false,
    endInterval: { type: 'interval', value: 3, unit: 'week' },
    intervalType: 'ago',
    startInterval: { type: 'interval', value: 3, unit: 'month' },
    type: 'relative',
  },
}

export default {
  title: 'Filters / Date Filter',
  component: DateFilter,
}
