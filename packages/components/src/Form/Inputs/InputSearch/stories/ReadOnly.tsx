/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import React from 'react'
import { InputSearch } from '../'
import type { InputSearchProps } from '../'

export default function ReadOnly(props: InputSearchProps) {
  const {
    value = "You can't change me.",
    readOnly = true,
    ...restProps
  } = props

  return <InputSearch value={value} readOnly={readOnly} {...restProps} />
}
