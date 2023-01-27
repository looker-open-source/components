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
import { waitFor, render } from '@testing-library/react'
import type { IWriteQuery } from '@looker/sdk'
import { ContextWrapper, sdkMethodCreateQueryListener } from '../testUtils'
import { DataState } from './useDataState'
import { useCreateQuery } from './useCreateQuery'

// mock to track results from front-end data store
const dataContainerListener = jest.fn()
const dataStateListener = jest.fn()

type TestComponentProps = {
  newQuery?: Partial<IWriteQuery>
}

const TestComponent = ({ newQuery }: TestComponentProps) => {
  const response = useCreateQuery(newQuery)
  const { getById } = DataState.useContainer()

  const mockMetadata = getById(response?.queryId || 0, 'metadata')

  dataContainerListener(response)
  dataStateListener(mockMetadata)

  return null
}

afterEach(() => {
  jest.resetAllMocks()
})

describe('useCreateQuery', () => {
  it('does not dispatch request if no arguments are passed', async () => {
    render(
      <ContextWrapper
        initialState={{
          byId: {},
          dashboardIdMap: {},
          modelExplore: {},
          slugIdMap: {},
        }}
      >
        <TestComponent />
      </ContextWrapper>
    )

    await waitFor(() =>
      expect(dataContainerListener).toHaveBeenLastCalledWith({
        isOK: true,
        isPending: false,
        queryId: undefined,
      })
    )

    // important: assert that it was able to retrieve results without dispatching sdk request
    expect(sdkMethodCreateQueryListener).not.toHaveBeenCalled()
  })

  it('creates new query object when `newQuery` argument is passed in', async () => {
    render(
      <ContextWrapper
        initialState={{
          byId: {},
          dashboardIdMap: {},
          modelExplore: {},
          slugIdMap: {},
        }}
      >
        <TestComponent newQuery={{ model: 'thelook' }} />
      </ContextWrapper>
    )

    await waitFor(() =>
      expect(dataContainerListener).toHaveBeenLastCalledWith({
        isOK: true,
        isPending: false,
        queryId: 126,
      })
    )

    expect(sdkMethodCreateQueryListener).toHaveBeenCalledTimes(1)

    // verify that datastate is updated with new query metadata
    expect(dataStateListener).toHaveBeenLastCalledWith(
      expect.objectContaining({
        model: 'thelook',
        view: 'orders',
        vis_config: expect.anything(),
      })
    )
  })
})
