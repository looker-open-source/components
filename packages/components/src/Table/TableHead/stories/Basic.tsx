/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import React from 'react'
import { TableHead } from '../../TableHead'
import { TableRow } from '../../TableRow'
import { TableHeaderCell } from '../../TableHeaderCell'

export default function Basic() {
  return (
    <TableHead>
      <TableRow>
        <TableHeaderCell>Column 1</TableHeaderCell>
        <TableHeaderCell>Column 2</TableHeaderCell>
        <TableHeaderCell>Column 3</TableHeaderCell>
      </TableRow>
    </TableHead>
  )
}
