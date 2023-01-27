/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import React, { useContext } from 'react'
import { InputTextContent } from '../../Inputs/InputText'
import { ComboboxContext } from '../Combobox'
import type { SelectOptionObject } from './types'

export function getOptionIcon(value: string, options: SelectOptionObject[]) {
  if (value && options) {
    const option = options.find(opt => opt.value === value)
    return option?.icon ? (
      <InputTextContent pl="u2">{option.icon}</InputTextContent>
    ) : null
  }
  return null
}

export interface SelectInputIconProps {
  options?: SelectOptionObject[]
}

export const SelectInputIcon = ({ options }: SelectInputIconProps) => {
  const {
    data: { option, inputValue },
  } = useContext(ComboboxContext)
  if (!options || !option) return null
  // Don't show the icon if the user is filtering
  if (option.label !== inputValue) return null

  return getOptionIcon(option.value, options)
}
