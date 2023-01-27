/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import React from 'react'
import { InputSearch } from '../'
import type { InputSearchProps } from '../'

export default function Summary(props: InputSearchProps) {
  const {
    placeholder = 'Type your search',
    summary = 'summary text',
    ...restProps
  } = props

  return (
    <InputSearch placeholder={placeholder} summary={summary} {...restProps} />
  )
}
