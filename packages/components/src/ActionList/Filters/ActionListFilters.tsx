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
import { DividerVertical } from '../../Divider'
import { InputFilters } from '../../Form/Inputs/InputFilters'
import { FilterConfig } from '../ActionList'
import { ItemTarget } from '../Item/ItemTarget'
import { ColumnSelector, ColumnSelectorProps } from './ColumnSelector'

export interface ActionListFiltersProps
  extends ColumnSelectorProps,
    Partial<FilterConfig> {
  canSelectColumns?: boolean
  className?: string
}

const ActionListFiltersLayout: FC<ActionListFiltersProps> = ({
  canSelectColumns,
  className,
  filters,
  onFilter,
  ...columnSelectorProps
}) => (
  <div className={className}>
    {filters && onFilter && (
      <InputFilters filters={filters} onChange={onFilter} />
    )}
    {canSelectColumns && (
      <>
        <DividerVertical mx="none" stretch />
        <ItemTarget>
          <ColumnSelector {...columnSelectorProps} />
        </ItemTarget>
      </>
    )}
  </div>
)

export const ActionListFilters = styled(ActionListFiltersLayout)`
  align-items: flex-start;
  border-bottom: solid 1px ${({ theme }) => theme.colors.ui2};
  border-top: solid 1px ${({ theme }) => theme.colors.ui2};
  display: flex;

  ${InputFilters} {
    border: none;
  }
`
