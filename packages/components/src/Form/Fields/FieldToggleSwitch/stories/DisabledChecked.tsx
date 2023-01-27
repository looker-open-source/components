/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import React from 'react'
import type { FieldToggleSwitchProps } from '..'
import { FieldToggleSwitch } from '..'

export default function Checked(props: FieldToggleSwitchProps) {
  const {
    label = 'Toggle Switch',
    name = 'thumbsUp',
    id = 'id',
    disabled = true,
    on = true,
    ...restProps
  } = props

  return (
    <FieldToggleSwitch
      id={id}
      label={label}
      name={name}
      disabled={disabled}
      on={on}
      {...restProps}
    />
  )
}
