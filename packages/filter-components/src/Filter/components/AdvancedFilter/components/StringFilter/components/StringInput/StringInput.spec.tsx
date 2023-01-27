/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import type { FilterModel } from '@looker/filter-expressions'
import { renderWithTheme } from '@looker/components-test-utils'
import { fireEvent, screen } from '@testing-library/react'
import React from 'react'
import { StringInput } from './StringInput'

describe('StringInput tests', () => {
  jest.useFakeTimers()
  const getMockedComponent = ({ ...props }) => (
    <StringInput
      onChange={jest.fn()}
      item={{ id: '1' } as FilterModel}
      suggestions={['Foo']}
      {...props}
    />
  )

  describe('showDropDownMenu', () => {
    it('should show options dropdown if there are suggestions available', () => {
      renderWithTheme(getMockedComponent({ suggestions: ['Foo'] }))

      const input = screen.getByPlaceholderText('any value')
      fireEvent.click(input)

      expect(screen.getByRole('listbox')).toBeInTheDocument()
      expect(screen.getByText('Foo')).toBeInTheDocument()

      // Close popover to silence act() warning
      fireEvent.click(document)
    })
  })

  describe('event hanlders', () => {
    it('should hide the options popover on enter', () => {
      const onChangeMock = jest.fn()
      renderWithTheme(
        getMockedComponent({
          suggestions: ['Foo'],
          onInputChange: onChangeMock,
        })
      )
      const input = screen.getByPlaceholderText('any value')
      fireEvent.click(input)
      fireEvent.change(input, { target: { value: 'bar' } })
      fireEvent.keyDown(input, { key: 'Enter', code: 'Enter', charCode: 13 })
      expect(screen.queryByText('Foo')).not.toBeInTheDocument()
    })
  })
})
