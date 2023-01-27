/*

 MIT License

 Copyright (c) 2022 Looker Data Sciences, Inc.

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

import React, { useState } from 'react'
import {
  Pagination,
  DataTable,
  DataTableItem,
  DataTableAction,
  DataTableCell,
  Flex,
  Box,
} from '../..'
import type { DataTableColumns } from '../../'

export default function WithDataTable() {
  const [currentPage, setCurrentPage] = useState(1)
  const cheesePerPage = 1
  const data = [
    {
      id: 1,
      name: 'Gouda',
    },
    {
      id: 2,
      name: 'Pepper Jack',
    },
    {
      id: 3,
      name: `Swiss`,
    },
    {
      id: 4,
      name: `Cheddar`,
    },
  ]
  const totalPages = data.length / cheesePerPage

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

  const items = data.map(({ id, name }, index) => {
    return (
      index + 1 === currentPage && (
        <DataTableItem
          key={id}
          id={`${id}`}
          onClick={() => alert(`Row clicked`)}
          actions={
            <DataTableAction onClick={() => alert(`${name} selected!`)}>
              Select Cheese
            </DataTableAction>
          }
        >
          <DataTableCell>{id}</DataTableCell>
          <DataTableCell>{name}</DataTableCell>
        </DataTableItem>
      )
    )
  })

  return (
    <Flex flexDirection="column" alignItems="center">
      <Box width="100%" mb="u3">
        <DataTable caption="Cheeses example" columns={columns}>
          {items}
        </DataTable>
      </Box>
      <Pagination
        current={currentPage}
        pages={totalPages}
        onChange={setCurrentPage}
      />
    </Flex>
  )
}
