/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import React, { useState } from 'react'
import type { Story } from '@storybook/react'

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
  title: 'Filters/Stories/Tag List Filter',
  component: TagList,
  argTypes: { onChange: { action: 'onChange' } },
}
