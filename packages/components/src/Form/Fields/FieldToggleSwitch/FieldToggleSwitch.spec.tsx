/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import 'jest-styled-components'
import React from 'react'
import { composeStories } from '@storybook/testing-react'
import userEvent from '@testing-library/user-event'
import { renderWithTheme } from '@looker/components-test-utils'
import { screen } from '@testing-library/react'
import { FieldToggleSwitch } from './FieldToggleSwitch'
import * as stories from './stories/index.stories'

const { RichDetailDescription } = composeStories(stories)

describe('FieldToggleSwitch', () => {
  test('error has proper aria setup', () => {
    const errorMessage = 'This is an error'

    const { container } = renderWithTheme(
      <FieldToggleSwitch
        id="test"
        defaultValue="example"
        validationMessage={{ message: errorMessage, type: 'error' }}
      />
    )

    const input = screen.getByDisplayValue('example')
    const id = input.getAttribute('aria-describedby')
    expect(id).toBeDefined()
    expect(id).toEqual('describedby-test')
    expect(container).toHaveTextContent(errorMessage)
  })

  test('disabled', () => {
    renderWithTheme(
      <FieldToggleSwitch
        disabled
        id="FieldToggleSwitchID"
        label="Toggle Switch"
      />
    )

    expect(screen.getByLabelText('Toggle Switch')).toBeDisabled()
  })

  test('required', () => {
    renderWithTheme(
      <FieldToggleSwitch
        id="FieldToggleSwitchID"
        label="Toggle Switch"
        required
      />
    )

    expect(screen.getByTestId('requiredStar')).toBeVisible()
  })

  test('tabStops', () => {
    renderWithTheme(<RichDetailDescription />)

    const input = screen.getByRole('switch')
    const detail = screen.getByRole('button')
    const link = screen.getByText('Link')

    userEvent.tab()
    expect(input).toHaveFocus()
    userEvent.tab()
    expect(detail).toHaveFocus()
    userEvent.tab()
    expect(link).toHaveFocus()
  })
})
