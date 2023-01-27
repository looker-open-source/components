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
import type { UserSelectProps } from './userSelect'
import { userSelect } from './userSelect'

test('userSelect', () => {
  const Test = styled.p<UserSelectProps>`
    ${userSelect}
  `

  renderWithTheme(<Test userSelect="none">Find me</Test>)
  expect(screen.getByText('Find me')).toHaveStyle('user-select: none')
})
