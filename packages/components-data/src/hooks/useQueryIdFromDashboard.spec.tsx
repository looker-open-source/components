/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import React from 'react'
import { waitFor, render } from '@testing-library/react'
import { ContextWrapper, sdkMethodDashboardListener } from '../testUtils'
import { useQueryIdFromDashboard } from './useQueryIdFromDashboard'

// mock to track results from front-end data store
const dataContainerListener = jest.fn()

type TestComponentProps = {
  dashboardId?: number
}

const TestComponent = ({ dashboardId = 1 }: TestComponentProps) => {
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
