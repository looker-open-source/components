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
import React from 'react'
import noop from 'lodash/noop'
import {
  ActionList,
  ActionListProps,
  BulkActionsConfig,
  FilterConfig,
  SelectConfig,
} from '../ActionList'
import { ActionListItemAction } from '../Item'
import { useActionListSelectManager } from '../utils/useActionListSelectManager'
import { filters as defaultFilters } from '../../__mocks__/filters'
import { columns as mockColumns } from '../../__mocks__/DataTable/columns'
import { data } from '../../__mocks__/DataTable/data'
import { items } from './items'

interface DemoProps extends Omit<ActionListProps, 'bulk' | 'select'> {
  bulk: boolean
  filters: boolean
  select: boolean
  selectedItems?: string[]
}

// const [fieldFilters, setFieldFilters] = useState<FieldFilter[]>(
//   defaultFilters
// )
const filterConfig: FilterConfig = {
  filters: defaultFilters,
  onFilter: () => noop,
}

const Template: Story<DemoProps> = ({
  bulk,
  // filters,
  select,
  selectedItems,
  // canCustomizeColumns,
  // canFilter,
  // canSelect,
  // noResultsDisplay,
  // firstColumnStuck,
  ...args
}) => {
  const allPageItems = data.map(({ id }) => id)

  const {
    onSelect,
    onSelectAll,
    selections,
    setSelections,
  } = useActionListSelectManager(allPageItems, selectedItems)

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
      <ActionListItemAction onClick={onBulkActionClick}>
        Some bulk action
      </ActionListItemAction>
    ),
    onTotalClearAll,
    onTotalSelectAll,
    pageCount: items.length,
    totalCount: 8,
  }

  // const filteredItems = useMemo(() => {
  //   if (filters && fieldFilters.some((filter) => filter.value)) {
  //     return [items[0]]
  //   }
  //   return items
  // }, [filters, fieldFilters])

  return (
    <ActionList
      bulk={bulk ? bulkActionsConfig : undefined}
      select={select ? selectConfig : undefined}
      {...args}
    >
      {items}
    </ActionList>
  )
}

export const Basic = Template.bind({})
Basic.args = {
  columns: mockColumns,
  headerRowId: 'headerId',
}

const noHiddenColumns = mockColumns.map((c) => {
  return { ...c, hide: undefined }
})
export const Filters = Template.bind({})
Filters.args = {
  ...Basic.args,
  columns: noHiddenColumns,
  filterConfig,
}

export const FiltersAndColumnSelector = Template.bind({})
FiltersAndColumnSelector.args = {
  ...Filters.args,
  columns: mockColumns,
}

export const Select = Template.bind({})
Select.args = {
  columns: mockColumns,
  select: true,
}

export const SelectAndFilters = Template.bind({})
SelectAndFilters.args = {
  ...Filters.args,
  columns: mockColumns,
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
