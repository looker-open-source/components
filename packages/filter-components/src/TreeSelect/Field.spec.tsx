/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import { Text } from '@looker/components'
import {
  fireEvent,
  waitForElementToBeRemoved,
  screen,
} from '@testing-library/react'
import noop from 'lodash/noop'
import React from 'react'
import { renderWithTheme } from '@looker/test-utils'
import { Field } from './Field'

describe('Field tests', () => {
  it('renders a field with label', async () => {
    const { container } = renderWithTheme(
      <Field
        label="Test Field"
        displayLabel={<Text>Test Field</Text>}
        payload={{}}
        onClick={noop}
      />
    )
    expect(container).toBeVisible()
    expect(await screen.findByText('Test Field')).toBeVisible()
  })

  it('should call onClick', () => {
    const onClick = jest.fn()
    renderWithTheme(
      <Field
        label="Test Field"
        displayLabel={<Text>Test Field</Text>}
        payload={{ obj: 'hi' }}
        onClick={onClick}
      />
    )

    const field = screen.getByText('Test Field')

    fireEvent.click(field)

    expect(onClick).toHaveBeenCalledWith('Test Field', { obj: 'hi' })
  })

  it('should behave disabled', async () => {
    const onClick = jest.fn()
    renderWithTheme(
      <Field
        label="Test Field"
        displayLabel={<Text>Test Field</Text>}
        payload={{ obj: 'hi' }}
        onClick={onClick}
        disabled="disabled"
      />
    )

    const field = screen.getByText('Test Field')

    fireEvent.click(field)
    fireEvent.mouseOver(field)

    const disabledText = screen.getByText('disabled')

    expect(disabledText.innerHTML).toBe('disabled')
    expect(onClick).toHaveBeenCalledTimes(0)

    // Close tooltip to silence act() warning
    fireEvent.mouseOut(field)
    await waitForElementToBeRemoved(() => screen.queryByText('disabled'))
  })
})
