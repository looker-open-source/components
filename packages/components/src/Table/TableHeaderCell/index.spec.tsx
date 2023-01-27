/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import React from 'react'
import { renderWithTheme } from '@looker/components-test-utils'
import { screen } from '@testing-library/react'
import { TableHeaderCell } from '.'

test('TableHeaderCell', () => {
  renderWithTheme(
    <table>
      <thead>
        <tr>
          <TableHeaderCell data-testid="table-header-cell" />
        </tr>
      </thead>
    </table>
  )
  expect(screen.getByTestId('table-header-cell')).toBeInTheDocument()
  expect(screen.getByTestId('table-header-cell').tagName).toEqual('TH')
})
