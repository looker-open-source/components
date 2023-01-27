/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import React from 'react'
import { DataTableAction, DataTableItem, DataTableCell, DataTable } from '../..'
import type { DataTableColumns } from '../../'

export default function Basic() {
  const data = [
    {
      id: 1,
      name: 'Gorgonzola',
    },
    {
      id: 2,
      name: 'Cheddar',
    },
    {
      id: 3,
      name: `Blue`,
    },
  ]

  const columns: DataTableColumns = [
    {
      id: 'id',
      title: 'ID',
      type: 'number',
    },
    {
      id: 'name',
      title: 'Name',
      type: 'string',
    },
  ]

  const items = data.map(({ id, name }) => {
    const actions = (
      <>
        <DataTableAction onClick={() => alert(`${name} selected!`)}>
          Select Cheese
        </DataTableAction>
      </>
    )

    return (
      <DataTableItem
        key={id}
        id={`${id}`}
        onClick={() => alert('Row clicked')}
        actions={actions}
      >
        <DataTableCell>{id}</DataTableCell>
        <DataTableCell>{name}</DataTableCell>
      </DataTableItem>
    )
  })

  return (
    <DataTable caption="Cheeses example" columns={columns}>
      {items}
    </DataTable>
  )
}
