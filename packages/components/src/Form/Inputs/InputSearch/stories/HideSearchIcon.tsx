/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import React from 'react'
import { InputSearch } from '../'
import type { InputSearchProps } from '../'

export default function HideSearchIcon(props: InputSearchProps) {
  const {
    hideSearchIcon = false,
    placeholder = 'No search icon here',
    ...restProps
  } = props

  return (
    <InputSearch
      hideSearchIcon={hideSearchIcon}
      placeholder={placeholder}
      {...restProps}
    />
  )
}
