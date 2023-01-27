/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import React from 'react'
import { renderWithTheme } from '@looker/components-test-utils'
import { screen } from '@testing-library/react'
import { ModalFooter } from '../ModalFooter/ModalFooter'

describe('ModalFooter', () => {
  test('basic', () => {
    renderWithTheme(
      <ModalFooter>
        <button>Cancel</button>
      </ModalFooter>
    )
    expect(screen.getByRole('button')).toBeInTheDocument()
  })

  test('has correct flex style', () => {
    renderWithTheme(
      <ModalFooter>
        <button>Cancel</button>
      </ModalFooter>
    )
    expect(screen.getByRole('button')?.closest('footer')).toHaveStyle(
      'flex-direction: row-reverse'
    )
  })

  test('secondary', () => {
    renderWithTheme(
      <ModalFooter secondary={<button>Done</button>}>
        <button>Cancel</button>
      </ModalFooter>
    )
    expect(screen.getByText('Done')).toBeInTheDocument()
  })
})
