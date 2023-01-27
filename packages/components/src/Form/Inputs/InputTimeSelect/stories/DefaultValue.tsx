/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import React from 'react'
import { InputTimeSelect } from '..'
import type { InputTimeSelectProps } from '..'

export default function DefaultValue(props: InputTimeSelectProps) {
  const { defaultValue = '15:45', ...restProps } = props
  return <InputTimeSelect defaultValue={defaultValue} {...restProps} />
}
