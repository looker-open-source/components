/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import React from 'react'
import { InputSearch } from '../'
import type { InputSearchProps } from '../'

export default function Basic(props: InputSearchProps) {
  const { placeholder = 'Type your search', ...restProps } = props

  return <InputSearch placeholder={placeholder} {...restProps} />
}
