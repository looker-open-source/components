/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import { renderWithTheme } from '@looker/components-test-utils'
import { fireEvent, screen } from '@testing-library/react'
import React from 'react'
import { ButtonToggles } from './ButtonToggles'

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

describe('ButtonToggles tests', () => {
  it('ButtonToggles with values pre-selected are selected', () => {
    renderWithTheme(
      <ButtonToggles value={'value1'} options={options} onChange={jest.fn()} />
    )

    expect(screen.getByText('label1')).toHaveAttribute('aria-pressed', 'true')
    expect(screen.getByText('label2')).toHaveAttribute('aria-pressed', 'false')
    expect(screen.getByText('label3')).toHaveAttribute('aria-pressed', 'false')
  })

  it('passes onChange newly selected value', () => {
    const mock = jest.fn()
    renderWithTheme(
      <ButtonToggles value={''} options={options} onChange={mock} />
    )

    fireEvent.click(screen.getByText('label1'))
    expect(mock).toHaveBeenCalledWith('value1')
  })

  it('passes onChange new value when other value is clicked', () => {
    const mock = jest.fn()
    renderWithTheme(
      <ButtonToggles value={'value1'} options={options} onChange={mock} />
    )

    fireEvent.click(screen.getByText('label2'))
    expect(mock).toHaveBeenCalledWith('value2')
  })

  it('handles loading state', () => {
    renderWithTheme(
      <ButtonToggles
        isLoading
        value={'value1'}
        options={options}
        onChange={jest.fn()}
      />
    )
    expect(screen.getByRole('progressbar')).toBeInTheDocument()
  })
})
