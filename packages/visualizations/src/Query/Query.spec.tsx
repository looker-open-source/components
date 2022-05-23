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

import type { ReactElement } from 'react'
import React from 'react'
import { DataProvider } from '@looker/components-data'
import { Query } from './'
import type { Response, SDKRecord, CAll } from '@looker/visualizations-adapters'
import type { Looker40SDK } from '@looker/sdk'
import { waitFor, screen } from '@testing-library/react'
import { mockSDK, mockSdkFieldsResponse } from '@looker/visualizations-adapters'
import { renderWithTheme } from '@looker/components-test-utils'

const mockConsoleWarn = jest.fn()
const defaultConsoleWarn = globalThis.console.warn

beforeEach(() => {
  globalThis.console.warn = mockConsoleWarn
})

afterEach(() => {
  jest.clearAllMocks()
  globalThis.console.warn = defaultConsoleWarn
})

describe('Query', () => {
  const mockDataListener = jest.fn()
  const isResponseOk = jest.fn()

  const TestChild = ({
    data,
    ok,
    loading,
  }: {
    data?: SDKRecord[]
    ok?: boolean
    loading?: boolean
  }) => {
    mockDataListener(data)
    isResponseOk(ok === true && loading === false)
    return null
  }

  const QueryTemplate = ({
    config,
    children,
  }: {
    config?: Partial<CAll>
    children: ReactElement
  }) => {
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
    return (
      <DataProvider
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
        <Query query={'1'} config={config}>
          {children}
        </Query>
      </DataProvider>
    )
  }

  it('sorts data chronologically when dimension is_timeframe is true', async () => {
    renderWithTheme(
      <QueryTemplate>
        <TestChild />
      </QueryTemplate>
    )

    await waitFor(() =>
      expect(mockDataListener).toHaveBeenLastCalledWith([
        { 'orders.created_date': '2014-07', 'orders.count': 300 },
        { 'orders.created_date': '2019-11', 'orders.count': 1 },
      ])
    )
  })

  it('reverses data when config.x_axis[0].reversed is true', async () => {
    renderWithTheme(
      <QueryTemplate config={{ x_axis: [{ reversed: true }] }}>
        <TestChild />
      </QueryTemplate>
    )

    await waitFor(() =>
      expect(mockDataListener).toHaveBeenLastCalledWith([
        { 'orders.created_date': '2019-11', 'orders.count': 1 },
        { 'orders.created_date': '2014-07', 'orders.count': 300 },
      ])
    )
  })

  it('Restricted Props: Expect type failure if both query and dashboard props are used', async () => {
    renderWithTheme(
      <DataProvider sdk={mockSDK}>
        {/* @ts-expect-error :: restricted prop combination (conflicting query and dashboard values) */}
        <Query query={'abc'} dashboard={2}>
          <TestChild />
        </Query>
      </DataProvider>
    )

    await waitFor(() => {
      expect(isResponseOk).toHaveBeenLastCalledWith(true)
    })

    expect(mockConsoleWarn).toHaveBeenCalled()
  })

  it('Renders sdk error message in the dom', async () => {
    const errorMessage = 'Query not found'

    const mockSDKNotFound = ({
      ...mockSDK,
      query_for_slug: () =>
        Promise.resolve({
          ok: false,
          error: { message: errorMessage },
        }),
    } as unknown) as Looker40SDK

    renderWithTheme(
      <DataProvider sdk={mockSDKNotFound}>
        <Query query={'abc123'}>{() => null}</Query>
      </DataProvider>
    )

    await waitFor(() => {
      expect(screen.getByText(errorMessage)).toBeInTheDocument()
    })
  })
})
