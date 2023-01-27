/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import React from 'react'
import type { CPie } from '@looker/visualizations-adapters'
import { renderHook, cleanup } from '@testing-library/react-hooks'
import { ComponentsProvider } from '@looker/components-providers'
import { useLabelWidth, MIN_LABEL_SPACE } from './useLabelWidth'

const wrapper = ({ children }: React.PropsWithChildren<unknown>) => (
  <ComponentsProvider>{children}</ComponentsProvider>
)

describe('useLabelWidth', () => {
  test('calculates the width of the longest label in a set', async () => {
    const data = { albany: 20, albuquerque: 20 }
    const legend: CPie['legend'] = { type: 'legend', value: 'label_percent' }

    const { result, unmount } = renderHook(
      () => useLabelWidth(40, data, legend),
      {
        wrapper,
      }
    )

    // the min label size will be returned as no real dom measurements will
    // take place in the jest virtual dom
    expect(result.current).toEqual(MIN_LABEL_SPACE)

    // silence act(...) warning
    unmount()
    await cleanup()
  })
})
