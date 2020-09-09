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
import React from 'react'
import { assertSnapshot, renderWithTheme } from '@looker/components-test-utils'
import { Icon } from './Icon'

describe('Icon', () => {
  test('Default', () => {
    assertSnapshot(<Icon name="Plus" />)
  })

  test('Styled system size', () => {
    assertSnapshot(<Icon name="Plus" size="large" />)
  })

  test('Explicit size - integer as pixels', () => {
    assertSnapshot(<Icon name="Plus" size={12} />)
  })

  test('Explicit size - string', () => {
    assertSnapshot(<Icon name="Plus" size="1rem" />)
  })

  test('DOM attribute support', () => {
    const { findByLabelText } = renderWithTheme(
      <Icon name="Plus" aria-label="Add" />
    )
    expect(findByLabelText('Add')).toBeTruthy()
  })

  test(`No title by default`, () => {
    const { queryByLabelText } = renderWithTheme(<Icon name="Trash" />)
    expect(queryByLabelText("Oscar's House")).toBeFalsy()
  })

  test(`Title is assigned properly to SVG art`, () => {
    const { getByTitle } = renderWithTheme(
      <Icon name="Trash" title="Oscar's House" />
    )
    expect(getByTitle("Oscar's House")).toBeTruthy()
  })
})
