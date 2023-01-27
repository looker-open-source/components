/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import React from 'react'
import { renderWithTheme } from '@looker/components-test-utils'
import { screen } from '@testing-library/react'
import { InputHidden } from './InputHidden'

describe('InputHidden', () => {
  test('name and id', () => {
    renderWithTheme(<InputHidden name="Bob" id="Bobby" defaultValue="bob" />)
    const input = screen.getByDisplayValue('bob')
    expect(input).toHaveAttribute('name', 'Bob')
    expect(input).toHaveAttribute('id', 'Bobby')
  })

  test('with a value', () => {
    renderWithTheme(<InputHidden defaultValue="Some value" />)

    expect(screen.getByDisplayValue('Some value')).toHaveValue('Some value')
  })
})
