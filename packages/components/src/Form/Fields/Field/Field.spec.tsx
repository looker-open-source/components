/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import React from 'react'
import { renderWithTheme } from '@looker/components-test-utils'
import { screen } from '@testing-library/react'
import { Field } from './Field'

describe('Field', () => {
  test('Hidden labels', () => {
    renderWithTheme(
      <Field id="test" hideLabel label="hello!">
        <input id="test" type="text" />
      </Field>
    )
    screen.getByText('hello!')
  })
})
