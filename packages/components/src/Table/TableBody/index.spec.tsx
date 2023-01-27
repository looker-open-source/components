/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import React from 'react'
import { renderWithTheme } from '@looker/components-test-utils'
import { screen } from '@testing-library/react'
import { TableBody } from '.'

test('TableBody', () => {
  renderWithTheme(
    <table>
      <TableBody data-testid="table-body" />
    </table>
  )
  expect(screen.getByTestId('table-body')).toBeInTheDocument()
  expect(screen.getByTestId('table-body').tagName).toEqual('TBODY')
})
