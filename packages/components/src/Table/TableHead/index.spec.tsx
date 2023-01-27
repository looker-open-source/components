/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import React from 'react'
import { renderWithTheme } from '@looker/components-test-utils'
import { screen } from '@testing-library/react'
import { TableHead } from '.'

test('TableHead', () => {
  renderWithTheme(
    <table>
      <TableHead data-testid="table-head" />
    </table>
  )
  expect(screen.getByTestId('table-head')).toBeInTheDocument()
  expect(screen.getByTestId('table-head').tagName).toEqual('THEAD')
})
