/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import 'jest-styled-components'
import React from 'react'
import { fireEvent, screen } from '@testing-library/react'
import { renderWithTheme } from '@looker/components-test-utils'
import { Box } from './Box'

describe('Box', () => {
  describe('as=', () => {
    test('render as any HTML tag', () => {
      renderWithTheme(<Box as="button">Press Me</Box>)
      expect(screen.getByRole('button')).toBeInTheDocument()
    })

    test('any prop can be passed to Box', () => {
      renderWithTheme(<Box as="input" type="checkbox" />)
      expect(screen.getByRole('checkbox')).toBeInTheDocument()
    })
  })

  describe('core HTML attributes', () => {
    test('allows autoFocus', () => {
      renderWithTheme(
        <Box as="input" type="text" defaultValue="Autofocus" autoFocus />
      )
      expect(screen.getByDisplayValue('Autofocus')).toHaveFocus()
    })

    test('allows for HTML events', () => {
      const handleClick = jest.fn()
      renderWithTheme(<Box onClick={handleClick}>Click me</Box>)
      fireEvent.click(screen.getByText('Click me'))
      expect(handleClick).toHaveBeenCalledTimes(1)
    })

    test('allows for ARIA attributes', () => {
      renderWithTheme(
        <Box aria-label="for screen readers only">aria-label</Box>
      )
      expect(
        screen.getByLabelText('for screen readers only')
      ).toBeInTheDocument()
    })
  })

  describe('user select', () => {
    test('cannot be selected', () => {
      renderWithTheme(<Box userSelect="none">Can't touch this</Box>)
      expect(screen.getByText("Can't touch this")).toHaveStyleRule(
        'user-select',
        'none'
      )
    })
  })
})
