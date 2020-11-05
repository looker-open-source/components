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

import React, { useState, useMemo } from 'react'
import { Story } from '@storybook/react/types-6-0'
import { InputSearch, InputSearchProps } from './InputSearch'

const Template: Story<InputSearchProps> = (args) => <InputSearch {...args} />

export const Basic = Template.bind({})
Basic.args = {}

export const Placeholder = Template.bind({})
Placeholder.args = {
  placeholder: 'Type your search',
}
export const Value = Template.bind({})
Value.args = {
  ...Placeholder.args,
  value: 'Search term',
}

export const Summary = Template.bind({})
Summary.args = {
  ...Placeholder.args,
  summary: '5/10 results',
}

export const DefaultValue = Template.bind({})
DefaultValue.args = {
  ...Placeholder.args,
  defaultValue: 'Default search term',
}

export const NoIcon = Template.bind({})
NoIcon.args = {
  ...Placeholder.args,
  hideSearchIcon: true,
}

export const AutoResize = Template.bind({})
AutoResize.args = {
  autoResize: true,
  maxWidth: 250,
  placeholder: 'Resizes to fit value',
}

export const Advanced = () => {
  const [value, setValue] = useState('')

  const options = useMemo(() => {
    const startingOptions = [
      {
        description: 'Really great description',
        detail: 'so cool',
        value: 'Foo',
      },
      { detail: 'got details?', value: 'Bar' },
    ]
    return startingOptions.filter(
      (option) => option.value.toUpperCase().indexOf(value.toUpperCase()) > -1
    )
  }, [value])

  return (
    <InputSearch
      value={value}
      onChange={setValue}
      options={options}
      noOptionsLabel="Nothing matched your search"
      isClearable={false}
      autoFocus
    />
  )
}

export default {
  component: InputSearch,
  title: 'InputSearch',
}
