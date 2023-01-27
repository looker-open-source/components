/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import React from 'react'
import { InputTime } from '..'
import type { InputTimeProps } from '..'

export default function ValidationError(props: InputTimeProps) {
  const { validationType = 'error', ...restProps } = props
  return <InputTime validationType={validationType} {...restProps} />
}
