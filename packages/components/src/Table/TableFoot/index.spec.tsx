/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import 'jest-styled-components'
import React from 'react'
import { renderWithTheme } from '@looker/components-test-utils'
import { screen } from '@testing-library/react'
import { TableFoot } from '.'

test('TableFoot renders', () => {
  renderWithTheme(
    <table>
      <TableFoot data-testid="table-footer" />
    </table>
  )
  expect(screen.getByTestId('table-footer')).toBeInTheDocument()
})
