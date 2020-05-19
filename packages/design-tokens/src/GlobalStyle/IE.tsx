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

import React, { FC, useContext } from 'react'
import { ThemeContext } from 'styled-components'
import { fonts, reset } from './GlobalStyle'

const isIE11 =
  typeof window === `undefined` ||
  typeof document === `undefined` ||
  (!!window.MSInputMethodContext &&
    // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
    // @ts-ignore
    !!document.documentMode)

const ieGlobalCSS = (font: string, background: string) => `
  @media screen and (-ms-high-contrast: active),
    screen and (-ms-high-contrast: none) {
    ${fonts(font)}
    ${reset(background)}
  }
`

export const IEGlobalStyle: FC = () => {
  const theme = useContext(ThemeContext)
  if (!isIE11) return null

  return (
    <style>{ieGlobalCSS(theme.fonts.brand, theme.colors.palette.white)}</style>
  )
}
