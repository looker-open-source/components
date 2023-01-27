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
import { screen } from '@testing-library/react'
import { Space } from './Space'

const content = (
  <>
    <div>one</div>
    <div>two</div>
    <div>three</div>
    <div>four</div>
  </>
)

describe('Space', () => {
  test('reversed', () => {
    renderWithTheme(
      <Space reverse data-testid="space">
        {content}
      </Space>
    )
    expect(screen.getByTestId('space')).toHaveStyleRule(
      'flex-direction',
      'row-reverse'
    )
  })

  test('around + gap (all you get is around)', () => {
    renderWithTheme(
      <Space around gap="u10" data-testid="space">
        {content}
      </Space>
    )
    expect(screen.getByTestId('space')).toHaveStyleRule(
      'justify-content',
      'space-around'
    )
  })

  test('around', () => {
    renderWithTheme(
      <Space around data-testid="space">
        {content}
      </Space>
    )
    expect(screen.getByTestId('space')).toHaveStyleRule(
      'justify-content',
      'space-around'
    )
  })

  test('between', () => {
    renderWithTheme(
      <Space between data-testid="space">
        {content}
      </Space>
    )
    expect(screen.getByTestId('space')).toHaveStyleRule(
      'justify-content',
      'space-between'
    )
  })

  test('evenly', () => {
    renderWithTheme(
      <Space evenly data-testid="space">
        {content}
      </Space>
    )
    expect(screen.getByTestId('space')).toHaveStyleRule(
      'justify-content',
      'space-evenly'
    )
  })

  test('align="stretch" overrides justify', () => {
    renderWithTheme(
      <Space justify="end" align="stretch" data-testid="space">
        {content}
      </Space>
    )
    expect(screen.getByTestId('space')).toHaveStyleRule(
      'align-items',
      'stretch'
    )
    expect(screen.getByTestId('space')).not.toHaveStyleRule(
      'justify-content',
      'flex-end'
    )
  })
})
