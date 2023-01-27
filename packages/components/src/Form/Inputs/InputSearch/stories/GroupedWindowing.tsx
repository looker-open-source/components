/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import React from 'react'
import { InputSearch } from '../'
import type { InputSearchProps } from '../'
import { options1kGrouped } from '../../Select/stories/options1k'

export default function GroupedWindowing(props: InputSearchProps) {
  const { placeholder = 'Type your search', width = 400, ...restProps } = props

  return (
    <InputSearch
      placeholder={placeholder}
      options={options1kGrouped}
      width={width}
      {...restProps}
    />
  )
}
