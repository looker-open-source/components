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

import { DataTable } from './DataTable'
import { DataTableAction, DataTableItem } from './Item'
import { DataTableCell, DataTableColumns } from './Column'

export * from './DataTable'
export * from './Column'
export * from './Item'
export * from './utils'

export * from './Manager'

/**
 * Legacy exports
 * NOTE: These will be removed in the not-too-distant future
 */
export const ActionList = DataTable
export const ActionListItem = DataTableItem
export const ActionListItemAction = DataTableAction
export const ActionListItemColumn = DataTableCell

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface ActionListColumns extends DataTableColumns {}
