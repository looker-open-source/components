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
  ActionListColumns,
  ActionListDatum,
  ActionListItemAction,
  useActionListSortManager,
} from '@looker/components'

export const SortableActionListDemo: FC = () => {
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

  // Note: column objects must be tracked using state since their sortDirection properties will change
  // depending on which column is sorted
  const columns: ActionListColumns = [
    {
      canSort: true,
      children: 'ID',
      id: 'id',
      primaryKey: true,
      type: 'number',
      widthPercent: 20,
    },
    {
      canSort: true,
      children: 'Name',
      id: 'name',
      type: 'string',
      widthPercent: 80,
    },
  ]

  const generateActions = (item: ActionListDatum) => {
    return (
      <>
        <ActionListItemAction onClick={() => alert(item.id)}>
          Check id
        </ActionListItemAction>
        <ActionListItemAction onClick={() => alert(item.name)}>
          Check name
        </ActionListItemAction>
      </>
    )
  }

  return useActionListSortManager(data, columns, generateActions)
}
