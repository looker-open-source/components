/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import React from 'react'
import { RadioGroup } from '../'
import type { RadioGroupProps } from '../'

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

export default function Basic(props: RadioGroupProps) {
  const {
    options = mockOptions,
    defaultValue = 'cheddar',
    ...restProps
  } = props

  return (
    <RadioGroup
      defaultValue={defaultValue}
      name="group1"
      options={options}
      {...restProps}
    />
  )
}
