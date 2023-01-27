/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import 'jest-styled-components'
import React from 'react'
import { renderWithTheme } from '@looker/components-test-utils'
import { screen } from '@testing-library/react'
import { ModalHeader } from './ModalHeader'

describe('ModalHeader', () => {
  test('basic', () => {
    renderWithTheme(<ModalHeader>Heading</ModalHeader>)
    expect(screen.getByText('Heading')).toBeInTheDocument()
  })

  test('has aria-label', async () => {
    renderWithTheme(<ModalHeader aria-label="ARIA label">Heading</ModalHeader>)
    expect(await screen.findByLabelText('ARIA label')).toBeInTheDocument()
  })

  test(`detail as ReactNode`, () => {
    renderWithTheme(
      <ModalHeader detail={<button>x</button>}>Header</ModalHeader>
    )
    expect(screen.getByText('x')).toBeInTheDocument()
  })

  test(`detail has marginY`, () => {
    renderWithTheme(
      <ModalHeader detail={<button>x</button>}>Header</ModalHeader>
    )
    expect(screen.queryByText('x')?.closest('div')).toHaveStyle(
      'margin-top: -0.5rem'
    )
    expect(screen.queryByText('x')?.closest('div')).toHaveStyle(
      'margin-bottom: -0.5rem'
    )
  })
})
