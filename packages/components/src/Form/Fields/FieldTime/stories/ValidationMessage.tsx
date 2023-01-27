/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import React from 'react'
import type { FieldTimeProps } from '..'
import { FieldTime } from '..'

export default function ValidationMessage(props: FieldTimeProps) {
  const {
    label = 'Label',
    validationMessage = { message: 'validation Message', type: 'error' },
    ...restProps
  } = props

  return (
    <FieldTime
      label={label}
      validationMessage={validationMessage}
      {...restProps}
    />
  )
}
