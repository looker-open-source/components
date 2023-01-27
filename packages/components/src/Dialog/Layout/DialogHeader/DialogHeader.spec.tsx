/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import 'jest-styled-components'
import React from 'react'
import { renderWithTheme } from '@looker/components-test-utils'
import { screen } from '@testing-library/react'
import { Basic, Detail, HideClose } from './stories/index.stories'
import { DialogHeader } from './DialogHeader'

describe('DialogHeader', () => {
  test('basic', () => {
    renderWithTheme(<Basic />)
    expect(screen.getByText('Heading')).toBeInTheDocument()
  })

  test('Close visible by default', () => {
    renderWithTheme(<Basic />)
    expect(screen.getByText('Close')).toBeInTheDocument()
  })

  test('Detail text visible', () => {
    renderWithTheme(<Detail />)
    expect(screen.getByText('Detail text')).toBeInTheDocument()
  })

  test('hideClose', () => {
    renderWithTheme(<HideClose />)
    expect(screen.queryByText('Close')).not.toBeInTheDocument()
  })

  test('aria-label', () => {
    renderWithTheme(
      <DialogHeader aria-label="label test">Hello World</DialogHeader>
    )
    expect(screen.getByLabelText('label test')).toBeInTheDocument()
  })

  test('detail = null, no close option', () => {
    renderWithTheme(<DialogHeader detail={null}>Hello World</DialogHeader>)
    expect(screen.queryByText('Close')).not.toBeInTheDocument()
  })
})
