/*

 MIT License

 Copyright (c) 2019 Looker Data Sciences, Inc.

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

import { css, createGlobalStyle } from 'styled-components'

const fonts = css`
  @import url('https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700&display=swap');

  body,
  button,
  input,
  textarea,
  select {
    font-family: 'Open Sans', sans-serif;
  }
`

const reset = css`
  * {
    padding: 0;
    box-sizing: border-box;
  }

  ul,
  li,
  p,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0;
  }

  a {
    text-decoration: none;
  }

  html,
  body {
    width: 100%;
    height: 100%;
    margin: 0;
    font-size: 100%;
  }

  body {
    background-color: ${props => props.theme.colors.palette.white};
  }
`

export const GlobalStyle = createGlobalStyle`
  ${fonts}
  ${reset}
`
