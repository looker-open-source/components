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

import { ActionListColumns } from '../ActionList'
import { stringComparator, doDefaultActionListSort } from './sort_utils'

describe('Action List Sort Utils', () => {
  test('Default string comparison', () => {
    ;[
      ['Animal', 'Crossing'],
      ['MaRiO', 'mario'],
      ['Samus', 'Link'],
      ['', '%(#&@'],
      ['1234', '10000'],
    ].map((values) => {
      expect(stringComparator(values[0], values[1])).toMatchSnapshot()
    })
  })

  test('Default sort', () => {
    const data = [
      {
        id: 1,
        name: 'Shaq',
      },
      {
        id: 2,
        name: 'Kobe',
      },
    ]
    const columns: ActionListColumns = [
      {
        canSort: true,
        id: 'id',
        primaryKey: true,
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
    ]

    interface ExampleArgumentSet {
      id: string
      sortDirection: 'asc' | 'desc'
    }
    const sets: ExampleArgumentSet[] = [
      {
        id: 'id',
        sortDirection: 'asc',
      },
      {
        id: 'id',
        sortDirection: 'desc',
      },
      {
        id: 'name',
        sortDirection: 'asc',
      },
      {
        id: 'name',
        sortDirection: 'desc',
      },
    ]

    sets.map(({ id, sortDirection }) => {
      expect(
        doDefaultActionListSort(data, columns, id, sortDirection)
      ).toMatchSnapshot()
    })
  })
})
