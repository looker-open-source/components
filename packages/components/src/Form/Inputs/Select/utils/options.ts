/*

 MIT License

 Copyright (c) 2020 Looker Data Sciences, Inc.

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

import { ComboboxOptionObject, getComboboxText } from '../../Combobox'
import {
  SelectOptionGroupProps,
  SelectOptionObject,
  SelectOptionProps,
} from '../SelectOptions'

export function flattenOptions(options: SelectOptionProps[]) {
  return options.reduce(
    (acc: SelectOptionObject[], option: SelectOptionProps) => {
      const optionAsGroup = option as SelectOptionGroupProps
      if (optionAsGroup.title) {
        return [...acc, ...optionAsGroup.options]
      }
      return [...acc, option as SelectOptionObject]
    },
    []
  )
}

export function getOption(value?: string, options?: SelectOptionProps[]) {
  const flattenedOptions = options && flattenOptions(options)
  return value
    ? { label: getComboboxText(value, flattenedOptions), value }
    : undefined
}

export function getOptions(
  values?: string[],
  options?: SelectOptionProps[]
): SelectOptionObject[] | undefined {
  if (!values) return undefined
  const flattenedOptions = options && flattenOptions(options)
  return values.map((value) => ({
    label: getComboboxText(value, flattenedOptions),
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
  if (optionAsGroup && optionAsGroup.title) return optionAsGroup.options[0]
  return options[0] as SelectOptionObject
}

// Is a value contained the specified options (logic to show the on-the-fly "Create" option)
export function notInOptions(
  currentOptions: ComboboxOptionObject[],
  options?: SelectOptionProps[],
  inputValue?: string
) {
  if (!inputValue) return false
  if (currentOptions.find((option) => compareOption(option, inputValue))) {
    return false
  }
  if (!options) return true
  return (
    flattenOptions(options).find((option) =>
      compareOption(option, inputValue)
    ) === undefined
  )
}
