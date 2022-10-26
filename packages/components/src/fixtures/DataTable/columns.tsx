/*

 MIT License

 Copyright (c) 2022 Looker Data Sciences, Inc.

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

import React from 'react'
import { Info } from '@styled-icons/material/Info'
import type { DataTableColumns } from '../../DataTable/Column'

export const columns: DataTableColumns = [
  {
    canSort: true,
    id: 'name',
    size: 'medium',
    title: 'Name',
    type: 'string',
  },
  {
    canSort: true,
    id: 'status',
    title: 'Status',
    titleIcon: <Info />,
    type: 'string',
  },
  {
    canSort: true,
    hide: false,
    id: 'inventory',
    title: 'Inventory',
    type: 'number',
  },
  {
    canSort: true,
    id: 'color',
    size: 'nowrap',
    title: 'Color',
    type: 'string',
  },
  {
    canSort: true,
    id: 'description',
    size: 'large',
    title: 'Description',
    type: 'string',
  },
  {
    canSort: true,
    id: 'origin',
    size: 'medium',
    title: 'Origin / Region / Proof of truncated headers',
    type: 'string',
  },
  {
    canSort: true,
    hide: true,
    id: 'calories',
    title: 'Calories',
    type: 'number',
  },
  {
    canSort: true,
    hide: true,
    id: 'fat',
    title: 'Fat',
    type: 'number',
  },
  {
    canSort: true,
    hide: true,
    id: 'protein',
    title: 'Protein',
    type: 'number',
  },
  {
    canSort: true,
    hide: true,
    id: 'calcium',
    title: 'Calcium',
    type: 'number',
  },
]
