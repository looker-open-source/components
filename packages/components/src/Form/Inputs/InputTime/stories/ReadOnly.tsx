/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import React from 'react'
import { InputTime } from '..'
import type { InputTimeProps } from '..'

export default function ReadOnly(props: InputTimeProps) {
  const { readOnly = true, defaultValue = '10:01', ...restProps } = props
  return (
    <InputTime readOnly={readOnly} defaultValue={defaultValue} {...restProps} />
  )
}
