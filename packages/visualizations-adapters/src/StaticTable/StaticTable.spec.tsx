/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import React from 'react'
import { screen } from '@testing-library/react'
import { renderWithTheme } from '@looker/components-test-utils'
import { StaticTable } from '.'
import { mockBarConfig, mockFields, mockData } from '../fixtures'

describe('StaticTable', () => {
  it('renders StaticTable', () => {
    renderWithTheme(
      <StaticTable
        data={mockData}
        fields={mockFields}
        config={{
          ...mockBarConfig,
          type: 'table',
        }}
      />
    )

    // verify that table headers are being populated from Fields metadata
    expect(screen.getAllByText('Orders')[0].tagName).toEqual('TH')
    // verify that table content is being populated from data
    expect(screen.getAllByText('California')[0].tagName).toEqual('TD')
  })
})
