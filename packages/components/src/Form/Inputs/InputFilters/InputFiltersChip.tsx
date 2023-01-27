/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import type { Ref } from 'react'
import React, { forwardRef } from 'react'
import type { ChipProps } from '../../../Chip'
import { Chip } from '../../../Chip'
import type { FieldFilter } from './types'

interface InputFiltersChipProps
  extends Omit<ChipProps, 'children' | 'onDelete'> {
  filter: FieldFilter
  onDelete: (field: FieldFilter) => void
}

/* Replace comma not followed by white space with comma followed by space */
const defaultFormatValue = (value?: string) =>
  value ? value.replace(/(,(?=\S)|:)/, ', ') : undefined

export const InputFiltersChip = forwardRef(
  (
    { filter, onDelete, ...props }: InputFiltersChipProps,
    ref: Ref<HTMLSpanElement>
  ) => {
    const handleDelete = () => onDelete(filter)
    return (
      <Chip onDelete={handleDelete} prefix={filter.field} ref={ref} {...props}>
        {filter.formatValue && filter.value
          ? filter.formatValue(filter.value)
          : defaultFormatValue(filter.value)}
      </Chip>
    )
  }
)

InputFiltersChip.displayName = 'InputFiltersChip'
