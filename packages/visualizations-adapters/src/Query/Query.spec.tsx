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

import React, { useContext } from 'react'
import { Query, QueryContext } from './'
import type { Response } from '../__mocks__'
import type { Looker40SDK } from '@looker/sdk'
import { waitFor } from '@testing-library/react'
import { mockSDK, mockSdkFieldsResponse } from '../__mocks__'
import { renderWithTheme } from '@looker/components-test-utils'

describe('Query', () => {
  const mockDataListener = jest.fn()

  const TestChild = () => {
    const { data } = useContext(QueryContext)
    mockDataListener(data)
    return null
  }

  it('sorts data chronologically when dimension is_timeframe is true', async () => {
    const mockData = [
      {
        'orders.created_date': { value: '2019-11' },
        'orders.count': { value: 1 },
      },
      {
        'orders.created_date': { value: '2014-07' },
        'orders.count': { value: 300 },
      },
    ]

    renderWithTheme(
      <Query
        query={1}
        sdk={
          ({
            ...mockSDK,
            run_query: () =>
              Promise.resolve({
                ok: true,
                error: null,
                value: {
                  data: mockData,
                  fields: mockSdkFieldsResponse,
                },
              } as Response),
          } as unknown) as Looker40SDK
        }
      >
        <TestChild />
      </Query>
    )

    await waitFor(() =>
      expect(mockDataListener).toHaveBeenLastCalledWith([
        { 'orders.created_date': '2014-07', 'orders.count': 300 },
        { 'orders.created_date': '2019-11', 'orders.count': 1 },
      ])
    )
  })
})
