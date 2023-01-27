/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import React from 'react'
import { CheckboxGroup } from '../'
import type { CheckboxGroupProps } from '../'

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

export default function Basic(props: CheckboxGroupProps) {
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
