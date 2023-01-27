/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import React from 'react'
import { renderWithTheme } from '@looker/components-test-utils'
import { screen } from '@testing-library/react'
import { TableDataCell } from '.'

test('TableDataCell', () => {
  renderWithTheme(
    <table>
      <tbody>
        <tr>
          <TableDataCell data-testid="table-data-cell" />
        </tr>
      </tbody>
    </table>
  )
  expect(screen.getByTestId('table-data-cell')).toBeInTheDocument()
  expect(screen.getByTestId('table-data-cell').tagName).toEqual('TD')
})
