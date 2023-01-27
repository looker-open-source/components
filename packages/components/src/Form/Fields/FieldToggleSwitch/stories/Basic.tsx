/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import React from 'react'
import type { FieldToggleSwitchProps } from '..'
import { FieldToggleSwitch } from '..'

export default function Basic(props: FieldToggleSwitchProps) {
  const {
    label = 'Toggle Switch',
    name = 'thumbsUp',
    id = 'id',
    ...restProps
  } = props

  return <FieldToggleSwitch id={id} label={label} name={name} {...restProps} />
}
