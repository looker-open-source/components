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

import type { TagListProps } from './TagList'
import { TagList } from './TagList'

const options = [
  {
    label: 'label1',
    value: 'value1',
  },
  {
    label: 'label2',
    value: 'value2',
  },
  {
    label: 'label3',
    value: 'value3',
  },
  {
    label: 'label11',
    value: 'value11',
  },
  {
    label: 'label22',
    value: 'value22',
  },
  {
    label: 'label33',
    value: 'value33',
  },
  {
    label: 'label111',
    value: 'value111',
  },
  {
    label: 'label222',
    value: 'value222',
  },
  {
    label: 'label333',
    value: 'value333',
  },
]

const Template: Story<TagListProps> = (args) => {
  const [value, setValue] = useState(args.value || [])
  const handleChange = (newValue: string[]) => {
    setValue(newValue)
    args.onChange?.(newValue)
  }
  return <TagList {...args} value={value} onChange={handleChange} />
}

export const Basic = Template.bind({})
Basic.args = {
  options,
  value: [],
}

export const WithValues = Template.bind({})
WithValues.args = {
  ...Basic.args,
  value: options.map((x) => x.value),
}

export default {
  title: 'Filters / Tag List Filter',
  component: TagList,
  argTypes: { onChange: { action: 'onChange' } },
}
