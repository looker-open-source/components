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

import {
  closeCombobox,
  getAllComboboxOptionText,
  getComboboxOptions,
  getComboboxOptionText,
  openCombobox,
  renderWithTheme,
} from '@looker/components-test-utils'
import { screen } from '@testing-library/react'
import React from 'react'
import { Combobox, ComboboxInput, ComboboxList, ComboboxOption } from './'

describe('Combobox helpers', () => {
  const renderCombobox = () =>
    renderWithTheme(
      <Combobox onChange={jest.fn()}>
        <ComboboxInput placeholder="Type here" />
        <ComboboxList>
          <ComboboxOption label="Foo" value="101" onClick={jest.fn()} />
          <ComboboxOption label="Bar" value="102" />
        </ComboboxList>
      </Combobox>
    )

  test('openCombobox opens the combobox using the provided placeholder text', () => {
    renderCombobox()
    openCombobox('Type here')

    expect(screen.getByText('Foo')).toBeVisible()

    closeCombobox()
  })

  test('closeCombobox closes any open comboboxes', () => {
    renderCombobox()
    openCombobox('Type here')

    expect(screen.getByText('Foo')).toBeVisible()

    closeCombobox()

    expect(screen.queryByText('Foo')).not.toBeInTheDocument()
  })

  test('getComboboxOptions returns the expected number of options for an open Combobox', () => {
    renderCombobox()
    openCombobox('Type here')

    expect(getComboboxOptions()).toHaveLength(2)

    closeCombobox()
  })

  test('getComboboxOptionText returns the expected text content of the provided option element', () => {
    renderCombobox()
    openCombobox('Type here')

    const options = getComboboxOptions()
    expect(getComboboxOptionText(options[0])).toEqual('Foo')
    expect(getComboboxOptionText(options[1])).toEqual('Bar')

    closeCombobox()
  })

  test('getAllComboboxOptionText returns the expected text content of the provided option element', () => {
    renderCombobox()
    openCombobox('Type here')

    const optionTexts = getAllComboboxOptionText()
    expect(optionTexts).toMatchInlineSnapshot(`
      Array [
        "Foo",
        "Bar",
      ]
    `)

    closeCombobox()
  })
})
