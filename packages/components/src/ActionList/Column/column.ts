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

import { ReactNode } from 'react'
import { ColumnSize } from './columnSize'

export interface ColumnProps {
  title: ReactNode
  /**
   * A unique identifier for a given column
   * Note: A column object's id should match a key in your data object template
   */
  id: string
  /**
   * In some locales, we may change horizontal alignment of 'number'
   * @default 'string'
   */
  type?: 'string' | 'number'
  /**
   * Specify a size to have the column consume a fixed width.
   *
   * For content that is not expected to wrap `auto` is often the best choice as the column
   * will only consume the horizontal room needed to contain its content.
   *
   * `auto` columns will use browser-native table column behavior.
   * `small`, `medium`, & `large` are the predefined sizes and will truncate
   * `nowrap` - column will not truncate and content will not wrap. Use with caution.
   *
   * @default `auto`
   */
  size?: ColumnSize
  /**
   * Determines whether a column is sortable (i.e. whether a column's header can be clicked to perform a sort)
   * Note: You must provide a onSort callback to the parent <ActionList/> component
   * @default false
   */
  canSort?: boolean
  sortDirection?: 'asc' | 'desc'
}

export type ColumnsProps = ColumnProps[]

export interface ColumnComponentProps {
  detail?: ReactNode
  indicator?: ReactNode
  className?: string
  size?: ColumnSize
  children: ReactNode
}
