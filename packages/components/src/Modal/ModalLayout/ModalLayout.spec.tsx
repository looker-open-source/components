/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import React from 'react'
import { renderWithTheme } from '@looker/components-test-utils'
import { screen } from '@testing-library/react'
import { ModalLayout, ModalLoading } from './ModalLayout'

describe('ModalLayout', () => {
  test('basic ', () => {
    renderWithTheme(
      <ModalLayout header="Header" footer="Footer">
        Modal Layout
      </ModalLayout>
    )
    expect(screen.getByText(/Modal Layout/)).toBeInTheDocument()
  })

  test('renders Header', () => {
    renderWithTheme(
      <ModalLayout footer="Footer" header="Header">
        Modal Layout
      </ModalLayout>
    )
    expect(screen.getByText(/Header/)).toBeInTheDocument()
    expect(screen.getByText(/Footer/)).toBeInTheDocument()
  })

  test('renders ModalLoading', () => {
    renderWithTheme(<ModalLoading />)
    expect(screen.getAllByTestId('loading-spinner')[0]).toBeInTheDocument()
  })
})
