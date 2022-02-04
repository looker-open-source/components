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

import 'jest-styled-components'
import React from 'react'
import { renderWithTheme } from '@looker/components-test-utils'
import { theme } from '@looker/design-tokens'
import { screen } from '@testing-library/react'
import { Link } from './Link'

describe('Link', () => {
  test('UnderlineTrue', () => {
    renderWithTheme(<Link underline={true}>My link</Link>)
    const link = screen.getByText('My link')
    expect(link).toHaveStyleRule('text-decoration: underline')
  })

  test('UnderlineFalse', () => {
    renderWithTheme(<Link underline={false}>My link</Link>)
    const link = screen.getByText('My link')
    expect(link).toHaveStyleRule('text-decoration: none')
  })

  test('color', () => {
    renderWithTheme(<Link>My link</Link>)
    const link = screen.getByText('My link')
    expect(link).toHaveStyleRule(`color: ${theme.colors.link}`)
  })

  test('keyColor', () => {
    renderWithTheme(<Link keyColor>My link</Link>)
    const link = screen.getByText('My link')
    expect(link).toHaveStyleRule(`color: ${theme.colors.key}`)
  })

  test('ID passes through to DOM', () => {
    renderWithTheme(
      <Link href="https://looker.com" id="link-id">
        🥑
      </Link>
    )

    const link = screen.getByText('🥑')
    expect(link).toHaveAttribute('id')
    expect(link).toHaveAttribute('id', 'link-id')
  })

  test('target="_blank"', () => {
    renderWithTheme(
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

    expect(screen.getByText('🍕')).toHaveAttribute('rel', 'pizza')
    expect(screen.getByText('🥑')).toHaveAttribute('rel', 'noopener noreferrer')
    expect(screen.getByText('🍕🥑')).toHaveAttribute(
      'rel',
      'pizza noopener noreferrer'
    )
  })

  test('dangerouslyDisableRel', () => {
    renderWithTheme(
      <Link href="/otherPage" dangerouslyDisableRel target="_blank">
        Local Link
      </Link>
    )

    const link = screen.getByText('Local Link')
    expect(link).not.toHaveAttribute('rel')
  })

  test('External', () => {
    renderWithTheme(
      <Link href="https://looker.com" isExternal>
        External Link
      </Link>
    )

    const link = screen.getByText('External Link')
    expect(link).toHaveAttribute('rel', 'external noreferrer')
  })
})
