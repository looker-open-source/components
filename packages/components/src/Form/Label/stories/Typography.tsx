/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import React from 'react'
import { Label } from '..'
import type { LabelProps } from '..'

export default function Typography(props: LabelProps) {
  const {
    children = 'Label Text',
    color = 'key',
    fontSize = 'xlarge',
    fontWeight = 'normal',
    ...restProps
  } = props

  return (
    <Label
      color={color}
      fontSize={fontSize}
      fontWeight={fontWeight}
      {...restProps}
    >
      {children}
    </Label>
  )
}
