/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import React from 'react'
import type { ComboboxProps } from '../..'
import { Combobox, ComboboxOption, ComboboxList } from '../..'
import { ComboboxInput } from '../../ComboboxInput'

export default function NoIndicator(props: ComboboxProps) {
  const { width = 300, ...restProps } = props

  return (
    <Combobox width={width} {...restProps}>
      <ComboboxInput placeholder="indicator={false}" />
      <ComboboxList indicator={false} persistSelection>
        <ComboboxOption value="Apples" />
        <ComboboxOption value="Oranges" />
        <ComboboxOption value="Grapes" />
        <ComboboxOption value="Bananas" />
        <ComboboxOption value="Pineapples" />
        <ComboboxOption
          value=""
          label="Create New Option"
          highlightText={false}
        />
      </ComboboxList>
    </Combobox>
  )
}
