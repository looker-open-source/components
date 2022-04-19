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
import { useDebounce } from 'use-debounce'
import { useEffect, useMemo, useRef, useState } from 'react'
import { useTranslation } from '../../utils'
import type { Option } from '../types/option'
import { createOptions, filterOptions } from './option_utils'
const useExtendedOptions = (
  options: Option[],
  values: string[],
  filterTerm: string,
  limit: number,
  excludeValues?: boolean
) => {
  return useMemo(() => {
    // The back-end only returns 999 suggestions
    // If we hit that, the selected values may not be reflected in the list
    // but we want them to be unless excludeValues is true
    const needToAppendValues =
      !excludeValues &&
      filterTerm === '' &&
      values.length > 0 &&
      options.length >= limit

    const valueInOptions = (value: string) =>
      options.find((option: Option) => option.value === value)

    const reducer = (acc: string[], value: string) => {
      if (!valueInOptions(value)) {
        acc.push(value)
      }
      return acc
    }

    const valuesToAppend = needToAppendValues ? values.reduce(reducer, []) : []

    return [...options, ...createOptions(valuesToAppend)]
  }, [options, values, filterTerm, limit, excludeValues])
}

/**
 * Adds a debounce to the filter term / onInputChange call
 *
 * @param onInputChange Callback to receive debounced filter term
 */
export const useDebouncedFilterTerm = (
  onInputChange?: (value: string) => void
) => {
  const { t } = useTranslation('use_option_filtering')

  const [filterTerm, setFilterTerm] = useState('')
  const [debouncedFilterTerm] = useDebounce(filterTerm, 150, { leading: true })

  const isFirstRender = useRef(true)
  useEffect(() => {
    if (!isFirstRender.current) {
      // No need to call on initial render since
      // suggestions should be pre-fetched for any filter that uses them
      onInputChange?.(debouncedFilterTerm.trim())
    }
    isFirstRender.current = false
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedFilterTerm])

  const noOptionsLabel =
    filterTerm === ''
      ? t('No values')
      : `${t('No values match')} "${debouncedFilterTerm}"`

  return {
    debouncedFilterTerm,
    noOptionsLabel,
    onFilter: setFilterTerm,
  }
}

export interface UseOptionFilteringProps {
  /**
   * Whether to remove the selected value(s) from the filtered options
   */
  excludeValues?: boolean
  /**
   * If there are more initial options than this number, instead of filtering
   * options on the front end, the API will be hit every keystroke and
   * filtering will occur in the backend.
   * @default 999
   */
  limit?: number
  /**
   * Callback to receive debounced filter term
   */
  onInputChange?: (value: string) => void
  /**
   * List of available options
   */
  options: Option[]
  /**
   * Currently selected value(s)
   */
  value: string | string[]
}

/**
 * Adds a debounce to the filter term / onInputChange call
 */
export const useOptionFiltering = ({
  excludeValues,
  limit = 999,
  onInputChange,
  options,
  value,
}: UseOptionFilteringProps) => {
  let values: string[]
  if (typeof value === 'string') {
    if (value === '') {
      values = []
    } else {
      values = [value]
    }
  } else {
    values = value
  }
  const { debouncedFilterTerm, ...rest } = useDebouncedFilterTerm(onInputChange)

  const extendedOptions = useExtendedOptions(
    options,
    values,
    debouncedFilterTerm,
    limit,
    excludeValues
  )

  const filteredOptions = useMemo(() => {
    // If filtering on backend, filter term will be empty but we still need to filter out current values
    return filterOptions(
      extendedOptions,
      debouncedFilterTerm,
      excludeValues ? values : []
    )
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [extendedOptions, debouncedFilterTerm, values])

  return {
    filteredOptions,
    debouncedFilterTerm,
    ...rest,
  }
}
