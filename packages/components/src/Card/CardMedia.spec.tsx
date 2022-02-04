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

import React from 'react'
import { screen } from '@testing-library/react'
import { renderWithTheme } from '@looker/components-test-utils'
import { CardMedia } from './CardMedia'

describe('CardMedia', () => {
  test('default', () => {
    const imgUrl = 'http://faux.com/faux-image.jpg'
    renderWithTheme(<CardMedia data-testid="card-media" image={imgUrl} />)
    expect(screen.getByTestId('card-media')).toBeInTheDocument()
    expect(screen.getByTestId('card-media')).toHaveStyle(
      `background-image: url('${imgUrl}')`
    )
  })

  test('color', () => {
    renderWithTheme(
      <CardMedia data-testid="card-media" backgroundColor="key" />
    )
    expect(screen.getByTestId('card-media')).toBeInTheDocument()
    expect(screen.getByTestId('card-media')).toHaveStyle(
      'background-color: rgb(108, 67, 224);'
    )
  })
})
