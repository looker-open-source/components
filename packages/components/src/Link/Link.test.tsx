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
import { createWithTheme, renderWithTheme } from '@looker/components-test-utils'
import { Link } from './Link'

describe('Link', () => {
  test('Snapshot', () => {
    const component = createWithTheme(
      <>
        <Link href="https://looker.com">Avocado</Link>
        <Link href="https://looker.com" keyColor>
          Avocado
        </Link>
        <Link href="https://looker.com" underline>
          Avocado
        </Link>
      </>
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

  test('ID passes through to DOM', () => {
    const { getByText } = renderWithTheme(
      <Link href="https://looker.com" id="link-id">
        🥑
      </Link>
    )

    const link = getByText('🥑')
    expect(link.hasAttribute('id')).toBeTruthy()
    expect(link.getAttribute('id')).toEqual('link-id')
  })

  test('target="_blank"', () => {
    const { getByText } = renderWithTheme(
      <>
        <Link href="https://looker.com" rel="pizza">
          🍕
        </Link>
        <Link href="https://looker.com" target="_blank">
          🥑
        </Link>
        <Link href="https://looker.com" target="_blank" rel="pizza">
          🍕🥑
        </Link>
      </>
    )

    expect(getByText('🍕').getAttribute('rel')).toEqual('pizza')
    expect(getByText('🥑').getAttribute('rel')).toEqual('noopener noreferrer')
    expect(getByText('🍕🥑').getAttribute('rel')).toEqual(
      'pizza noopener noreferrer'
    )
  })
})
