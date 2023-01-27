/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import React from 'react'
import type { OptionIndicatorProps, ComboboxMultiProps } from '../..'
import { ComboboxMultiInput } from '../../ComboboxMultiInput'
import { ComboboxMultiOption } from '../../ComboboxMultiOption'
import { ComboboxMultiList } from '../../ComboboxList'
import { ComboboxMulti } from '..'

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

export default function CustomIndicator(props: ComboboxMultiProps) {
  const { width = 300, ...restProps } = props

  return (
    <ComboboxMulti width={width} {...restProps}>
      <ComboboxMultiInput
        onClear={() => alert('CLEAR')}
        placeholder="Custom indicator"
      />
      <ComboboxMultiList indicator={Indicator} persistSelection>
        <ComboboxMultiOption value="Apples" />
        <ComboboxMultiOption value="Oranges" />
        <ComboboxMultiOption value="Grapes" />
        <ComboboxMultiOption value="Bananas" />
        <ComboboxMultiOption value="Pineapples" />
      </ComboboxMultiList>
    </ComboboxMulti>
  )
}
