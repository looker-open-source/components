/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import React from 'react'
import { DataTableItem, DataTableCell, DataTable, Truncate } from '../..'
import type { DataTableColumns } from '../../'

export default function Basic() {
  const columns: DataTableColumns = [
    {
      id: 'title',
      size: 50,
      title: 'Title',
      type: 'string',
    },
    {
      id: 'description',
      size: 50,
      title: 'Description',
      type: 'string',
    },
  ]

  return (
    <DataTable caption="Cheeses example" columns={columns}>
      <DataTableItem key="cheddar" id="cheddar">
        <DataTableCell>Cheddar</DataTableCell>
        <DataTableCell>
          <Truncate>
            Cheddar cheese is a relatively hard, off-white (or orange if
            colourings such as annatto are added), sometimes sharp-tasting,
            natural cheese. Originating in the English village of Cheddar in
            Somerset, cheeses of this style are now produced beyond the region
            and in several countries around the world.
          </Truncate>
        </DataTableCell>
      </DataTableItem>
      <DataTableItem key="parm" id="parm">
        <DataTableCell>Parmesan</DataTableCell>
        <DataTableCell>
          <Truncate>
            Parmigiano-Reggiano or Parmesan is an Italian hard, granular cheese
            that is produced from cow's milk and has aged 12–36 months. It is
            named after the producing areas, the provinces of Parma, Reggio
            Emilia, the part of Bologna west of the Reno, and Modena (all in
            Emilia-Romagna); and the part of Mantua (Lombardy) south of the Po.
            Parmigiano is the Italian adjective for Parma and Reggiano that for
            Reggio Emilia.
          </Truncate>
        </DataTableCell>
      </DataTableItem>
    </DataTable>
  )
}
