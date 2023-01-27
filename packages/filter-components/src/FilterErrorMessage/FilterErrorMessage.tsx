/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
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
