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
import { DataTableAction, DataTableItem, DataTableCell, DataTable } from '../..'
import type { DataTableColumns } from '../../'

export default function SelectRow() {
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

  const [selections, setSelections] = useState<string[]>([])
  const onSelect = (selection: string) => {
    setSelections(
      selections.includes(selection)
        ? selections.filter(item => item !== selection)
        : [...selections, selection]
    )
  }

  const allSelectableItems = data.map(({ id }) => String(id))

  const onSelectAll = () => {
    setSelections(selections.length ? [] : allSelectableItems)
  }

  const items = data.map(({ id, name }) => (
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

  return (
    <>
      <DataTable
        caption="Cheeses example"
        columns={columns}
        select={{
          onSelect,
          onSelectAll,
          pageItems: allSelectableItems,
          selectedItems: selections,
        }}
      >
        {items}
      </DataTable>
    </>
  )
}
