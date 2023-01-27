/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import React from 'react'
import type { OptionIndicatorProps, ComboboxProps } from '../..'
import { Combobox, ComboboxOption, ComboboxList } from '../..'
import { ComboboxInput } from '../../ComboboxInput'

const Indicator = ({ isActive, isSelected }: OptionIndicatorProps) => {
  let indicator

  if (isSelected) {
    indicator = '>>'
  } else if (isActive) {
    indicator = '>'
  } else {
    indicator = ''
  }
  return <>{indicator}</>
}

export default function CustomIndicator(props: ComboboxProps) {
  const { width = 300, ...restProps } = props

  return (
    <Combobox width={width} value={{ value: 'Grapes' }} {...restProps}>
      <ComboboxInput placeholder="Custom indicator" />
      <ComboboxList indicator={Indicator} persistSelection>
        <ComboboxOption value="Apples" />
        <ComboboxOption value="Oranges" />
        <ComboboxOption value="Grapes" />
        <ComboboxOption value="Bananas" />
        <ComboboxOption value="Pineapples" />
      </ComboboxList>
    </Combobox>
  )
}
