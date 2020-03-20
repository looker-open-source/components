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

import React, { FC } from 'react'
import {
  ActionList,
  ActionListColumns,
  ActionListItem,
  ActionListItemColumn,
  ActionListItemAction,
  Icon,
  Link,
} from '@looker/components'

const data = [
  {
    error: undefined,
    lastSuccessfulBuild: '1-22-20 33:33:33',
    longPdtName: 'LR$B2DS91230SL_something_something_dark_side',
    model: 'model_uno',
    pdtName: 'my_great_pdt_name',
    persistanceType: 'datagroup_trigger',
    status: 'Success',
  },
  {
    error: {
      link: 'https://google.com',
      message: 'Build Error',
    },
    lastSuccessfulBuild: '1-22-20 33:33:33',
    longPdtName: 'LR$A4YAL15807AQ2_something_something_evil',
    model: 'model_uno',
    pdtName: 'my_other_great_pdt_name',
    persistanceType: 'datagroup_trigger',
    status: 'Failed',
  },
]

const columns: ActionListColumns = [
  {
    children: 'PDT Name',
    id: 'pdt_name',
    primaryKey: true,
    type: 'string',
    widthPercent: 27,
  },
  {
    children: 'Status',
    id: 'status',
    type: 'string',
    widthPercent: 13,
  },
  {
    children: 'Model',
    id: 'model',
    type: 'string',
    widthPercent: 20,
  },
  {
    children: 'Persistance Type',
    id: 'persistance_type',
    type: 'string',
    widthPercent: 20,
  },
  {
    children: 'Last Successful Build',
    id: 'last_successful_build',
    type: 'string',
    widthPercent: 20,
  },
]

const MyActions = () => (
  <>
    <ActionListItemAction onClick={() => alert(`Go to LookML!`)}>
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
  const items = data.map(
    ({
      error,
      lastSuccessfulBuild,
      longPdtName,
      model,
      pdtName,
      persistanceType,
      status,
    }) => (
      <ActionListItem
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
              name={status === 'Success' ? 'ArrowUp' : 'ArrowDown'}
              color={
                status === 'Success' ? 'palette.green300' : 'palette.red300'
              }
              mr="small"
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

  return (
    <ActionList header={<p>foobar</p>} columns={columns}>
      {items}
    </ActionList>
  )
}
