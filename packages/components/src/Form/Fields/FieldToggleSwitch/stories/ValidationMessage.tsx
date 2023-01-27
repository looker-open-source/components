/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import React from 'react'
import type { FieldToggleSwitchProps } from '..'
import { FieldToggleSwitch } from '..'

export default function ValidationMessage(props: FieldToggleSwitchProps) {
  const {
    label = 'Toggle Switch',
    name = 'thumbsUp',
    id = 'id',
    validationMessage = { message: 'This is an error', type: 'error' },
    ...restProps
  } = props

  return (
    <FieldToggleSwitch
      id={id}
      label={label}
      name={name}
      validationMessage={validationMessage}
      {...restProps}
    />
  )
}
