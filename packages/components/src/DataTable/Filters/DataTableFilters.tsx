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

import styled from 'styled-components'
import React, { FC } from 'react'
import { densityTarget } from '@looker/design-tokens'
import { DividerVertical } from '../../Divider'
import { InputFilters } from '../../Form/Inputs/InputFilters'
import { FilterConfig } from '../types'
import { DataTableColumns } from '../Column'
import { ItemTarget } from '../Item/ItemTarget'
import { ColumnSelector, ColumnSelectorProps } from './ColumnSelector'

export interface DataTableFiltersProps
  extends ColumnSelectorProps,
    FilterConfig {
  className?: string
}

const hasSelectableColumns = (columns: DataTableColumns) =>
  Boolean(columns.find((c) => c.hide !== undefined))

const DataTableFiltersLayout: FC<DataTableFiltersProps> = ({
  className,
  filters,
  onFilter,
  ...props
}) => {
  const columnsSelector = (
    <>
      <DividerVertical mx="none" stretch />
      <ItemTarget>
        <ColumnSelector {...props} />
      </ItemTarget>
    </>
  )

  return (
    <div className={className}>
      <InputFilters filters={filters} onChange={onFilter} />
      {hasSelectableColumns(props.columns) && columnsSelector}
    </div>
  )
}

export const DataTableFilters = styled(DataTableFiltersLayout)`
  align-items: flex-start;
  border-bottom: solid 1px ${({ theme }) => theme.colors.ui2};
  border-top: solid 1px ${({ theme }) => theme.colors.ui2};
  display: flex;

  ${InputFilters} {
    border: none;
  }

  ${ItemTarget} {
    /* Reduce to compensate for outer borders */
    min-height: calc(${densityTarget} - 2px);
  }
`
