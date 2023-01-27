/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import React from 'react'
import type { FieldTextProps } from '../..'
import { FieldText } from '../..'

export default function ValidationMessage(props: FieldTextProps) {
  const {
    required = true,
    name = 'firstName',
    label = 'First Name',
    validationMessage = { message: 'This is an error', type: 'error' },
    ...restProps
  } = props

  return (
    <FieldText
      name={name}
      label={label}
      required={required}
      validationMessage={validationMessage}
      {...restProps}
    />
  )
}
