/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import React from 'react'
import { renderWithTheme } from '@looker/components-test-utils'
import { fireEvent, screen } from '@testing-library/react'
import { DataTableCheckbox } from './DataTableCheckbox'

describe('DataTableCheckbox', () => {
  test('Renders checked', () => {
    renderWithTheme(<DataTableCheckbox checked />)
    const checkbox = screen.getByRole('checkbox')
    expect(checkbox as HTMLInputElement).toBeChecked()
  })

  test('Renders unchecked', () => {
    renderWithTheme(<DataTableCheckbox />)
    const checkbox = screen.getByRole('checkbox')
    expect(checkbox as HTMLInputElement).not.toBeChecked()
  })

  test('Renders disabled', () => {
    renderWithTheme(<DataTableCheckbox disabled />)
    const checkbox = screen.getByRole('checkbox')
    expect(checkbox as HTMLInputElement).toBeDisabled()
  })

  test('Calls onChange callback', () => {
    const onChange = jest.fn()
    renderWithTheme(<DataTableCheckbox onChange={onChange} />)
    const checkbox = screen.getByRole('checkbox')
    fireEvent.click(checkbox)
    expect(onChange).toHaveBeenCalledTimes(1)
    fireEvent.click(checkbox)
    expect(onChange).toHaveBeenCalledTimes(2)
  })
  test('Renders aria-label when checked if id = headerId', () => {
    renderWithTheme(<DataTableCheckbox id="headerId" checked />)
    const checkbox = screen.getByRole('checkbox')
    expect(checkbox as HTMLInputElement).toHaveAttribute(
      'aria-label',
      'Select none'
    )
  })

  test('Renders aria-label when unchecked if id = headerId', () => {
    renderWithTheme(<DataTableCheckbox id="headerId" />)
    const checkbox = screen.getByRole('checkbox')
    expect(checkbox as HTMLInputElement).toHaveAttribute(
      'aria-label',
      'Select all rows'
    )
  })

  test('no aria-label if id != headerId', () => {
    renderWithTheme(<DataTableCheckbox id="idValue" />)
    const checkbox = screen.getByRole('checkbox')
    expect(checkbox as HTMLInputElement).not.toHaveAttribute('aria-label')
  })

  test('Renders aria-labelledby with primary column value passed as id', () => {
    const { container } = renderWithTheme(
      <DataTableCheckbox id="primaryColumn" />
    )
    expect(container.firstChild).toHaveAttribute(
      'aria-labelledby',
      'rowheader-primaryColumn'
    )
  })
})
