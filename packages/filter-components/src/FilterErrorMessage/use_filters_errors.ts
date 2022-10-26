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

import some from 'lodash/some'
import type { ValidationMessageProps } from '@looker/components'
import type { UserAttributeWithValue } from '@looker/filter-expressions'
import {
  getExpressionType,
  getUserAttributeMatchingTypeAndExpression,
} from '@looker/filter-expressions'
import { useTranslation } from '../utils'
import type { FilterProps } from '../Filter/types/filter_props'
import { ERROR_TYPE } from '../constants'

/**
 * Options for computing and returning filters related errors.
 */
export interface FiltersErrorsOptions {
  userAttributes?: UserAttributeWithValue[]
  useLongMessageForm?: boolean
}

/*
 * Gets filter errors
 * Follows looker-components validation pattern
 * Currently has error states for:
 *  required filters
 *  user attribute filter having no value
 */
export const useFiltersErrors = (
  filters: FilterProps[],
  options: FiltersErrorsOptions = {
    userAttributes: [],
    useLongMessageForm: false,
  }
) => {
  const { t } = useTranslation('use_filters_errors')
  let result: ValidationMessageProps = {}

  some(filters, (filter) => {
    // Required filter error state (required filter is on and there is no filter value)
    if (filter.isRequired && !filter.expression) {
      result = {
        type: ERROR_TYPE,
        message: t('Selection required'),
      }
      // Error found, stop the loop
      return true
    }
    if (
      hasAtLeastOneMissingUserAttributeValue(filter, options?.userAttributes)
    ) {
      const message = options?.useLongMessageForm
        ? t('No value is set for your user attribute')
        : t('Invalid value')
      result = {
        type: ERROR_TYPE,
        message,
      }
      // Error found, stop the loop
      return true
    }
    // No error found, keep looping
    return false
  })
  return result
}

const hasAtLeastOneMissingUserAttributeValue = (
  filter: FilterProps,
  userAttributes?: UserAttributeWithValue[]
): boolean => {
  // For each filter, we check whether a user attribute is involved, and if it is,
  // if there is any found with no value, return an error
  const expressionType =
    filter.expressionType ||
    getExpressionType({ type: filter.type, field: filter.field || undefined })
  const attribute = getUserAttributeMatchingTypeAndExpression(
    expressionType,
    filter.expression,
    userAttributes
  )
  return !!attribute && !attribute.value
}
