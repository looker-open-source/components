/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import { theme } from '@looker/components'
import { renderWithTheme } from '@looker/components-test-utils'
import { screen } from '@testing-library/react'
import React from 'react'
import { ButtonGroup } from './ButtonGroup'

const options = [
  {
    label: 'label1',
    value: 'value1',
  },
  {
    label: 'label2',
    value: 'value2',
  },
  {
    label: 'label3',
    value: 'value3',
  },
]

describe('ButtonGroup', () => {
  it('buttons have a red border with validationMessage', () => {
    renderWithTheme(
      <ButtonGroup
        options={options}
        validationMessage={{ type: 'error' }}
        onChange={jest.fn}
        value={[]}
      />
    )
    const buttons = screen.getAllByRole('button')
    for (const button of buttons) {
      expect(button).toHaveStyleRule(
        `border-color: ${theme.colors.criticalBorder}`
      )
    }
  })

  it('handles loading state', () => {
    renderWithTheme(
      <ButtonGroup
        isLoading
        options={options}
        onChange={jest.fn()}
        value={[]}
      />
    )
    expect(screen.getByRole('progressbar')).toBeInTheDocument()
  })
})
