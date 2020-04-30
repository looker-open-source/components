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

import { createContext } from 'react'
import { MixedBoolean } from '../Form'
import { ActionListColumns } from './ActionList'

export interface ActionListContextProps {
  addItemToAllItems: (id: string) => void
  allSelected?: MixedBoolean
  canSelect: boolean | { all: boolean }
  columns?: ActionListColumns
  itemsSelected: string[]
  onSort?: (id: string, sortDirection: 'asc' | 'desc') => void
  onSelect?: (id: string) => void
  onSelectAll?: () => void
  onClickRowSelect: boolean
}

export const ActionListContext = createContext<ActionListContextProps>({
  addItemToAllItems: (id: string) => {
    // Using noop; addItemToAllItems is passed from ActionList component into context
    // eslint-disable-next-line no-console
    console.log(id)
  },
  canSelect: false,
  itemsSelected: [],
  onClickRowSelect: false,
})
