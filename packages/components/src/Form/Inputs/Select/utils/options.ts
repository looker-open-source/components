/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import type { ComboboxOptionObject } from '../../Combobox'
import { getComboboxText } from '../../Combobox'
import type {
  SelectOptionGroupProps,
  SelectOptionObject,
  SelectOptionProps,
} from '../types'

export function getMatchingOption(
  value?: string,
  options?: SelectOptionObject[]
) {
  return options?.find(option => option.value === value)
}

export function getOption(value?: string, options?: SelectOptionObject[]) {
  const matchingOption = getMatchingOption(value, options)
  const label = matchingOption?.label
  // If this is a filterable Select and the current option has been filtered out
  // leave label out, so that the matching against the option saved in ComboboxContext won't fail
  const labelProps = label ? { label } : {}
  return value !== undefined ? { ...labelProps, value } : undefined
}

export function getOptions(
  values?: string[],
  options?: SelectOptionObject[]
): SelectOptionObject[] | undefined {
  if (!values) return undefined
  return values.map(value => ({
    label: getComboboxText(value, options),
    value,
  }))
}

export function compareOption(option: { value: string }, value: string) {
  return getComboboxText(option).toLowerCase() === value.toLowerCase()
}

export function getFirstOption(
  options: SelectOptionProps[]
): SelectOptionObject {
  const optionAsGroup = options[0] as SelectOptionGroupProps
  if (optionAsGroup && optionAsGroup.options) return optionAsGroup.options[0]
  return options[0] as SelectOptionObject
}

// Is a value contained the specified options (logic to show the on-the-fly "Create" option)
export function notInOptions(
  currentOptions: ComboboxOptionObject[],
  options?: SelectOptionObject[],
  inputValue?: string
) {
  if (!inputValue) return false
  if (currentOptions.find(option => compareOption(option, inputValue))) {
    return false
  }
  if (!options) return true
  return options.find(option => compareOption(option, inputValue)) === undefined
}

const checkForIcon = (option: SelectOptionObject) => option.icon !== undefined

export const optionsHaveIcons = (options?: SelectOptionObject[]) => {
  if (!options || options.length === 0) return false
  return options.some(option => checkForIcon(option))
}
