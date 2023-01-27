/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import React from 'react'
import { CheckboxGroup } from '..'
import type { CheckboxGroupProps } from '..'

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

export default function DisabledItem(props: CheckboxGroupProps) {
  const {
    options = mockOptions,
    defaultValue = ['cheddar'],
    ...restProps
  } = props

  return (
    <CheckboxGroup
      defaultValue={defaultValue}
      name="group1"
      options={options}
      {...restProps}
    />
  )
}
