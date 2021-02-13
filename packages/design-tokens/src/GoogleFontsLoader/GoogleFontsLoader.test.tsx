/*

 MIT License

 Copyright (c) 2021 Looker Data Sciences, Inc.

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

import { mountWithTheme } from '@looker/components-test-utils'
import React from 'react'
import { theme } from '../theme'
import {
  googleFontParam,
  googleFontUrl,
  GoogleFontsLoader,
} from './GoogleFontsLoader'

describe('GoogleFontsLoader', () => {
  describe('googleFontParam', () => {
    test('basic', () =>
      expect(
        googleFontParam({ family: 'Roboto', italic: false, weights: [100] })
      ).toEqual('Roboto:wght@0,100'))

    test('explicit italic', () =>
      expect(
        googleFontParam({ family: 'Roboto', italic: true, weights: [100] })
      ).toEqual('Roboto:ital,wght@0,100;1,100'))

    test('kitchen sink (italic inferred)', () =>
      expect(
        googleFontParam({ family: 'Roboto', weights: [200, 300] })
      ).toEqual('Roboto:ital,wght@0,200;0,300;1,200;1,300'))
  })

  test('googleFontUrl', () =>
    expect(googleFontUrl(theme)).toEqual(
      'https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&family=Roboto:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&family=Roboto+Mono:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&display=swap'
    ))

  /**
   * This throws a console error due to Styled Component's complain about doing `@import`
   * inside a `createGlobalStyle`
   *
   * This should get rewritten to use React-Helmet (document.head injection)
   */
  xtest('GoogleFontsLoader', () => {
    mountWithTheme(<GoogleFontsLoader />)
    expect(document.head).toMatchInlineSnapshot({})
  })
})
