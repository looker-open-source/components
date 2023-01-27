/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import React from 'react'
import { renderWithTheme } from '@looker/components-test-utils'
import { screen } from '@testing-library/react'
import { CodeBlock } from './CodeBlock'

test('A default CodeBlock component', () => {
  renderWithTheme(<CodeBlock>Hello</CodeBlock>)
  expect(screen.getByText('Hello')).toBeInTheDocument()
  expect(screen.getByText('Hello').tagName).toEqual('CODE')
})
