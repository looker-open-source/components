/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import { renderWithTheme } from '@looker/components-test-utils'
import { screen } from '@testing-library/react'
import React from 'react'
import { CheckboxGroup } from './CheckboxGroup'

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

describe('CheckboxGroup', () => {
  it('handles loading state', () => {
    renderWithTheme(
      <CheckboxGroup
        isLoading
        options={options}
        onChange={jest.fn()}
        value={[]}
      />
    )
    expect(screen.getByRole('progressbar')).toBeInTheDocument()
  })
})
