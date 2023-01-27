/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import React from 'react'
import { renderWithTheme } from '@looker/components-test-utils'
import { screen } from '@testing-library/react'
import { Legend } from './Legend'

test('A Legend', () => {
  renderWithTheme(<Legend>I am legend</Legend>)
  expect(screen.getByText('I am legend')).toBeInTheDocument()
  expect(screen.getByText('I am legend').tagName).toEqual('LEGEND')
})
