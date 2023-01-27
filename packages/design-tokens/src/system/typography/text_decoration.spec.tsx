/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import { screen } from '@testing-library/react'
import React from 'react'
import styled from 'styled-components'
/**
 * This import path is ill-advised but acceptable since this
 * is a test-only import and prevents a package-dependency loop
 */
import { renderWithTheme } from '../../../../components-test-utils/src'
import type { TextDecorationProps } from './text_decoration'
import { textDecoration } from './text_decoration'

test('text-decoration', () => {
  const Test = styled.p<TextDecorationProps>`
    ${textDecoration}
  `

  renderWithTheme(<Test textDecoration="underline">Find me</Test>)
  expect(screen.getByText('Find me')).toHaveStyle('text-decoration: underline')
})
