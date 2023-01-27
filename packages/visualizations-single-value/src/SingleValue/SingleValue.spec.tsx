/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import React from 'react'
import { renderWithTheme } from '@looker/components-test-utils'
import { mockFields, mockData } from '@looker/visualizations-adapters'
import { screen } from '@testing-library/react'
import { SingleValue } from './SingleValue'

describe('SingleValue', () => {
  it('renders a single value', () => {
    renderWithTheme(
      <SingleValue
        config={{
          series: [
            { color: '#f13136', label: 'orders', value_format: '0,0.[00]' },
          ],
          type: 'single_value',
        }}
        data={mockData}
        fields={mockFields}
      />
    )
    expect(screen.getByText('87')).toBeVisible()
    expect(screen.getByText('orders')).toBeVisible()
  })
})
