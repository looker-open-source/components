/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import React from 'react'
import type { ComboboxMultiProps } from '../..'
import { ComboboxMultiInput } from '../../ComboboxMultiInput'
import { ComboboxMultiOption } from '../../ComboboxMultiOption'
import { ComboboxMultiList } from '../../ComboboxList'
import { ComboboxMulti } from '..'

export default function NoIndicator(props: ComboboxMultiProps) {
  const { width = 300, ...restProps } = props

  return (
    <ComboboxMulti width={width} {...restProps}>
      <ComboboxMultiInput
        onClear={() => alert('CLEAR')}
        placeholder="indicator={false}"
      />
      <ComboboxMultiList indicator={false} persistSelection>
        <ComboboxMultiOption value="Apples" />
        <ComboboxMultiOption value="Oranges" />
        <ComboboxMultiOption value="Grapes" />
        <ComboboxMultiOption value="Bananas" />
        <ComboboxMultiOption value="Pineapples" />
      </ComboboxMultiList>
    </ComboboxMulti>
  )
}
