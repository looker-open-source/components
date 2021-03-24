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

import {
  generateTheme,
  googleFontUrl,
  theme as defaultTheme,
} from '@looker/design-tokens'
import React, { FC, Fragment, useMemo } from 'react'
import { HelmetProvider } from 'react-helmet-async'
import { FocusTrapProvider } from './FocusTrap'
import { ScrollLockProvider } from './ScrollLock'
import { useI18n, UseI18nProps } from './I18n'
import { ThemeProvider, ThemeProviderProps } from './ThemeProvider'
import { ExtendComponentsTheme } from './ExtendComponentsProvider'
import { FontFaceLoader } from './FontFaceLoader'
import { StyleDefender } from './StyleDefender'

export interface ComponentsProviderProps
  extends ThemeProviderProps,
    ExtendComponentsTheme,
    UseI18nProps {
  /**
   * Load any font faces specified on theme.fontSources
   * @default true
   */
  loadFontSources?: boolean
  /**
   * Load fonts from the Google Fonts CDN if not already available
   * @default false
   */
  loadGoogleFonts?: boolean

  /**
   * @default false
   */
  snapshotMode?: boolean
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
  loadFontSources = true,
  loadGoogleFonts = false,
  snapshotMode = false,
  locale,
  resources,
  themeCustomizations,
  ...props
}) => {
  const theme = useMemo(() => {
    const draft = generateTheme(
      props.theme || defaultTheme,
      themeCustomizations
    )

    if (loadGoogleFonts) {
      draft.fontSources = [
        ...(draft.fontSources || []),
        { url: googleFontUrl(draft) },
      ]
    }

    return draft
  }, [props.theme, loadGoogleFonts, themeCustomizations])

  useI18n({ locale, resources })

  const ConditionalStyleDefender = snapshotMode ? Fragment : StyleDefender

  return (
    <HelmetProvider>
      <ThemeProvider {...props} theme={theme}>
        <ConditionalStyleDefender>
          {loadFontSources && <FontFaceLoader />}
          <FocusTrapProvider>
            <ScrollLockProvider>{children}</ScrollLockProvider>
          </FocusTrapProvider>
        </ConditionalStyleDefender>
      </ThemeProvider>
    </HelmetProvider>
  )
}
