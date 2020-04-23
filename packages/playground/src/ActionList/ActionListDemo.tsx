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

import React, { FC, useState } from 'react'
import {
  ActionList,
  ActionListColumns,
  ActionListItem,
  ActionListItemColumn,
  ActionListItemAction,
  ActionListManager,
  Box,
  Divider,
  Icon,
  Link,
} from '@looker/components'

const row1 = {
  disabled: false,
  error: undefined,
  lastSuccessfulBuild: '1-22-20 33:33:33',
  longPdtName: 'LR$B2DS91230SL_something_something_dark_side',
  model: 'model_uno',
  pdtName: 'my_great_pdt_name',
  persistanceType: 'datagroup_trigger',
  status: 'Success',
}

const data = [
  row1,
  {
    ...row1,
    error: {
      link: 'https://google.com',
      message: 'Build Error',
    },
    longPdtName: 'LR$A4YAL15807AQ2_something_something_evil',
    pdtName: 'my_other_great_pdt_name',
    status: 'Failed',
  },
  {
    ...row1,
    disabled: true,
    pdtName: 'my_other_great_pdt_name2',
  },
  {
    ...row1,
    disabled: true,
    pdtName: 'my_other_great_pdt_name3',
  },
]

const columns: ActionListColumns = [
  {
    id: 'pdt_name',
    primaryKey: true,
    title: 'PDT Name',
    type: 'string',
    widthPercent: 27,
  },
  {
    id: 'status',
    title: 'Status',
    type: 'string',
    widthPercent: 13,
  },
  {
    id: 'model',
    title: 'Model',
    type: 'string',
    widthPercent: 20,
  },
  {
    id: 'persistance_type',
    title: 'Persistance Type',
    type: 'string',
    widthPercent: 20,
  },
  {
    id: 'last_successful_build',
    title: 'Last Successful Build',
    type: 'string',
    widthPercent: 20,
  },
]

const MyActions = () => (
  <>
    <ActionListItemAction color="danger" onClick={() => alert(`Go to LookML!`)}>
      Go to LookML
    </ActionListItemAction>
    <ActionListItemAction onClick={() => alert(`PDT Details!`)}>
      PDT Details
    </ActionListItemAction>
    <ActionListItemAction onClick={() => alert('Recent Build Events!')}>
      Recent Build Events
    </ActionListItemAction>
    <ActionListItemAction onClick={() => alert('Recent Trigger Events!')}>
      Recent Trigger Events
    </ActionListItemAction>
  </>
)

export const ActionListDemo: FC = () => {
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

  const onSelectAll = () => {
    setSelections(selections.length ? [] : allSelectableItems)
  }

  const items = data.map(
    ({
      error,
      lastSuccessfulBuild,
      longPdtName,
      model,
      pdtName,
      persistanceType,
      status,
      disabled,
    }) => (
      <ActionListItem
        id={pdtName}
        disabled={disabled}
        key={pdtName}
        onClick={() => alert(`Row clicked`)}
        actions={<MyActions />}
      >
        <ActionListItemColumn detail={longPdtName}>
          {pdtName}
        </ActionListItemColumn>
        <ActionListItemColumn
          detail={
            error ? (
              <Link
                onClick={(event: React.MouseEvent<HTMLAnchorElement>) =>
                  event.stopPropagation()
                }
                href={error.link}
              >
                {error.message}
              </Link>
            ) : null
          }
          indicator={
            <Icon
              name={status === 'Success' ? 'CircleCheck' : 'CircleCancel'}
              color={
                status === 'Success' ? 'palette.green300' : 'palette.red300'
              }
              size={24}
            />
          }
        >
          {status}
        </ActionListItemColumn>
        <ActionListItemColumn>{model}</ActionListItemColumn>
        <ActionListItemColumn>{persistanceType}</ActionListItemColumn>
        <ActionListItemColumn>{lastSuccessfulBuild}</ActionListItemColumn>
      </ActionListItem>
    )
  )

  const [isLoading, setIsLoading] = useState(true)
  setTimeout(() => setIsLoading(false), 750)

  return (
    <Box m="xxxlarge">
      <ActionListManager isLoading={isLoading} noResults={false}>
        <ActionList
          canSelect
          onSelect={onSelect}
          onSelectAll={onSelectAll}
          itemsSelected={selections}
          allSelectableItems={allSelectableItems}
          columns={columns}
        >
          {items}
        </ActionList>
      </ActionListManager>

      <Divider my="large" />

      <ActionList
        canSelect
        onClickRowSelect
        onSelect={onSelect}
        onSelectAll={onSelectAll}
        itemsSelected={selections}
        allSelectableItems={allSelectableItems}
        columns={columns}
      >
        {items}
      </ActionList>
    </Box>
  )
}
