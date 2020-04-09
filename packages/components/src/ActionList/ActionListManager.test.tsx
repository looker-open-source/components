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

import React from 'react'
import { renderWithTheme } from '@looker/components-test-utils'
import { ActionListManager } from '.'

const bestCheeseDiv = <div>Pepper Jack</div>

describe('ActionListManager', () => {
  test('Renders children if isLoading is false', () => {
    const { getByText } = renderWithTheme(
      <ActionListManager isLoading={false}>{bestCheeseDiv}</ActionListManager>
    )
    expect(getByText('Pepper Jack')).toBeInTheDocument()
  })

  test('Does not render children if isLoading is true', () => {
    const { queryByText } = renderWithTheme(
      <ActionListManager isLoading={true}>{bestCheeseDiv}</ActionListManager>
    )
    expect(queryByText('Pepper Jack')).not.toBeInTheDocument()
  })

  test('Renders children if noResults is false', () => {
    const { getByText } = renderWithTheme(
      <ActionListManager noResults={false}>{bestCheeseDiv}</ActionListManager>
    )
    expect(getByText('Pepper Jack')).toBeInTheDocument()
  })

  test('Does not render children if noResults is true', () => {
    const { queryByText } = renderWithTheme(
      <ActionListManager noResults={true}>{bestCheeseDiv}</ActionListManager>
    )
    expect(queryByText('Pepper Jack')).not.toBeInTheDocument()
  })

  test('Renders custom no results message when noResultsText prop has a value', () => {
    const { getByText } = renderWithTheme(
      <ActionListManager noResults={true} noResultsText={'Cheddar'}>
        {bestCheeseDiv}
      </ActionListManager>
    )
    expect(getByText('Cheddar')).toBeInTheDocument()
  })
})
