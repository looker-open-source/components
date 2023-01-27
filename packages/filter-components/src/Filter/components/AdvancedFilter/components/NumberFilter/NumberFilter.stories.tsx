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
import type { Story } from '@storybook/react'
import type { NumberFilterType } from '@looker/filter-expressions'

import { i18nInit } from '../../../../../utils'
import { NumberFilter } from './NumberFilter'
import type { FilterParamProps } from '../../../../types/filter_param_props'

i18nInit()

const Template: Story<FilterParamProps<NumberFilterType>> = (args) => (
  <NumberFilter {...args} />
)

export const Basic = Template.bind({})
Basic.args = {
  allowMultipleOptions: true,
  filterType: 'number',
  name: 'filtername',
  item: {
    id: '1',
    type: '=',
    is: true,
    value: [],
  },
  showAdd: false,
  showName: true,
  showRemove: false,
  showOperator: false,
  showMatchesAdvanced: false,
}

export const Error = Template.bind({})
Error.args = { ...Basic.args, validationMessage: { type: 'error' } }

export const GreaterThan = Template.bind({})
GreaterThan.args = {
  ...Basic.args,
  item: {
    id: '1',
    is: true,
    type: '>',
    value: [99],
  },
}
export const GreaterThanError = Template.bind({})
GreaterThanError.args = {
  ...Basic.args,
  item: {
    id: '1',
    is: true,
    type: '>',
    value: [],
  },
  validationMessage: { type: 'error' },
}

export const Between = Template.bind({})
Between.args = {
  ...Basic.args,
  item: {
    high: 10,
    id: '1',
    is: true,
    low: 5,
    type: 'between',
  },
}
export const BetweenError = Template.bind({})
BetweenError.args = {
  ...Basic.args,
  item: {
    id: '1',
    is: true,
    type: 'between',
  },
  validationMessage: { type: 'error' },
}

export default {
  title: 'Filters/Stories/Number Filter',
  component: NumberFilter,
}
