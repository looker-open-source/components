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
import { Grid } from './Grid'

const content = (
  <>
    <div>first</div>
    <div>second</div>
    <div>third</div>
    <div>fourth</div>
  </>
)

describe('Grid', () => {
  test('default', () => {
    renderWithTheme(<Grid data-testid="grid">{content} </Grid>)
    expect(screen.getByTestId('grid')).toHaveStyleRule('display', 'grid')
  })

  test('specified gap', () => {
    renderWithTheme(
      <Grid data-testid="grid" gap="u8">
        {content}
      </Grid>
    )
    expect(screen.getByTestId('grid')).toHaveStyleRule('grid-gap', '2rem')
  })

  test('specified columns', () => {
    renderWithTheme(
      <Grid data-testid="grid" columns={4}>
        {content}
      </Grid>
    )
    expect(screen.getByTestId('grid')).toHaveStyleRule(
      'grid-template-columns',
      'repeat(4,minmax(0,1fr))'
    )
  })

  test('specified width', () => {
    renderWithTheme(
      <Grid data-testid="grid" width="50%">
        {content}
      </Grid>
    )
    expect(screen.getByTestId('grid')).toHaveStyleRule('width', '50%')
  })
})
