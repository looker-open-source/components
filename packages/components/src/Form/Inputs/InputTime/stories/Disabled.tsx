/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import React from 'react'
import { InputTime } from '..'
import type { InputTimeProps } from '..'

export default function Disabled(props: InputTimeProps) {
  const { disabled = true, ...restProps } = props
  return <InputTime disabled={disabled} {...restProps} />
}
