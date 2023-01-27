/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import React from 'react'
import {
  Table,
  TableHead,
  TableRow,
  TableHeaderCell,
  TableBody,
  TableDataCell,
} from '../../../../Table'
import { DateFormat } from '../DateFormat'

export const DateFormatTable = () => {
  return (
    <Table mb="large">
      <TableHead>
        <TableRow>
          <TableHeaderCell>FORMAT</TableHeaderCell>
          <TableHeaderCell>OUTPUT</TableHeaderCell>
        </TableRow>
      </TableHead>
      <TableBody>
        <TableRow>
          <TableDataCell>Short</TableDataCell>
          <TableDataCell>
            <DateFormat format="short" />
          </TableDataCell>
        </TableRow>
        <TableRow>
          <TableDataCell>Medium *</TableDataCell>
          <TableDataCell>
            <DateFormat />
          </TableDataCell>
        </TableRow>
        <TableRow>
          <TableDataCell>Long</TableDataCell>
          <TableDataCell>
            <DateFormat format="long" />
          </TableDataCell>
        </TableRow>
        <TableRow>
          <TableDataCell>Full</TableDataCell>
          <TableDataCell>
            <DateFormat format="full" />
          </TableDataCell>
        </TableRow>
      </TableBody>
    </Table>
  )
}
