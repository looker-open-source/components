/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import React, { useState } from 'react'
import { CheckboxGroup } from '../'
import type { CheckboxGroupProps } from '../'
import { Paragraph, Space, Heading } from '../../../../'

const mockOptions = [
  {
    label: 'Cheddar',
    value: 'cheddar',
  },
  {
    label: 'Gouda',
    value: 'gouda',
  },
]

export default function Controlled(props: CheckboxGroupProps) {
  const {
    value: valueProp = ['cheddar'],
    options = mockOptions,
    ...restProps
  } = props

  const [value, setValue] = useState(valueProp)

  return (
    <Space align="start">
      <CheckboxGroup
        name="cheeses"
        value={value}
        onChange={setValue}
        options={options}
        {...restProps}
      />
      <div>
        <Heading>Current Selection:</Heading>
        <Paragraph>{value.join(', ')}</Paragraph>
      </div>
    </Space>
  )
}
