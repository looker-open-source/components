/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import React, { useState } from 'react'
import { Button, Space } from '../../../../../'
import type { ComboboxProps } from '../..'
import { Combobox, ComboboxOption, ComboboxList } from '../..'
import { ComboboxInput } from '../../ComboboxInput'
import type { MaybeComboboxOptionObject } from '../../'

export default function Controlled(props: ComboboxProps) {
  const {
    width = 300,
    value: valueProp = {
      value: 'Bananas',
    },
    onChange: _onChange,
    ...restProps
  } = props

  const [option, setOption] = useState<MaybeComboboxOptionObject>(valueProp)

  const handleChange = (newOption: MaybeComboboxOptionObject) => {
    setOption(newOption)
  }

  const handlePineappleClick = () => {
    setOption({ value: 'Pineapples' })
  }

  return (
    <Space>
      <Button onClick={handlePineappleClick}>Select Pineapples</Button>
      <Combobox
        width={width}
        value={option}
        onChange={handleChange}
        {...restProps}
      >
        <ComboboxInput />
        <ComboboxList>
          <ComboboxOption value="Apples" />
          <ComboboxOption value="Oranges" />
          <ComboboxOption value="Grapes" />
          <ComboboxOption value="Bananas" />
          <ComboboxOption value="Pineapples" />
          <ComboboxOption value="Apples2" />
          <ComboboxOption value="Oranges2" />
          <ComboboxOption value="Grapes2" />
          <ComboboxOption value="Bananas2" />
          <ComboboxOption value="Pineapples2" />
          <ComboboxOption value="Apples3" />
          <ComboboxOption value="Oranges3" />
          <ComboboxOption value="Grapes3" />
          <ComboboxOption value="Bananas3" />
          <ComboboxOption value="Pineapples3" />
          <ComboboxOption value="Apples4" />
          <ComboboxOption value="Oranges4" />
          <ComboboxOption value="Grapes4" />
          <ComboboxOption value="Bananas4" />
          <ComboboxOption value="Pineapples4" />
        </ComboboxList>
      </Combobox>
    </Space>
  )
}
