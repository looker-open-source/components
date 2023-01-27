/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import React from 'react'
import { Table } from '../Table'
import { TableHead } from '../TableHead'
import { TableRow } from '../TableRow'
import { TableHeaderCell } from '../TableHeaderCell'
import { TableBody } from '../TableBody'
import { TableDataCell } from '../TableDataCell'

export default function Basic() {
  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableHeaderCell>Column 1</TableHeaderCell>
          <TableHeaderCell>Column 2</TableHeaderCell>
          <TableHeaderCell>Column 3</TableHeaderCell>
        </TableRow>
      </TableHead>
      <TableBody>
        <TableRow>
          <TableDataCell>1</TableDataCell>
          <TableDataCell>2</TableDataCell>
          <TableDataCell>3</TableDataCell>
        </TableRow>
        <TableRow>
          <TableDataCell>1</TableDataCell>
          <TableDataCell>2</TableDataCell>
          <TableDataCell>3</TableDataCell>
        </TableRow>
        <TableRow>
          <TableDataCell>1</TableDataCell>
          <TableDataCell>2</TableDataCell>
          <TableDataCell>3</TableDataCell>
        </TableRow>
      </TableBody>
    </Table>
  )
}
