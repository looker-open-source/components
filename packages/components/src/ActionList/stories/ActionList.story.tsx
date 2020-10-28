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
import React, { useMemo, useState } from 'react'
import { filters as defaultFilters } from '../../__mocks__/sampleInputFilters'
import { useActionListSelectManager } from '../utils/useActionListSelectManager'
import { FieldFilter } from '../../Form/Inputs/InputFilters'
import { Icon } from '../../Icon'
import { SpaceVertical } from '../../Layout/Space'
import { Heading, Paragraph } from '../../Text'
import { ActionListItemAction } from '../Item'
import { ActionList } from '../ActionList'
import { ActionListManagerProps, ActionListManager } from '../Manager'
import { columns, data } from './data'
import { items } from './items'

export * from './ActionListSortable'

export default {
  title: 'ActionList',
}

interface DemoProps extends ActionListManagerProps {
  isLoading?: boolean
  noResults?: boolean
  noResultsDisplay: boolean
  canBulk: boolean
  canCustomizeColumns: boolean
  canFilter: boolean
  canSelect: boolean
}

const Template: Story<DemoProps> = ({
  canBulk,
  canCustomizeColumns,
  canFilter,
  canSelect,
  noResultsDisplay,
  ...args
}) => {
  const allPageItems = data.map(({ name }) => name)

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

  const customResultsDisplay = noResultsDisplay && (
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

  const [filters, setFilters] = useState<FieldFilter[]>(defaultFilters)
  const filterActionsConfig = {
    filters,
    onFilter: setFilters,
  }

  const filteredItems = useMemo(() => {
    if (canFilter && filters.some((filter) => filter.value)) {
      return [items[0]]
    }
    return items
  }, [canFilter, filters])

  return (
    <SpaceVertical>
      <ActionListManager {...args} noResultsDisplay={customResultsDisplay}>
        <ActionList
          bulk={canBulk ? bulkActionsConfig : undefined}
          canCustomizeColumns={canCustomizeColumns}
          columns={columns}
          filterConfig={canFilter ? filterActionsConfig : undefined}
          headerRowId="all-pdts"
          select={canSelect ? selectConfig : undefined}
        >
          {filteredItems}
        </ActionList>
      </ActionListManager>
      {canFilter && (
        <Paragraph fontSize="small">
          Note: Demo filtering simply always returns the first row
        </Paragraph>
      )}
    </SpaceVertical>
  )
}

export const Primary = Template.bind({})
Primary.args = {
  canBulk: true,
  canCustomizeColumns: true,
  canFilter: true,
  canSelect: true,
  isLoading: false,
  noResults: false,
  noResultsDisplay: true,
}
