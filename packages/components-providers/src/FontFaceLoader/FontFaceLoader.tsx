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

import React, { useContext } from 'react'
import { Helmet } from 'react-helmet-async'
import { ThemeContext } from 'styled-components'
import { FontSources } from '@looker/design-tokens'

export const fontFacesCSS = (fontSources: FontSources) =>
  fontSources
    .map(({ face, url }) => (face ? fontFace(face, url) : importFont(url)))
    .join('\n')

export const importFont = (url: string) => `
@import url(${url});`

export const fontFace = (face: string, url: string) => `
@font-face {
  font-family: ${face};
  src: url(${url});
}`

/**
 * FontFaceLoader injects font @font-face imports into a style tag on the page's <HEAD>
 * Font sources are determined using the fontSources key on the theme
 */
export const FontFaceLoader = () => {
  const { fontSources } = useContext(ThemeContext)

  if (!fontSources || fontSources.length === 0) return null

  const css = fontFacesCSS(fontSources)

  return (
    <Helmet>
      <style type="text/css">{css}</style>
    </Helmet>
  )
}
