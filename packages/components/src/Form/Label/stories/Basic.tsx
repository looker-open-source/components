/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import React from 'react'
import { Label } from '../'
import type { LabelProps } from '../'

export default function Basic(props: LabelProps) {
  const { children = 'Label Text', ...restProps } = props
  return <Label {...restProps}>{children}</Label>
}
