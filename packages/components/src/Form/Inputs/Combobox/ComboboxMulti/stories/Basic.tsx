/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import React from 'react'
import type { ComboboxMultiProps } from '../..'
import { ComboboxMultiInput } from '../../ComboboxMultiInput'
import { ComboboxMultiOption } from '../../ComboboxMultiOption'
import { ComboboxMultiList } from '../../ComboboxList'
import { ComboboxMulti } from '../../ComboboxMulti'

export default function Basic(props: ComboboxMultiProps) {
  const { width = 300, ...restProps } = props
  return (
    <ComboboxMulti width={width} {...restProps}>
      <ComboboxMultiInput onClear={() => alert('CLEAR')} freeInput />
      <ComboboxMultiList>
        <ComboboxMultiOption value="Apples" />
        <ComboboxMultiOption value="Oranges" />
        <ComboboxMultiOption value="Grapes" />
        <ComboboxMultiOption value="Bananas" />
        <ComboboxMultiOption value="Pineapples" />
      </ComboboxMultiList>
    </ComboboxMulti>
  )
}
