/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import React, { useState } from 'react'
import type { Story } from '@storybook/react'

import type { StringMultiSelectProps } from '../../../../types/string_select_props'
import { CheckboxGroup } from './CheckboxGroup'

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

const Template: Story<StringMultiSelectProps> = (args) => {
  const [value, setValue] = useState(args.value || [])
  const handleChange = (newValue: string[]) => {
    setValue(newValue)
    args.onChange?.(newValue)
  }
  return <CheckboxGroup {...args} value={value} onChange={handleChange} />
}

export const Basic = Template.bind({})
Basic.args = {
  options,
  value: [],
}

export const Error = Template.bind({})
Error.args = {
  ...Basic.args,
  validationMessage: { type: 'error' },
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
  title: 'Filters/Stories/CheckboxGroup',
  component: CheckboxGroup,
}
