/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import type { Context } from 'react'
import { useContext } from 'react'
import type {
  ComboboxContextProps,
  ComboboxMultiContextProps,
} from '../ComboboxContext'
import type { ComboboxOptionStatuses } from '../types'
import type { ComboboxData, ComboboxMultiData } from './state'

export function useOptionStatus<
  CProps extends ComboboxContextProps | ComboboxMultiContextProps
>(context: Context<CProps>, value: string): ComboboxOptionStatuses {
  const { data } = useContext(context)
  const { navigationOption } = data
  const isActive = navigationOption ? navigationOption.value === value : false

  const contextOption = (data as ComboboxData).option
  const contextOptions = (data as ComboboxMultiData).options
  const options = contextOption ? [contextOption] : contextOptions || []
  const isSelected =
    options.find(option => option.value === value) !== undefined

  return {
    isActive,
    isSelected,
  }
}
