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
import { IAPIMethods } from '@looker/sdk-rtl'
import type { Story } from '@storybook/react/types-6-0'

import { DashboardFilter, DashboardFilterProps } from './DashboardFilter'

const Template: Story<DashboardFilterProps> = (args) => {
  const [expression, setExpression] = useState(args.expression)
  const handleChange = (newExpression: string) => {
    setExpression(newExpression)
    args.onChange?.(newExpression)
  }
  return (
    <DashboardFilter
      {...args}
      expression={expression}
      onChange={handleChange}
    />
  )
}

export const Basic = Template.bind({})
Basic.args = {
  expression: '',
  filter: {
    field: { is_numeric: true },
    name: 'Cost',
    type: 'field_filter',
  },
}

export const Suggestions = Template.bind({})
Suggestions.args = {
  ...Basic.args,
  filter: {
    field: { suggestable: true },
    name: 'Status',
    type: 'field_filter',
    ui_config: { type: 'button_group' },
  },
  sdk: ({
    ok: (value: any) => value,
    get: () => ({
      suggestions: ['complete', 'pending', 'cancelled'],
    }),
  } as unknown) as IAPIMethods,
}

export const Validation = Template.bind({})
Validation.args = {
  ...Suggestions.args,
  filter: {
    ...Suggestions.args.filter,
    required: true,
  },
}

export default {
  title: 'Filters / DashboardFilter',
  component: DashboardFilter,
}
