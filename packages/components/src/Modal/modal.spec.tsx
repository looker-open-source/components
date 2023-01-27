/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import React from 'react'
import { renderWithTheme } from '@looker/components-test-utils'
import { screen } from '@testing-library/react'
import { ModalHeaderCloseButton } from './ModalHeaderCloseButton'

describe('ModalHeaderCloseButton', () => {
  test('render ', () => {
    renderWithTheme(<ModalHeaderCloseButton />)
    expect(screen.getByRole('button')).toBeInTheDocument()
    expect(screen.getByText('Close')).toBeInTheDocument()
  })
})
