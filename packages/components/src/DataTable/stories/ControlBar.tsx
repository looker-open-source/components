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
  DataTableAction,
  DataTableItem,
  DataTableCell,
  DataTable,
  Flex,
  Box,
  Pagination,
  useSelectManager,
} from '../..'
import type { DataTableColumns } from '../../'

export default function ControlBar() {
  const data = [
    { id: 1, name: 'Gorgonzola' },
    { id: 2, name: 'Cheddar' },
    { id: 3, name: `Blue` },
    { id: 4, name: 'American' },
    { id: 5, name: 'Cheddar' },
    { id: 6, name: 'Pepper Jack' },
  ]

  const columns: DataTableColumns = [
    {
      id: 'id',
      size: 20,
      title: 'ID',
      type: 'number',
    },
    {
      id: 'name',
      size: 80,
      title: 'Name',
      type: 'string',
    },
  ]

  const [page, setPage] = useState(1)
  const perPageCount = 3

  // The logic for which items are being displayed on which page will vary
  const pageItemData = data.filter(
    ({ id }) => id > (page - 1) * perPageCount && id <= page * perPageCount
  )
  const pageItemIds = pageItemData.map(({ id }) => String(id))
  const pageItems = pageItemData.map(({ id, name }) => (
    <DataTableItem
      id={String(id)}
      key={id}
      onClick={() => alert(`${name} clicked`)}
      actions={
        <>
          <DataTableAction onClick={() => alert(`${name} deleted`)}>
            Delete
          </DataTableAction>
        </>
      }
    >
      <DataTableCell>{id}</DataTableCell>
      <DataTableCell>{name}</DataTableCell>
    </DataTableItem>
  ))

  const { onSelect, onSelectAll, selections, setSelections } =
    useSelectManager(pageItemIds)

  const allItems = [...data].map(({ id }) => String(id))
  const onTotalSelectAll = () => setSelections(allItems)
  const onTotalClearAll = () => setSelections([])

  const bulkActionsConfig = {
    actions: (
      <DataTableAction onClick={() => alert(`Selected Items: ${selections}`)}>
        View Selected Item IDs
      </DataTableAction>
    ),
    onTotalClearAll,
    onTotalSelectAll,
    pageCount: pageItems.length,
    totalCount: allItems.length,
  }

  return (
    <Flex flexDirection="column" alignItems="center">
      <Box width="100%" mb="u3">
        <DataTable
          bulk={bulkActionsConfig}
          caption="Cheeses example"
          select={{
            onSelect,
            onSelectAll,
            pageItems: pageItemIds,
            selectedItems: selections,
          }}
          columns={columns}
        >
          {pageItems}
        </DataTable>
      </Box>
      <Pagination
        current={page}
        pages={data.length / perPageCount}
        onChange={nextPage => {
          setSelections([])
          setPage(nextPage)
        }}
      />
    </Flex>
  )
}
