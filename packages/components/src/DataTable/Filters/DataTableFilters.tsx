/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import styled from 'styled-components'
import type { ReactElement } from 'react'
import React from 'react'
import { densityTarget } from '@looker/design-tokens'
import { DividerVertical } from '../../Divider'
import type { InputFiltersProps } from '../../Form/Inputs/InputFilters'
import { InputFilters } from '../../Form/Inputs/InputFilters'
import type { DataTableColumns } from '../Column'
import { ItemTarget } from '../Item/ItemTarget'
import type { ColumnSelectorProps } from './ColumnSelector'
import { ColumnSelector } from './ColumnSelector'

export interface DataTableFiltersProps extends ColumnSelectorProps {
  className?: string
  children: ReactElement<InputFiltersProps>
}

const hasSelectableColumns = (columns: DataTableColumns) =>
  Boolean(columns.find(c => c.hide !== undefined))

const DataTableFiltersLayout = ({
  className,
  children,
  ...props
}: DataTableFiltersProps) => {
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
      {children}
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
