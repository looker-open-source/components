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

import styled from 'styled-components'
import React, { FC } from 'react'
import { InputFilters } from '../../Form/Inputs/InputFilters'
import { FilterConfig } from '../ActionList'
import { DividerVertical } from '../../Divider/DividerVertical'
import { ColumnSelector, ColumnSelectorProps } from './ColumnSelector'

export interface ActionListFiltersProps
  extends ColumnSelectorProps,
    Partial<FilterConfig> {
  canSelectDisplayedColumns?: boolean
  className?: string
}

const ActionListFiltersLayout: FC<ActionListFiltersProps> = ({
  canSelectDisplayedColumns = false,
  className,
  columns,
  filters,
  onChange,
  onFilter,
  columnsList,
}) => {
  return (
    <div className={className}>
      {filters && onFilter ? (
        <InputFilters filters={filters} onChange={onFilter} />
      ) : null}
      {canSelectDisplayedColumns && (
        <>
          <DividerVertical height="1.2rem" />
          <ColumnSelector
            columns={columns}
            onChange={onChange}
            columnsList={columnsList}
          />
        </>
      )}
    </div>
  )
}

export const ActionListFilters = styled(ActionListFiltersLayout)`
  border-bottom: solid 1px ${({ theme }) => theme.colors.ui2};
  border-top: solid 1px ${({ theme }) => theme.colors.ui2};
  display: flex;
  padding: auto;

  ${InputFilters} {
    border: none;
  }
`
