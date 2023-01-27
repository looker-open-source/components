/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import React from 'react'
import type { FieldToggleSwitchProps } from '..'
import { FieldToggleSwitch } from '..'

export default function ReadOnly(props: FieldToggleSwitchProps) {
  const {
    label = 'Toggle Switch',
    name = 'thumbsUp',
    id = 'id',
    readOnly = true,
    ...restProps
  } = props

  return (
    <FieldToggleSwitch
      id={id}
      label={label}
      name={name}
      readOnly={readOnly}
      {...restProps}
    />
  )
}
