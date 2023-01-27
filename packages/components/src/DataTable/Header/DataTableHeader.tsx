/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import type { CompatibleHTMLProps } from '@looker/design-tokens'
import React, { useContext } from 'react'
import { useID } from '../../utils/useID'
import { DataTableRow } from '../Item/DataTableRow'
import { DataTableContext } from '../DataTableContext'
import { DataTableHeaderCell } from './DataTableHeaderCell'

export const DataTableHeader = ({
  id,
}: CompatibleHTMLProps<HTMLDivElement>) => {
  const { allSelected, columns, select } = useContext(DataTableContext)
  const hasCheckbox = !!select
  const onChange = () => (select ? select.onSelectAll() : undefined)

  const headerColumns =
    columns &&
    columns.map(({ id, ...column }) => (
      <DataTableHeaderCell {...column} columnId={id} key={id} />
    ))

  return (
    <DataTableRow
      checked={allSelected}
      id={useID(id)}
      isHeaderRow
      hasCheckbox={hasCheckbox}
      onChange={onChange}
    >
      {headerColumns}
    </DataTableRow>
  )
}
