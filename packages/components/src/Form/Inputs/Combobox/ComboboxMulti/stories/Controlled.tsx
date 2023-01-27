/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import React, { useState } from 'react'
import type { ComboboxMultiProps, ComboboxOptionObject } from '../..'
import { ComboboxMultiInput } from '../../ComboboxMultiInput'
import { ComboboxMultiOption } from '../../ComboboxMultiOption'
import { ComboboxMultiList } from '../../ComboboxList'
import { ComboboxMulti } from '..'

export default function Controlled(props: ComboboxMultiProps) {
  const {
    width = 300,
    values: valuesProp = [{ value: 'Bananas' }],
    onChange: _onChange,
    ...restProps
  } = props

  const [options, setOptions] = useState<ComboboxOptionObject[]>(valuesProp)
  const handleMultiChange = (newOptions: ComboboxOptionObject[]) => {
    setOptions(newOptions)
  }

  return (
    <ComboboxMulti
      width={width}
      values={options}
      onChange={handleMultiChange}
      {...restProps}
    >
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
