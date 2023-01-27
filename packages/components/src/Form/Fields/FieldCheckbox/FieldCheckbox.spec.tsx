/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import 'jest-styled-components'
import React from 'react'
import { renderWithTheme } from '@looker/components-test-utils'
import { screen } from '@testing-library/react'
import { Paragraph } from '../../..'
import { FieldCheckbox } from './FieldCheckbox'

describe('FieldCheckbox', () => {
  test('required', () => {
    renderWithTheme(
      <FieldCheckbox
        id="FieldCheckboxID"
        label="I agree"
        name="thumbsUp"
        required
      />
    )

    expect(screen.getByTestId('requiredStar')).toBeVisible()
  })

  test('disabled', () => {
    renderWithTheme(
      <FieldCheckbox
        disabled
        id="FieldCheckboxID"
        label="I agree"
        name="thumbsUp"
      />
    )
    expect(screen.getByLabelText('I agree')).toBeDisabled()
  })

  test('Accessibility', () => {
    const errorMessage = 'This is an error'
    renderWithTheme(
      <FieldCheckbox
        description="describe something here."
        detail="4/20"
        id="test"
        label="Example Field"
        validationMessage={{ message: errorMessage, type: 'error' }}
      />
    )
    expect(screen.getByRole('checkbox')).toHaveAttribute(
      'aria-describedby',
      'describedby-test'
    )

    const description = screen.getByText('describe something here.')
    const ariaDescribed = description.parentElement

    expect(ariaDescribed).toHaveAttribute('id', 'describedby-test')
    expect(ariaDescribed).toHaveTextContent(errorMessage)
  })

  test('label can be a ReactNode', () => {
    const paragraphSampleText = 'Sample paragraph text'
    renderWithTheme(
      <FieldCheckbox
        id="FieldCheckboxID"
        label={<Paragraph>{paragraphSampleText}</Paragraph>}
        name="thumbsUp"
      />
    )

    const paragraph = screen.getByText(paragraphSampleText)
    expect(paragraph).toHaveTextContent(paragraphSampleText)
  })
})
