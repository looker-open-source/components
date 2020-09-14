/*

 MIT License

 Copyright (c) 2020 Looker Data Sciences, Inc.

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

import 'jest-styled-components'
import React, { createRef } from 'react'
import { renderWithTheme } from '@looker/components-test-utils'
import { fireEvent, screen } from '@testing-library/react'
import { InputSearch } from './InputSearch'

describe('InputSearch', () => {
  describe('Search icon', () => {
    test('shows by default', () => {
      renderWithTheme(<InputSearch />)
      expect(screen.getByTitle('Search')).toBeInTheDocument()
    })
    test('hidden with hideSearchIcon', () => {
      renderWithTheme(<InputSearch hideSearchIcon />)
      expect(screen.queryByTitle('Search')).not.toBeInTheDocument()
    })
  })

  test('displays placeholder', () => {
    renderWithTheme(<InputSearch placeholder="Type your search" />)
    expect(screen.getByPlaceholderText('Type your search')).toBeVisible()
  })

  test('supports ref assignment', () => {
    const inputRef = createRef<HTMLInputElement>()

    renderWithTheme(<InputSearch ref={inputRef} placeholder="type here" />)
    expect(screen.getByPlaceholderText('type here')).toBe(inputRef.current)
  })

  test('accepts a value', () => {
    renderWithTheme(<InputSearch value="start value" />)
    expect(screen.getByDisplayValue('start value')).toBeVisible()
  })

  test('accepts a defaultValue', () => {
    renderWithTheme(
      <InputSearch defaultValue="replace me" placeholder="type here" />
    )
    const input = screen.getByPlaceholderText('type here')
    expect(input).toHaveValue('replace me')
  })

  test('calls onChange', () => {
    const onChangeMock = jest.fn()
    renderWithTheme(
      <InputSearch onChange={onChangeMock} placeholder="type here" />
    )
    const input = screen.getByPlaceholderText('type here')
    fireEvent.change(input, { target: { value: 'New value' } })
    expect(onChangeMock).toHaveBeenCalledWith('New value')
  })

  test('displays summary', () => {
    renderWithTheme(<InputSearch value="start value" summary="summary value" />)
    expect(screen.getByText('summary value')).toBeVisible()
  })

  describe('Clear button', () => {
    test('clears value', () => {
      renderWithTheme(
        <InputSearch placeholder="type here" value="start value" />
      )

      const button = screen.getByRole('button')
      fireEvent.click(button)
      expect(screen.getByPlaceholderText('type here')).toHaveDisplayValue('')
      expect(screen.queryByRole('button')).not.toBeInTheDocument()
    })

    test('calls onChange', () => {
      const onChange = jest.fn()

      const { getByRole } = renderWithTheme(
        <InputSearch value="Search" onChange={onChange} />
      )

      const inputButton = getByRole('button')
      inputButton && fireEvent.click(inputButton)
      expect(onChange).toHaveBeenCalledWith('')
    })

    test('clear button and summary together', () => {
      renderWithTheme(
        <InputSearch value="start value" summary="summary value" />
      )
      expect(screen.getByRole('button')).toBeVisible()
      expect(screen.getByText('summary value')).toBeVisible()
    })

    test('hides when isClearable is false', () => {
      renderWithTheme(
        <InputSearch
          value="start value"
          summary="summary value"
          isClearable={false}
        />
      )
      expect(screen.queryByRole('button')).not.toBeInTheDocument()
    })

    test('hides when value is empty', () => {
      renderWithTheme(<InputSearch />)
      expect(screen.queryByRole('button')).not.toBeInTheDocument()
    })
  })
})
