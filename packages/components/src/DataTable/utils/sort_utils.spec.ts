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

import type { DataTableColumns } from '../Column'
import { stringComparator, doDataTableSort } from './sort_utils'

describe('DataTable Sort Utils', () => {
  test('Default string comparison', () => {
    const compared = [
      ['Animal', 'Crossing'],
      ['MaRiO', 'mario'],
      ['Samus', 'Link'],
      ['', '%(#&@'],
      ['1234', '10000'],
    ].map(values => stringComparator(values[0], values[1]))

    expect(compared).toMatchInlineSnapshot(`
      Array [
        -1,
        0,
        1,
        -1,
        1,
      ]
    `)
  })

  interface ExampleArgumentSet {
    id: string
    sortDirection: 'asc' | 'desc'
  }

  const data = [
    {
      birthday: new Date('March 6, 1972'),
      id: 1,
      name: 'Shaq',
    },
    {
      birthday: new Date('August 23, 1978'),
      id: 2,
      name: 'Kobe',
    },
    {
      birthday: new Date('August 23, 1978'), // testing two identical dates
      id: 3,
      name: 'Andrew Rannells',
    },
  ]
  const columns: DataTableColumns = [
    {
      canSort: true,
      id: 'id',
      title: 'ID',
      type: 'number',
    },
    {
      canSort: true,
      id: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      canSort: true,
      id: 'birthday',
      title: 'Birthday',
      type: 'date',
    },
  ]

  type TestTuple = [string, ExampleArgumentSet]

  const testConditions: TestTuple[] = [
    [
      'Sort ID Ascending',
      {
        id: 'id',
        sortDirection: 'asc',
      },
    ],
    [
      'Sort ID Descending',
      {
        id: 'id',
        sortDirection: 'desc',
      },
    ],
    [
      'Sort Name Ascending',
      {
        id: 'name',
        sortDirection: 'asc',
      },
    ],
    [
      'Sort Name Ascending',
      {
        id: 'name',
        sortDirection: 'desc',
      },
    ],
    [
      'Sort Date Ascending',
      {
        id: 'birthday',
        sortDirection: 'asc',
      },
    ],
    [
      'Sort Date Descending',
      {
        id: 'birthday',
        sortDirection: 'desc',
      },
    ],
  ]

  test.each(testConditions)('%s', (_, { id, sortDirection }) => {
    expect(
      doDataTableSort(data, columns, id, sortDirection).data
    ).toMatchSnapshot()
  })
})
