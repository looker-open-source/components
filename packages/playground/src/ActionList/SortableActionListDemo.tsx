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
} from '@looker/components'

const data = [
  {
    id: 1,
    name: 'Lloyd Tabb',
  },
  {
    id: 2,
    name: 'Ben Porterfield',
  },
]

const columns: ActionListColumns = [
  {
    children: 'ID',
    id: 'id',
    primaryKey: true,
    type: 'string',
    widthPercent: 50,
  },
  {
    children: 'Name',
    id: 'name',
    type: 'string',
    widthPercent: 50,
  },
]

const MyActions = () => (
  <>
    <ActionListItemAction onClick={() => alert(`You performed an action!`)}>
      Some Action
    </ActionListItemAction>
  </>
)

export const SortableActionListDemo: FC = () => {
  const items = data.map(({ id, name }) => (
    <ActionListItem
      key={id}
      onClick={() => alert(`Row clicked`)}
      actions={<MyActions />}
    >
      <ActionListItemColumn>{id}</ActionListItemColumn>
      <ActionListItemColumn>{name}</ActionListItemColumn>
    </ActionListItem>
  ))

  return <ActionList columns={columns}>{items}</ActionList>
}
