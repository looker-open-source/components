/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import React from 'react'
import { ComponentsProvider } from '@looker/components'
import { renderHook } from '@testing-library/react-hooks'
import { useNumberFilterOptions } from './get_number_filter_options'

describe('number filter options', () => {
  it('should only return direct number matches and user attribute match options for parameter filters', () => {
    const {
      result: { current },
    } = renderHook(() => useNumberFilterOptions(true), {
      wrapper: ({ children }) => (
        <ComponentsProvider>{children}</ComponentsProvider>
      ),
    })
    expect(current).toStrictEqual([
      {
        value: '=',
        label: 'is',
      },
      {
        label: 'matches a user attribute',
        value: 'user_attribute',
      },
    ])
  })
})
