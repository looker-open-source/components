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
  CoreColors,
  FontFamilyChoices,
  generateTheme,
  GlobalStyle,
  GoogleFontsLoader,
  IEGlobalStyle,
  IntentColors,
  theme as defaultTheme,
} from '@looker/design-tokens'
import React, { FC, useMemo } from 'react'
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
   * Load fonts from the Google Fonts CDN if not already available
   * @default false
   */
  loadGoogleFonts?: boolean

  /**
   * Enable style support for IE11
   * @default false
   */
  ie11Support?: boolean

  /**
   * Override default color specifications
   */
  colors?: Partial<CoreColors & IntentColors>
  /**
   * Override default font-family specifications. Specified fonts will have out built-in
   * font-stack appended. Built-in font stacks are designed to provide i18n character
   * support and fallbacks for browsers that can't load webfonts.
   */
  fontFamilies?: Partial<FontFamilyChoices>
}

export const ComponentsProvider: FC<ComponentsProviderProps> = ({
  children,
  globalStyle = true,
  ie11Support = false,
  loadGoogleFonts = false,
  colors,
  fontFamilies,
  ...props
}) => {
  const theme = useMemo(() => {
    return generateTheme(props.theme || defaultTheme, { colors, fontFamilies })
  }, [props.theme, colors, fontFamilies])

  return (
    <ThemeProvider {...props} theme={theme}>
      {globalStyle && <GlobalStyle />}
      {loadGoogleFonts && <GoogleFontsLoader />}
      {ie11Support && <IEGlobalStyle />}
      {children}
    </ThemeProvider>
  )
}
