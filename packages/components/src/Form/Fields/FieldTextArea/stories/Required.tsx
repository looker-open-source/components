/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import React from 'react'
import type { FieldTextAreaProps } from '../'
import { FieldTextArea } from '../..'

export default function Required(props: FieldTextAreaProps) {
  const {
    required = true,
    name = 'firstName',
    label = 'First Name',
    ...restProps
  } = props

  return (
    <FieldTextArea
      name={name}
      label={label}
      required={required}
      {...restProps}
    />
  )
}
