/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import React, { useState } from 'react'
import type { Story } from '@storybook/react'

import type { StringSingleSelectProps } from '../../../../types/string_select_props'
import { RadioGroup } from './RadioGroup'

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
  return <RadioGroup {...args} value={value} onChange={handleChange} />
}

export const Basic = Template.bind({})
Basic.args = {
  options,
  value: options[1].value,
}

export const AnyOption = Template.bind({})
AnyOption.args = {
  ...Basic.args,
  anyOption: true,
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
  title: 'Filters/Stories/RadioGroup',
  component: RadioGroup,
}
