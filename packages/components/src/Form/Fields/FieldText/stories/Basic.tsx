/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import React from 'react'
import type { FieldTextProps } from '../..'
import { FieldText } from '../..'

export default function Basic(props: FieldTextProps) {
  const { name = 'firstName', label = 'First Name', ...restProps } = props
  return <FieldText name={name} label={label} {...restProps} />
}
