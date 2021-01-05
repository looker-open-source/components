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

import { Story } from '@storybook/react/types-6-0'
import React, { useState } from 'react'
import {
  DataTable,
  DataTableProps,
  BulkActionsConfig,
  FilterConfig,
  SelectConfig,
} from '../'
import { DataTableAction } from '../Item'
import { useSelectManager, doDataTableSort } from '../utils'
import { filters as defaultFilters } from '../../__mocks__/filters'
import { columns as mockColumns } from '../../__mocks__/DataTable/columns'
import { data } from '../../__mocks__/DataTable/data'
import { DataTableColumns } from '../Column'
import {
  actions,
  itemBuilder,
  itemsActionsActionPrimary,
  itemsActionPrimary,
} from './items'

interface DemoProps extends Omit<DataTableProps, 'bulk' | 'select'> {
  bulk: boolean
  columns: DataTableColumns
  filters: boolean
  select: boolean
  sort: boolean
  selectedItems?: string[]
}

const Template: Story<DemoProps> = ({
  bulk,
  columns,
  filters,
  select,
  selectedItems,
  sort,
  ...args
}) => {
  /**
   * Sorting on a DataTable story alters the shared column objects
   * and deep-copying the column objects prevents states where
   * sortDirection from a previous story persists on the new story
   */
  const cleanColumns = columns.map((c) => ({ ...c }))

  const allPageItems = data.map(({ id }) => id)
  const [cheeseData, setCheeseData] = useState(data)
  const [cheeseColumns, setCheeseColumns] = useState(cleanColumns)
  const items = itemBuilder(cheeseData, actions)

  const onSort = (id: string, sortDirection: 'asc' | 'desc') => {
    const { columns: sortedColumns, data: sortedData } = doDataTableSort(
      cheeseData,
      cheeseColumns,
      id,
      sortDirection
    )
    setCheeseData(sortedData)
    setCheeseColumns(sortedColumns)
  }

  const { onSelect, onSelectAll, selections, setSelections } = useSelectManager(
    allPageItems,
    selectedItems
  )

  const [listFilters, setListFilters] = useState(defaultFilters)

  const filterConfig: FilterConfig = {
    filters: listFilters,
    onFilter: (filters) => setListFilters(filters),
  }

  const onTotalSelectAll = () =>
    setSelections([
      ...allPageItems,
      'roquefort',
      'mozzarella',
      'ricotta',
      'feta',
    ])

  const onTotalClearAll = () => setSelections([])

  const onBulkActionClick = () => {
    alert(`Performing a bulk action on these items: \n${selections.join(', ')}`)
  }

  const selectConfig: SelectConfig = {
    onClickRowSelect: true,
    onSelect,
    onSelectAll,
    pageItems: allPageItems,
    selectedItems: selections,
  }

  const bulkActionsConfig: BulkActionsConfig = {
    actions: (
      <DataTableAction onClick={onBulkActionClick}>
        Some bulk action
      </DataTableAction>
    ),
    onTotalClearAll,
    onTotalSelectAll,
    pageCount: items.length,
    totalCount: 8,
  }

  return (
    <DataTable
      bulk={bulk ? bulkActionsConfig : undefined}
      columns={cheeseColumns}
      filterConfig={filters ? filterConfig : undefined}
      select={select ? selectConfig : undefined}
      onSort={sort ? onSort : undefined}
      {...args}
    >
      {items}
    </DataTable>
  )
}

const TemplateAction: Story<DataTableProps> = ({ ...args }) => {
  return <DataTable {...args} />
}

export const Basic = Template.bind({})
Basic.args = {
  columns: mockColumns,
  headerRowId: 'headerId',
  sort: true,
}

export const Filters = Template.bind({})
Filters.args = {
  ...Basic.args,
  filters: true,
}

const noHiddenColumns = mockColumns.map((c) => {
  return { ...c, hide: undefined }
})
export const FilterNoColumnSelector = Template.bind({})
FilterNoColumnSelector.args = {
  ...Filters.args,
  columns: noHiddenColumns,
}

export const Select = Template.bind({})
Select.args = {
  ...Basic.args,
  select: true,
}

export const SelectActiveItems = Template.bind({})
SelectActiveItems.args = {
  ...Select.args,
  selectedItems: ['cheddar', 'gouda'],
}

export const SelectBulkActiveItems = Template.bind({})
SelectBulkActiveItems.args = {
  ...Select.args,
  bulk: true,
  selectedItems: ['cheddar', 'gouda'],
}

export const ActionsAndPrimaryAction = TemplateAction.bind({})
ActionsAndPrimaryAction.args = {
  children: itemsActionsActionPrimary,
  columns: mockColumns,
}

export const PrimaryAction = TemplateAction.bind({})
PrimaryAction.args = {
  children: itemsActionPrimary,
  columns: mockColumns,
}
