/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import React, { useState } from 'react'
import { RadioGroup } from '../'
import type { RadioGroupProps } from '../'
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

export default function Controlled(props: RadioGroupProps) {
  const {
    value: valueProp = 'cheddar',
    options = mockOptions,
    ...restProps
  } = props

  const [value, setValue] = useState(valueProp)

  return (
    <Space align="start">
      <RadioGroup
        name="cheeses"
        value={value}
        onChange={setValue}
        options={options}
        {...restProps}
      />
      <div>
        <Heading>Current Selection:</Heading>
        <Paragraph>{value}</Paragraph>
      </div>
    </Space>
  )
}
