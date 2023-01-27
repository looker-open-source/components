/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import React, { useState } from 'react'
import type { ComboboxMultiProps } from '../..'
import { Paragraph, Button, SpaceVertical } from '../../../../../'
import { ComboboxMultiInput } from '../../ComboboxMultiInput'
import { ComboboxMultiOption } from '../../ComboboxMultiOption'
import { ComboboxMultiList } from '../../ComboboxList'
import { ComboboxMulti } from '..'

export default function ControlledInputValue(props: ComboboxMultiProps) {
  const {
    width = 300,
    values: valuesProp = [{ value: 'Apples' }],
    onChange: _onChange,
    ...restProps
  } = props

  const [inputValue, setInputValue] = useState('starting value')
  const [values, setValues] = useState(valuesProp)
  const handleClick = () => setInputValue('bananas')
  return (
    <SpaceVertical width={width} align="start">
      <Paragraph>Current inputValue: {inputValue}</Paragraph>
      <Button onClick={handleClick}>Change Input Value</Button>
      <ComboboxMulti values={values} onChange={setValues} {...restProps}>
        <ComboboxMultiInput
          autoComplete={false}
          inputValue={inputValue}
          onInputChange={setInputValue}
          freeInput
        />
        <ComboboxMultiList persistSelection>
          <ComboboxMultiOption value="Apples" />
          <ComboboxMultiOption value="Oranges" />
          <ComboboxMultiOption value="Grapes" />
          <ComboboxMultiOption value="Bananas" />
          <ComboboxMultiOption value="Pineapples" />
        </ComboboxMultiList>
      </ComboboxMulti>
    </SpaceVertical>
  )
}
