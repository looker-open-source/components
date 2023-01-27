/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import React from 'react'
import type { FieldTimeProps } from '..'
import { FieldTime } from '../'

export default function Disabled(props: FieldTimeProps) {
  const {
    disabled = true,
    defaultValue = '14:34',
    description = 'this is the description',
    detail = 'detail',
    label = 'Label',
    ...restProps
  } = props

  return (
    <FieldTime
      label={label}
      defaultValue={defaultValue}
      description={description}
      detail={detail}
      disabled={disabled}
      {...restProps}
    />
  )
}
