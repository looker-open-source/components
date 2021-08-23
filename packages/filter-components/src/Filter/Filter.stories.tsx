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
import { i18nInit } from '../utils/i18n'
import type { FilterProps, FilterChangeProps } from './types/filter_props'
import { Filter } from './Filter'

i18nInit()

const Template: Story<FilterProps> = (args) => {
  const [expression, setExpression] = useState(args.expression)
  const handleChange = (value: FilterChangeProps) => {
    setExpression(value.expression)
    args.onChange?.(value)
  }
  return <Filter {...args} expression={expression} onChange={handleChange} />
}

export const Basic = Template.bind({})
Basic.args = {
  expressionType: 'number',
  expression: '',
}

export const MultiCondition = Template.bind({})
MultiCondition.args = {
  ...Basic.args,
  expression: '[0,20],>30',
}

export const Config = Template.bind({})
Config.args = {
  ...Basic.args,
  config: { max: 100, min: 0, type: 'slider' },
  expression: '20',
}

export default {
  title: 'Filters / Filter',
  component: Filter,
}
