/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import React from 'react'
import type { FieldTextProps } from '../..'
import { FieldText } from '../..'

export default function Disabled(props: FieldTextProps) {
  const {
    disabled = true,
    name = 'firstName',
    label = 'First Name',
    description = 'Some important information about this field',
    defaultValue = 'My name',
    ...restProps
  } = props

  return (
    <FieldText
      disabled={disabled}
      defaultValue={defaultValue}
      name={name}
      label={label}
      description={description}
      {...restProps}
    />
  )
}
