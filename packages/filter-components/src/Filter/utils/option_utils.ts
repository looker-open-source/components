/*

 MIT License

 Copyright (c) 2022 Looker Data Sciences, Inc.

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
import { getComboboxText } from '@looker/components'
import type { Option } from '../types/option'

const createOption = (value: string): Option => ({
  value,
  label: value,
})

export const createOptions = (values?: string | string[]) => {
  if (!values) return []
  const valuesArray: any[] = !Array.isArray(values) ? [values] : values
  return valuesArray.map((value) => createOption(value))
}

/**
 * Creates an option from an enumeration's label and value.
 * For parameters we unescape the value since the filter expression value is
 * returned escaped from the backend.
 * If the enumeration value remains escaped the unescaped value will not match
 * and a new option will be added to the option list.
 *
 * https://cloud.google.com/looker/docs/reference/filter-expressions
 *
 * @param e Enumeration option
 */
export const createEnumeration =
  (isParameter = false) =>
  (e: Option): Option => ({
    label: e.label,
    value: isParameter ? unescapeParameterValue(e.value) : String(e.value),
  })

/**
 * Unescape parameter values to match the escape done in
 * ht_field_string.rb escape_non_advanced method
 */
const unescapeParameterValue = (value: string) =>
  String(value)
    .replace(/^\^([-])/, '$1')
    .replace(/\^([_%,"'])/g, '$1')

/**
 * Filters a list of options by a filter term and/or values to exclude
 *
 * @param options List of available options
 * @param filterTerm Matches case-insensitive anywhere in the option's label (or value if label is undefined)
 */
export const filterOptions = (
  options: Option[],
  filterTerm?: string,
  excludedValues?: string[]
) => {
  if (!excludedValues && (!filterTerm || filterTerm === '')) return options
  return options.filter((option) =>
    filterOption(option, filterTerm || '', excludedValues)
  )
}

const filterOption = (
  option: Option,
  filterTerm: string,
  excludedValues?: string[]
): boolean => {
  let matchesFilter = true

  if (filterTerm !== '') {
    const filterText = filterTerm.trim().toLowerCase()
    const optionText = getComboboxText(option).trim().toLowerCase()
    matchesFilter = optionText.indexOf(filterText) > -1
  }

  return excludedValues
    ? matchesFilter && !excludedValues.includes(option.value)
    : matchesFilter
}
