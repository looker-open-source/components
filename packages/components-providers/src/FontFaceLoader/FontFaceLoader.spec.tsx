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
import { HelmetProvider } from 'react-helmet-async'
import type { DefaultTheme } from 'styled-components'
import { ThemeProvider } from 'styled-components'
import type { FontSources } from '@looker/design-tokens'
import { render } from '@testing-library/react'
import { fontFacesCSS, FontFaceLoader } from './FontFaceLoader'

HelmetProvider.canUseDOM = false

const fontSources: FontSources = [
  { url: 'http//magic.com' },
  { face: 'Curly', url: 'http//moe.com/curly.ttf' },
]

describe('FontFaceLoader', () => {
  it('Font face with URL', () => {
    expect(fontFacesCSS([fontSources[1]])).toMatchInlineSnapshot(`
      "
      @font-face {
        font-family: Curly;
        src: url('http//moe.com/curly.ttf');
      }"
    `)
  })

  it('URL only (Google font)', () => {
    expect(fontFacesCSS([fontSources[0]])).toMatchInlineSnapshot(`
      "
      @import url(http//magic.com);"
    `)
  })

  it('Multiple fonts', () => {
    expect(fontFacesCSS(fontSources)).toMatchInlineSnapshot(`
      "
      @import url(http//magic.com);

      @font-face {
        font-family: Curly;
        src: url('http//moe.com/curly.ttf');
      }"
    `)
  })

  it('Does nothing if fontSource undefined', () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const context = {} as any

    render(
      <HelmetProvider context={context}>
        <ThemeProvider theme={{} as unknown as DefaultTheme}>
          <FontFaceLoader />
        </ThemeProvider>
      </HelmetProvider>
    )
    expect(context.helmet.style.toString()).toEqual('')
  })

  it('Does nothing if fontSource empty', () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const context = {} as any

    render(
      <HelmetProvider context={context}>
        <ThemeProvider theme={{ themeSources: [] } as unknown as DefaultTheme}>
          <FontFaceLoader />
        </ThemeProvider>
      </HelmetProvider>
    )

    expect(context.helmet.style.toString()).toEqual('')
  })

  it('theme.fontSources has entries', () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const context = {} as any

    render(
      <HelmetProvider context={context}>
        <ThemeProvider
          theme={
            {
              fontSources,
            } as unknown as DefaultTheme
          }
        >
          <FontFaceLoader />
        </ThemeProvider>
      </HelmetProvider>
    )
    // expect(component.find('head').length).toEqual(0)
    expect(context.helmet.style.toString()).toMatchInlineSnapshot(`
      "<style data-rh=\\"true\\" type=\\"text/css\\">
      @import url(http//magic.com);

      @font-face {
        font-family: Curly;
        src: url('http//moe.com/curly.ttf');
      }</style>"
    `)
  })
})
