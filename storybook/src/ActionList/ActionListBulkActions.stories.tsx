/*

 MIT License

 Copyright (c) 2020 Looker Data Sciences, Inc.

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

import { ActionList, ActionListItemAction } from '@looker/components'
import React, { useState } from 'react'
import { columns, data } from './data'
import { items } from './items'

export default {
  title: 'ActionList',
}

export const BulkActions = () => {
  const [selections, setSelections] = useState<string[]>([])

  const allPageItems = data.map(({ pdtName }) => pdtName)

  const onSelect = (selection: string) => {
    // Note: In the event that selections includes the item being selected, we call filter on allPageItems.
    // This is to avoid the situation where you have non-displayed items selected but only some displayed items.
    // Doing the above will mean you have selected items that cannot be unselected (i.e. there's no way to interact with non-displayed items).
    setSelections(
      selections.includes(selection)
        ? allPageItems.filter((item) => item !== selection)
        : [...selections, selection]
    )
  }

  const onSelectAll = () => setSelections(selections.length ? [] : allPageItems)

  const onTotalSelectAll = () =>
    setSelections([
      ...allPageItems,
      'some_other_pdt_1',
      'some_other_pdt_2',
      'some_other_pdt_3',
      'some_other_pdt_3',
    ])

  const onTotalClearAll = () => setSelections([])

  const onBulkActionClick = () => {
    alert(`Performing a bulk action on these items: \n${selections}`)
  }

  const bulkActionsConfig = {
    actions: (
      <ActionListItemAction onClick={onBulkActionClick}>
        Some bulk action
      </ActionListItemAction>
    ),
    onTotalClearAll,
    onTotalSelectAll,
    pageCount: items.length,
    totalCount: 8,
  }

  return (
    <ActionList
      bulk={bulkActionsConfig}
      canSelect
      onClickRowSelect
      onSelect={onSelect}
      onSelectAll={onSelectAll}
      itemsSelected={selections}
      columns={columns}
      headerRowId="all-pdts"
    >
      {items}
    </ActionList>
  )
}
