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
import { renderWithTheme } from '../../../components-test-utils/src'
import type { CursorProps } from './cursor'
import { cursor } from './cursor'

test('cursor', () => {
  const Test = styled.p<CursorProps>`
    ${cursor}
  `

  renderWithTheme(<Test cursor="readonly">Find me</Test>)
  expect(screen.getByText('Find me')).toHaveStyle('cursor: readonly')
})
