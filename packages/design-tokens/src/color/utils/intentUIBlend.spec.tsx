/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import React from 'react'
import { screen } from '@testing-library/react'
import styled from 'styled-components'
/**
 * This import path is ill-advised but acceptable since this
 * is a test-only import and prevents a package-dependency loop
 */
import { renderWithTheme } from '../../../../components-test-utils/src'
import { intentUIBlend } from './intentUIBlend'

describe('intentUIBlend', () => {
  test('default', () => {
    const Test = styled.p`
      background: ${intentUIBlend('critical', 0)};
      background-color: ${intentUIBlend('critical', 1)};
      color: ${intentUIBlend('critical', 4)};
    `

    renderWithTheme(<Test>Find me</Test>)

    const test = screen.getByText('Find me')
    expect(test).toHaveStyleRule('background', '#fcf6f6')
    expect(test).toHaveStyleRule('background-color', '#f8e4e6')
    expect(test).toHaveStyleRule('color', '#d34054')
  })
})
