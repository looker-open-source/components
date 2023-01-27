/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import React from 'react'
import type { FieldTimeSelectProps } from '../'
import { FieldTimeSelect } from '../'

export default function Basic(props: FieldTimeSelectProps) {
  const {
    defaultValue = '14:30',
    interval = 10,
    label = 'Select Time',
    ...restProps
  } = props

  return (
    <FieldTimeSelect
      label={label}
      defaultValue={defaultValue}
      interval={interval}
      {...restProps}
    />
  )
}
