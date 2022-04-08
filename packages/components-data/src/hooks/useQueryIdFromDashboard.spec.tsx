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

import type { FC } from 'react'
import React from 'react'
import { waitFor, render } from '@testing-library/react'
import { ContextWrapper, sdkMethodDashboardListener } from '../testUtils'
import { useQueryIdFromDashboard } from './useQueryIdFromDashboard'

// mock to track results from front-end data store
const dataContainerListener = jest.fn()

type TestComponentProps = {
  dashboardId?: number
}

const TestComponent: FC<TestComponentProps> = ({ dashboardId = 1 }) => {
  const response = useQueryIdFromDashboard(dashboardId)
  dataContainerListener(response)
  return null
}

afterEach(() => {
  jest.clearAllMocks()
})

describe('useQueryIdFromDashboard', () => {
  it('fetches query ID on mount', async () => {
    render(
      <ContextWrapper>
        <TestComponent />
      </ContextWrapper>
    )
    await waitFor(() =>
      expect(dataContainerListener).toHaveBeenCalledWith(
        expect.objectContaining({
          queryId: 126,
        })
      )
    )
    expect(sdkMethodDashboardListener).toHaveBeenCalledTimes(1)
  })

  it('does not dispatch request if data already exists for given id', async () => {
    render(
      <ContextWrapper
        initialState={{
          byId: {},
          dashboardIdMap: { 456: 789 },
          modelExplore: {},
          slugIdMap: {},
        }}
      >
        <TestComponent dashboardId={456} />
      </ContextWrapper>
    )

    await waitFor(() =>
      expect(dataContainerListener).toHaveBeenCalledWith({
        isOK: true,
        isPending: false,
        queryId: 789,
      })
    )

    // important: assert that it was able to retrieve results without dispatching sdk request
    expect(sdkMethodDashboardListener).not.toHaveBeenCalled()
  })
})
