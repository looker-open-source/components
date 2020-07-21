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

import React, { useState } from 'react'
import {
  ActionList,
  ActionListManager,
  ActionListItemAction,
  ActionListColumns,
  doDefaultActionListSort,
  ActionListItem,
  ActionListItemColumn,
  ActionListData,
} from '@looker/components'
import { columns, data } from './data'
import { items } from './items'

export const All = () => (
  <>
    <Basic />
    <Manager />
    <Sortable />
  </>
)

export default {
  component: All,
  title: 'ActionList',
}

export const Basic = () => {
  const [selections, setSelections] = useState([] as string[])
  const onSelect = (selection: string) => {
    setSelections(
      selections.includes(selection)
        ? selections.filter((item) => item !== selection)
        : [...selections, selection]
    )
  }

  const allSelectableItems = data
    .map(({ disabled, pdtName }) => !disabled && pdtName)
    .filter((element) => element) as string[]

  const onSelectAll = () =>
    setSelections(selections.length ? [] : allSelectableItems)

  return (
    <ActionList
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

export const Manager = () => {
  const [selections, setSelections] = useState([] as string[])
  const onSelect = (selection: string) => {
    setSelections(
      selections.includes(selection)
        ? selections.filter((item) => item !== selection)
        : [...selections, selection]
    )
  }

  const allSelectableItems = data
    .map(({ disabled, pdtName }) => !disabled && pdtName)
    .filter((element) => element) as string[]

  const onSelectAll = () =>
    setSelections(selections.length ? [] : allSelectableItems)

  const [isLoading, setIsLoading] = useState(true)
  setTimeout(() => setIsLoading(false), 750)

  return (
    <ActionListManager isLoading={isLoading} noResults={false}>
      <ActionList
        canSelect
        onSelect={onSelect}
        onSelectAll={onSelectAll}
        itemsSelected={selections}
        columns={columns}
      >
        {items}
      </ActionList>
    </ActionListManager>
  )
}

export const Sortable = () => {
  const [data, setData] = useState<ActionListData>([
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
  ])

  const [columns, setColumns] = useState<ActionListColumns>([
    {
      canSort: true,
      id: 'id',
      primaryKey: true,
      sortDirection: 'asc',
      title: 'ID',
      type: 'number',
      widthPercent: 20,
    },
    {
      canSort: true,
      id: 'name',
      title: 'Name',
      type: 'string',
      widthPercent: 80,
    },
  ])

  const onSort = (id: string, sortDirection: 'asc' | 'desc') => {
    const {
      columns: sortedColumns,
      data: sortedData,
    } = doDefaultActionListSort(data, columns, id, sortDirection)
    setData(sortedData)
    setColumns(sortedColumns)
  }

  const items = data.map(({ id, name }) => {
    const actions = (
      <>
        <ActionListItemAction onClick={() => alert(`${name} selected!`)}>
          Select Cheese
        </ActionListItemAction>
      </>
    )

    return (
      <ActionListItem
        id={String(id)}
        key={id}
        onClick={() => alert('Row clicked')}
        actions={actions}
      >
        <ActionListItemColumn>{id}</ActionListItemColumn>
        <ActionListItemColumn>{name}</ActionListItemColumn>
      </ActionListItem>
    )
  })

  return (
    <ActionList onSort={onSort} columns={columns}>
      {items}
    </ActionList>
  )
}
