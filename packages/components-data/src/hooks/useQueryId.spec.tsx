/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import React from 'react'
import { waitFor, render } from '@testing-library/react'
import { ContextWrapper, sdkMethodQueryForSlugListener } from '../testUtils'
import { useQueryId } from './useQueryId'

// mock to track results from front-end data store
const dataContainerListener = jest.fn()

type TestComponentProps = {
  slug?: string
}

const TestComponent = ({ slug = 'qz123' }: TestComponentProps) => {
  const response = useQueryId(slug)
  dataContainerListener(response)
  return null
}

afterEach(() => {
  jest.resetAllMocks()
})

describe('useQueryId', () => {
  it('fetches query id on mount', async () => {
    render(
      <ContextWrapper>
        <TestComponent />
      </ContextWrapper>
    )

    await waitFor(() => {
      expect(sdkMethodQueryForSlugListener).toHaveBeenCalledTimes(1)
    })

    expect(dataContainerListener).toHaveBeenCalledWith(
      expect.objectContaining({
        queryId: 126,
      })
    )
  })

  it('does not dispatch request if data already exists for given id', async () => {
    render(
      <ContextWrapper
        initialState={{
          byId: {},
          dashboardIdMap: {},
          modelExplore: {},
          slugIdMap: { qz123: 456 },
        }}
      >
        <TestComponent slug={'qz123'} />
      </ContextWrapper>
    )

    await waitFor(() =>
      expect(dataContainerListener).toHaveBeenCalledWith({
        isOK: true,
        isPending: false,
        queryId: 456,
      })
    )

    // important: assert that it was able to retrieve results without dispatching sdk request
    expect(sdkMethodQueryForSlugListener).not.toHaveBeenCalled()
  })
})
