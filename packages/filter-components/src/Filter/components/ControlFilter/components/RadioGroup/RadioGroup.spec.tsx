/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import { renderWithTheme } from '@looker/components-test-utils'
import { screen } from '@testing-library/react'
import React from 'react'
import { RadioGroup } from './RadioGroup'

const options = [
  {
    label: 'label1',
    value: 'value1',
    name: 'radioSpec',
  },
  {
    label: 'label2',
    value: 'value2',
    name: 'radioSpec',
  },
  {
    label: 'label3',
    value: 'value3',
    name: 'radioSpec',
  },
]

describe('RadioGroup tests', () => {
  it('renders any value', () => {
    renderWithTheme(
      <RadioGroup value={''} options={options} onChange={jest.fn()} anyOption />
    )

    expect(screen.getByLabelText('any value')).toBeChecked()
  })

  it('handles loading state', () => {
    renderWithTheme(
      <RadioGroup
        isLoading
        value={'value1'}
        options={options}
        onChange={jest.fn()}
      />
    )
    expect(screen.getByRole('progressbar')).toBeInTheDocument()
  })
})
