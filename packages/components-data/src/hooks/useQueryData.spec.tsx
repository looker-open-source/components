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
import { ContextWrapper, sdkMethodRunQueryListener } from '../testUtils'
import { useQueryData } from './useQueryData'

// mock to track results from front-end data store
const dataContainerListener = jest.fn()

type TestComponentProps = {
  queryId?: number
}

const TestComponent = ({ queryId = 1 }: TestComponentProps) => {
  const response = useQueryData(queryId)
  dataContainerListener(response)
  return null
}

afterEach(() => {
  jest.resetAllMocks()
})

describe('useQueryData', () => {
  it('fetches query data on mount', async () => {
    render(
      <ContextWrapper>
        <TestComponent />
      </ContextWrapper>
    )
    await waitFor(() =>
      expect(dataContainerListener).toHaveBeenCalledWith(
        expect.objectContaining({
          data: expect.anything(),
          fields: expect.anything(),
        })
      )
    )
    expect(sdkMethodRunQueryListener).toHaveBeenCalledTimes(1)
  })

  it('does not dispatch request if data query id is out of range', async () => {
    render(
      <ContextWrapper>
        <TestComponent queryId={-1} />
      </ContextWrapper>
    )

    await waitFor(() => {
      // request resolves and sets isPending to false
      expect(dataContainerListener).toHaveBeenLastCalledWith(
        expect.objectContaining({ data: [], isPending: false })
      )
    })

    // important: assert that it did not dispatch sdk request
    expect(sdkMethodRunQueryListener).not.toHaveBeenCalled()
  })

  it('does not dispatch request if data already exists for given id', async () => {
    const queryResult = {
      data: [{ count: 100 }],
      fields: { dimensions: [], measures: [], pivots: [] },
    }

    render(
      <ContextWrapper
        initialState={{
          byId: {
            '123': queryResult,
          },
          dashboardIdMap: {},
          modelExplore: {},
          slugIdMap: { '123': 123 },
        }}
      >
        <TestComponent queryId={123} />
      </ContextWrapper>
    )

    await waitFor(() =>
      expect(dataContainerListener).toHaveBeenLastCalledWith({
        ...queryResult,
        isOK: true,
        isPending: false,
      })
    )

    // important: assert that it was able to retrieve results without dispatching sdk request
    expect(sdkMethodRunQueryListener).not.toHaveBeenCalled()
  })
})
