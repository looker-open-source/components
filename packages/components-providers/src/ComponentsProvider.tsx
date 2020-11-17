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
  generateTheme,
  GlobalStyle,
  GoogleFontsLoader,
  IEGlobalStyle,
  theme as defaultTheme,
} from '@looker/design-tokens'
import React, { FC, useMemo } from 'react'
import { FocusTrapProvider } from './FocusTrap'
import { ScrollLockProvider } from './ScrollLock'
import { ThemeProvider, ThemeProviderProps } from './ThemeProvider'
import { ExtendComponentsTheme } from './ExtendComponentsProvider'

export interface ComponentsProviderProps
  extends ThemeProviderProps,
    ExtendComponentsTheme {
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
}

/**
 * ComponentsProvider registers fundamental infrastructure for @looker/components to
 * initialize its components. Most components assume that they will be wrapped in a
 * <ComponentsProvider> to be able to successfully initialize.
 *
 * It provides a variety of features including
 *   - ThemeProvider
 *   - ScrollLockProvider
 *
 * Optionally, in also includes
 *   - Internet Explorer 11 compatible styles
 *   - Global style registration
 *   - GoogleFont loading
 *
 */
export const ComponentsProvider: FC<ComponentsProviderProps> = ({
  children,
  globalStyle = true,
  ie11Support = false,
  loadGoogleFonts = false,
  themeCustomizations,
  ...props
}) => {
  const theme = useMemo(() => {
    return generateTheme(props.theme || defaultTheme, themeCustomizations)
  }, [props.theme, themeCustomizations])

  return (
    <ThemeProvider {...props} theme={theme}>
      {globalStyle && <GlobalStyle />}
      {loadGoogleFonts && <GoogleFontsLoader />}
      {ie11Support && <IEGlobalStyle />}
      <FocusTrapProvider>
        <ScrollLockProvider>{children}</ScrollLockProvider>
      </FocusTrapProvider>
    </ThemeProvider>
  )
}
