/*

 MIT License

 Copyright (c) 2022 Looker Data Sciences, Inc.

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in all
 copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 SOFTWARE.

 */
import type { FilterModel } from '@looker/filter-expressions'
import { renderWithTheme } from '@looker/components-test-utils'
import { fireEvent, screen } from '@testing-library/react'
import React from 'react'
import { MultiStringInput } from './MultiStringInput'

describe('MultiStringInput tests', () => {
  jest.useFakeTimers()
  const getMockedComponent = ({ ...props }) => (
    <MultiStringInput
      onChange={jest.fn()}
      onInputChange={jest.fn()}
      item={{ id: '1' } as FilterModel}
      suggestions={['Foo']}
      {...props}
    />
  )

  describe('showDropDownMenu', () => {
    it('defaults true, show options', () => {
      renderWithTheme(getMockedComponent({ suggestions: ['Foo'] }))

      const input = screen.getByPlaceholderText('any value')
      fireEvent.click(input)

      expect(screen.getByRole('listbox')).toBeInTheDocument()
      expect(screen.getByText('Foo')).toBeInTheDocument()

      // Close popover to silence act() warning
      fireEvent.click(document)
    })

    it('no menu when false', () => {
      renderWithTheme(
        getMockedComponent({ showDropDownMenu: false, suggestions: ['Foo'] })
      )

      const input = screen.getByPlaceholderText('any value')
      fireEvent.click(input)

      expect(screen.queryByRole('listbox')).not.toBeInTheDocument()
      expect(screen.queryByText('Foo')).not.toBeInTheDocument()
    })
  })

  describe('disableCreate', () => {
    it('defaults false, allow free input', () => {
      const onChangeMock = jest.fn()
      renderWithTheme(getMockedComponent({ onChange: onChangeMock }))

      const input = screen.getByPlaceholderText('any value')
      fireEvent.change(input, { target: { value: 'bar,' } })

      expect(input).toHaveValue('')
      expect(onChangeMock).toHaveBeenCalledWith('1', { value: ['bar'] })

      // Close popover to silence act() warning
      fireEvent.click(document)
    })

    it('no free input when true', () => {
      const onChangeMock = jest.fn()
      renderWithTheme(
        getMockedComponent({ disableCreate: true, onChange: onChangeMock })
      )

      const input = screen.getByPlaceholderText('any value')
      fireEvent.change(input, { target: { value: 'bar,' } })

      expect(input).toHaveValue('bar,')
      expect(onChangeMock).not.toHaveBeenCalled()

      // Close popover to silence act() warning
      fireEvent.click(document)
    })
  })
})
