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
import { Icon, Space, Span } from '@looker/components'
import type { UserAttributeWithValue } from '@looker/filter-expressions'
import { Error } from '@styled-icons/material-outlined/Error'
import React from 'react'
import type { FilterProps } from '../Filter/types/filter_props'
import { useFiltersErrors } from './use_filters_errors'
import { ERROR_TYPE } from '../constants'

export interface FilterErrorMessageProps {
  filters: FilterProps[]
  userAttributes?: UserAttributeWithValue[]
  useLongMessageForm?: boolean
}

/*
 * Filter error messages
 * displayed under the filter token
 */
export const FilterErrorMessage = ({
  filters,
  userAttributes,
  useLongMessageForm,
}: FilterErrorMessageProps) => {
  const options = {
    userAttributes,
    useLongMessageForm,
  }
  const filterErrors = useFiltersErrors(filters, options)
  return filterErrors.type === ERROR_TYPE ? (
    <Space gap="u2" mt="xsmall">
      <Icon icon={<Error />} color="critical" size="xsmall" />
      <Span color="critical" fontSize="xsmall">
        {filterErrors.message}
      </Span>
    </Space>
  ) : null
}
