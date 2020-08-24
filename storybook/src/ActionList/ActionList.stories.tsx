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

import {
  ActionList,
  ActionListItemAction,
  ActionListFilter,
  ActionListManager,
  Icon,
  Heading,
  SpaceVertical,
  useActionListSelectManager,
} from '@looker/components'
import { withKnobs, boolean } from '@storybook/addon-knobs'
import React from 'react'
import { columns, data, filterableColumns } from './data'
import { items } from './items'

export { Sortable } from './ActionListSortable.stories'

export default {
  decorators: [withKnobs],
  title: 'ActionList',
}

export const ActionListExample = () => {
  const allPageItems = data.map(({ pdtName }) => pdtName)

  const {
    onSelect,
    onSelectAll,
    selections,
    setSelections,
  } = useActionListSelectManager(allPageItems)

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
    alert(`Performing a bulk action on these items: \n${selections.join(', ')}`)
  }

  const noResultsDisplay = boolean('Custom "noResultsDisplay"', true) && (
    <SpaceVertical align="center">
      <Icon size="xlarge" name="Beaker" color="key" />
      <Heading>The mad scientists have nothing for you...</Heading>
    </SpaceVertical>
  )

  const selectConfig = {
    onClickRowSelect: true,
    onSelect,
    onSelectAll,
    pageItems: allPageItems,
    selectedItems: selections,
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
    <ActionListManager
      isLoading={boolean('isLoading', false)}
      noResults={boolean('noResults', false)}
      noResultsDisplay={noResultsDisplay}
    >
      <ActionList
        select={boolean('Select Items', true) ? selectConfig : undefined}
        bulk={boolean('Bulk Actions', true) ? bulkActionsConfig : undefined}
        columns={columns}
        headerRowId="all-pdts"
      >
        {items}
      </ActionList>
    </ActionListManager>
  )
}

export const ActionListFilterExample = () => (
  <>
    <ActionListFilter filterableColumns={filterableColumns} />
    <ActionList columns={columns}>{items}</ActionList>
  </>
)
