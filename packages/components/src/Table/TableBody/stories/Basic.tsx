/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import React from 'react'
import { TableRow } from '../../TableRow'
import { TableBody } from '../../TableBody'
import { TableDataCell } from '../../TableDataCell'

export default function Basic() {
  return (
    <TableBody>
      <TableRow>
        <TableDataCell>Cell 1</TableDataCell>
        <TableDataCell>Cell 2</TableDataCell>
      </TableRow>
    </TableBody>
  )
}
