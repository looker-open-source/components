/*

 MIT License

 Copyright (c) 2021 Looker Data Sciences, Inc.

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in all
 copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 SOFTWARE.

 */

import {
  ComboboxOptionObject,
  isComboboxOptionObject,
  getComboboxText,
} from '../../Combobox'
import {
  FlatOption,
  SelectOptionGroupProps,
  SelectOptionObject,
  SelectOptionProps,
} from '../types'

export const getMatchingOption = (
  value?: string,
  flatOptions?: FlatOption[]
) => {
  if (value === undefined) return undefined
  const matchingOption = flatOptions?.find((option) => option.value === value)
  return matchingOption as SelectOptionObject
}

export function getOption(value?: string, flatOptions?: FlatOption[]) {
  const matchingOption = getMatchingOption(value, flatOptions)
  const label = matchingOption?.label
  // If this is a filterable Select and the current option has been filtered out
  // leave label out, so that the matching against the option saved in ComboboxContext won't fail
  const labelProps = label ? { label } : {}
  return value !== undefined ? { ...labelProps, value } : undefined
}

export const getOptions = (
  values?: string[],
  flatOptions?: FlatOption[]
): SelectOptionObject[] | undefined => {
  if (!values) return undefined
  return values.map((value) => ({
    label: getComboboxText(value, flatOptions),
    value,
  }))
}

export const compareOption = (option: FlatOption, value: string) => {
  if (isComboboxOptionObject(option)) {
    return getComboboxText(option).toLowerCase() === value.toLowerCase()
  }
  return false
}

export const getFirstOption = (
  options: SelectOptionProps[]
): SelectOptionObject => {
  const optionAsGroup = options[0] as SelectOptionGroupProps
  if (optionAsGroup && optionAsGroup.options) return optionAsGroup.options[0]
  return options[0] as SelectOptionObject
}

// Is a value contained the specified options (logic to show the on-the-fly "Create" option)
export const notInOptions = (
  currentOptions: ComboboxOptionObject[],
  flatOptions?: FlatOption[],
  inputValue?: string
) => {
  if (!inputValue) return false
  if (currentOptions.find((option) => compareOption(option, inputValue))) {
    return false
  }
  if (!flatOptions) return true
  return (
    flatOptions.find((option) => compareOption(option, inputValue)) ===
    undefined
  )
}

const checkForIcon = (option: FlatOption) => option.icon !== undefined

export const optionsHaveIcons = (options?: FlatOption[]) => {
  if (!options || options.length === 0) return false
  return options.some((option) => {
    const optionAsGroup = option as SelectOptionGroupProps
    if (optionAsGroup.options) {
      return optionAsGroup.options.some(checkForIcon)
    } else {
      return checkForIcon(option)
    }
  })
}
