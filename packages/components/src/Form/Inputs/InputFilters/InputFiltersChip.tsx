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
import React, { FC, forwardRef, Ref } from 'react'
import { Chip, ChipProps } from '../../../Chip'
import { FieldFilter } from './InputFilters'

interface InputFiltersChipProps
  extends Omit<ChipProps, 'children' | 'onDelete'> {
  filter: FieldFilter
  onDelete: (field: FieldFilter) => void
}

/* Replace comma not followed by white space with comma followed by space */
const defaultFormatValue = (value?: string) =>
  value ? value.replace(/(,(?=\S)|:)/, ', ') : undefined

export const InputFiltersChip: FC<InputFiltersChipProps> = forwardRef(
  ({ filter, onDelete, ...props }, ref: Ref<HTMLSpanElement>) => {
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
