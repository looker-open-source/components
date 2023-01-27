/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import React from 'react'
import type { FieldToggleSwitchProps } from '..'
import { FieldToggleSwitch } from '..'

export default function DetailDescription(props: FieldToggleSwitchProps) {
  const {
    label = 'Toggle Switch',
    name = 'thumbsUp',
    id = 'id',
    description = 'describe something here.',
    detail = '4/20',
    ...restProps
  } = props

  return (
    <FieldToggleSwitch
      id={id}
      label={label}
      name={name}
      detail={detail}
      description={description}
      {...restProps}
    />
  )
}
