/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import React from 'react'
import { InputSearch } from '../'
import type { InputSearchProps } from '../'
import { SpaceVertical } from '../../../../'

export default function Disable(props: InputSearchProps) {
  const {
    disabled = true,
    placeholder = 'Type your search',
    value = 'Value Disabled',
    ...restProps
  } = props

  return (
    <SpaceVertical align="start">
      <InputSearch disabled={disabled} />
      <InputSearch disabled={disabled} value={value} />
      <InputSearch
        disabled={disabled}
        placeholder={placeholder}
        {...restProps}
      />
    </SpaceVertical>
  )
}
