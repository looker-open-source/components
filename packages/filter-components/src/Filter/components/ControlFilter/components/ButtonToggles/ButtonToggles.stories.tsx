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

import type { StringSingleSelectProps } from '../../../../types/string_select_props'
import { ButtonToggles } from './ButtonToggles'

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
]

const Template: Story<StringSingleSelectProps> = (args) => {
  const [value, setValue] = useState(args.value || '')
  const handleChange = (newValue: string) => {
    setValue(newValue)
    args.onChange?.(newValue)
  }
  return <ButtonToggles {...args} value={value} onChange={handleChange} />
}

export const Basic = Template.bind({})
Basic.args = {
  options,
  value: options[1].value,
}

export const Loading = Template.bind({})
Loading.args = {
  ...Basic.args,
  isLoading: true,
}
Loading.parameters = {
  storyshots: { disable: true },
}

export default {
  title: 'Filters / ButtonToggles',
  component: ButtonToggles,
}
