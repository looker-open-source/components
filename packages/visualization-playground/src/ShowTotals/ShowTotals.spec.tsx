/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import React from 'react'
import { screen, fireEvent } from '@testing-library/react'
import { renderWithTheme } from '@looker/components-test-utils'
import { mockTableConfig } from '@looker/visualizations-adapters'
import { ShowTotals } from './ShowTotals'

afterEach(() => {
  jest.resetAllMocks()
})

describe('ShowTotals', () => {
  const handleConfigChange = jest.fn()

  it('hidden when show_totals is unsupported', () => {
    const { container } = renderWithTheme(
      <ShowTotals
        config={{ type: 'unsupported' as 'table' }}
        onConfigChange={handleConfigChange}
      />
    )

    expect(container).toBeEmptyDOMElement()
  })

  it('toggles show_totals', () => {
    renderWithTheme(
      <ShowTotals
        config={{ ...mockTableConfig, show_totals: true }}
        onConfigChange={handleConfigChange}
      />
    )

    fireEvent.click(screen.getByLabelText('Show totals'))

    expect(handleConfigChange).toHaveBeenLastCalledWith(
      expect.objectContaining({
        show_totals: false,
      })
    )
  })
})
