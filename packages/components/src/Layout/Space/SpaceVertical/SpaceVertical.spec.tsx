/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import 'jest-styled-components'
import React from 'react'
import { screen } from '@testing-library/react'
import { renderWithTheme } from '@looker/components-test-utils'
import { SpaceVertical } from './SpaceVertical'

const content = (
  <>
    <div>one</div>
    <div>two</div>
    <div>three</div>
    <div>four</div>
  </>
)

describe('SpaceVertical', () => {
  test('reversed', () => {
    renderWithTheme(
      <SpaceVertical data-testid="space" reverse>
        {content}
      </SpaceVertical>
    )
    expect(screen.getByTestId('space')).toHaveStyle(
      'flex-direction: column-reverse;'
    )
  })
})
