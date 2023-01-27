/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import React from 'react'
import { RadioGroup } from '..'
import type { RadioGroupProps } from '..'

const mockOptions = [
  {
    disabled: true,
    label: 'Brie',
    value: 'brie',
  },
  {
    label: 'Cheddar',
    value: 'cheddar',
  },
  {
    disabled: true,
    label: 'Gouda',
    value: 'gouda',
  },
  {
    label: 'Mozzarella',
    value: 'mozzarella',
  },
]

export default function DisabledItem(props: RadioGroupProps) {
  const {
    options = mockOptions,
    defaultValue = 'cheddar',
    ...restProps
  } = props

  return (
    <RadioGroup
      name="group1"
      options={options}
      defaultValue={defaultValue}
      {...restProps}
    />
  )
}
