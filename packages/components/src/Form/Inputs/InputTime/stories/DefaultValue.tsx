/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import React from 'react'
import { InputTime } from '..'
import type { InputTimeProps } from '..'

export default function DefaultValue(props: InputTimeProps) {
  const { defaultValue = '15:45', ...restProps } = props
  return <InputTime defaultValue={defaultValue} {...restProps} />
}
