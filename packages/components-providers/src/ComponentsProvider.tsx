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

import {
  GlobalStyle,
  IEGlobalStyle,
  constructFontStack,
  CoreColors,
  theme,
  generateThemeFromCoreColors,
  FontFamilyChoices,
  defaultFonts,
  GoogleFontsLoader,
} from '@looker/design-tokens'
import React, { FC } from 'react'
import { ThemeProvider, ThemeProviderProps } from './ThemeProvider'

/**
 * Currently this is a simple pass-through to our ThemeProvider but it provides
 * the foundation of for hanging other context or setup code that might be needed
 * to stand-up @looker/components (a likely near-future candidate is i18next)
 */

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface ComponentsProviderProps extends ThemeProviderProps {
  /**
   * Prevent automatic injection of a basic CSS-reset into the DOM
   * @default true
   */
  globalStyle?: boolean

  /**
   * Load Google Fonts
   * @default false
   */
  loadGoogleFonts?: boolean

  /**
   * Prevent automatic injection of a basic CSS-reset into the DOM
   * @default false
   */
  ie11Support?: boolean

  /**
   *
   *
   */
  coreColors?: Partial<CoreColors>
  /**
   *
   */
  fontFamilies?: Partial<FontFamilyChoices>
}

export const ComponentsProvider: FC<ComponentsProviderProps> = ({
  children,
  globalStyle = true,
  ie11Support = false,
  coreColors,
  fontFamilies,
  loadGoogleFonts = false,
  ...props
}) => {
  const baseTheme = props.theme || theme

  const generatedTheme = coreColors
    ? generateThemeFromCoreColors(baseTheme, coreColors)
    : baseTheme

  if (fontFamilies) {
    Object.keys(fontFamilies).forEach((key) =>
      fontFamilies[key] === undefined ? delete fontFamilies[key] : {}
    )

    const mergedFonts = {
      ...defaultFonts,
      ...fontFamilies,
    }
    const fonts = constructFontStack(mergedFonts)

    generatedTheme.fonts = fonts
  }

  return (
    <ThemeProvider {...props} theme={generatedTheme}>
      {globalStyle && <GlobalStyle />}
      {loadGoogleFonts && <GoogleFontsLoader />}
      {ie11Support && <IEGlobalStyle />}
      {children}
    </ThemeProvider>
  )
}
