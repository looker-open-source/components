/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import React from 'react'
import { renderWithTheme } from '@looker/components-test-utils'
import { screen } from '@testing-library/react'
import { TableRow } from '.'

test('TableRow', () => {
  renderWithTheme(
    <table>
      <tbody>
        <TableRow data-testid="table-row" />
      </tbody>
    </table>
  )
  expect(screen.getByTestId('table-row')).toBeInTheDocument()
  expect(screen.getByTestId('table-row').tagName).toEqual('TR')
})
