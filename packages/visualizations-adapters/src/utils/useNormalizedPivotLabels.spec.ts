/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import { useNormalizedPivotLabels } from './useNormalizedPivotLabels'
import { i18nInit } from './i18n'
import { renderHook } from '@testing-library/react-hooks'

describe('useNormalizedPivotLabels', () => {
  i18nInit()
  it('Derives a pivot label from capitalizing the key value by default', () => {
    const { result } = renderHook(() =>
      useNormalizedPivotLabels([
        {
          key: 'cancelled',
          is_total: false,
          data: {},
          labels: { 'orders.status': 'Canceled' },
        },
      ])
    )

    expect(result.current).toEqual([
      expect.objectContaining({ label: 'Cancelled' }),
    ])
  })

  it('Sets the label to "Row Total" when is_total is true', () => {
    const { result } = renderHook(() =>
      useNormalizedPivotLabels([
        {
          key: 'cancelled',
          is_total: true,
          data: {},
          labels: { 'orders.status': 'Canceled' },
        },
      ])
    )

    expect(result.current).toEqual([
      expect.objectContaining({ label: 'Row Total' }),
    ])
  })
})
