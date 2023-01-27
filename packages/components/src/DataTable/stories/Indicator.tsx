/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import React from 'react'
import * as MaterialIcons from '@styled-icons/material'
import { DataTableItem, DataTableCell, DataTable, Link, Icon } from '../..'
import type { DataTableColumns } from '../../'

export default function Indicator() {
  const link = (
    <Link
      onClick={event => event.stopPropagation()}
      href="https://en.wikipedia.org/wiki/Cheddar_cheese"
    >
      Wikipedia
    </Link>
  )

  const indicator = (
    <Icon
      icon={<MaterialIcons.Person />}
      color="key"
      size={24}
      marginRight="small"
    />
  )

  const columns: DataTableColumns = [
    {
      id: 'name',
      title: 'Name',
      type: 'string',
    },
  ]

  return (
    <DataTable caption="Cheeses example" columns={columns}>
      <DataTableItem id={'cheddar'} onClick={() => alert(`Row clicked`)}>
        <DataTableCell description={link} indicator={indicator}>
          Cheddar
        </DataTableCell>
      </DataTableItem>
    </DataTable>
  )
}
