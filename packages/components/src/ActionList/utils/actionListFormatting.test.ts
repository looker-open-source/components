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

import isEqual from 'lodash/isEqual'
import {
  getPrimaryKeyColumnIndices,
  getNumericColumnIndices,
} from './actionListFormatting'
import { ActionListColumns } from '..'

describe('Action List CSS Utils', () => {
  const columns: ActionListColumns = [
    {
      id: 'id',
      primaryKey: true,
      title: 'ID',
      type: 'number',
      widthPercent: 20,
    },
    {
      id: 'name',
      title: 'Name',
      type: 'string',
      widthPercent: 50,
    },
    {
      id: 'age',
      title: 'Age',
      type: 'number',
      widthPercent: 30,
    },
  ]

  test('getPrimaryKeyColumnIndices', () => {
    const isPrimaryKeyIndexArrayCorrect = isEqual(
      getPrimaryKeyColumnIndices(columns),
      [0]
    )
    expect(isPrimaryKeyIndexArrayCorrect).toBe(true)
  })

  test('getNumericColumnIndices', () => {
    const isNumericColumnIndexArrayCorrect = isEqual(
      getNumericColumnIndices(columns),
      [0, 2]
    )
    expect(isNumericColumnIndexArrayCorrect).toBe(true)
  })
})
