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

import { mountWithTheme } from '@looker/components-test-utils'
import React from 'react'
import { IEGlobalStyle } from './IE'

describe('GlobalStyle', () => {
  test('Not IE', () => {
    mountWithTheme(<IEGlobalStyle />)
    expect(document.head).toMatchInlineSnapshot(`
      <head>
        <style
          data-styled="active"
          data-styled-version="5.2.1"
        />
      </head>
    `)
  })

  test('Faux IE', () => {
    mountWithTheme(<IEGlobalStyle isIE />)
    expect(document.head).toMatchInlineSnapshot(`
      <head>
        <style
          data-styled="active"
          data-styled-version="5.2.1"
        />
        @media screen and (-ms-high-contrast:active), screen and (-ms-high-contrast:none) {

      }

      <style
          data-styled="active"
          data-styled-version="5.2.1"
        >
          @media screen and (-ms-high-contrast:active), screen and (-ms-high-contrast:none){html{box-sizing:border-box;font-size:16px;}*,*::before,*::after{box-sizing:inherit;}body,h1,h2,h3,h4,h5,h6,p,ol,ul{margin:0;padding:0;}ol,ul{list-style:none;}a{-webkit-text-decoration:none;text-decoration:none;}body{background:#FFFFFF;}}
        </style>
      </head>
    `)
  })
})
