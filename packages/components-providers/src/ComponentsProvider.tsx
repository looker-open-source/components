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
import { I18nOptions, I18nProvider } from './I18n'
import { ThemeProvider, ThemeProviderProps } from './ThemeProvider'
import { ExtendComponentsTheme } from './ExtendComponentsProvider'
import { FontFaceLoader } from './FontFaceLoader'
import { StyleDefender } from './StyleDefender'
export interface ComponentsProviderProps
  extends ThemeProviderProps,
    ExtendComponentsTheme {
  i18n?: I18nOptions
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
   * Disables the "StyleDefender"
   *
   * StyledDefender is a utility component that attempts to ensure that a few common
   * styles are injected at any point where @looker/components are injected into the DOM.
   * When taking code-snapshots (a pattern we generally discourage) the `StyleDefender`
   * may be visible in output. Enabling `snapshotMode` disables StyleDefender to narrow
   * snapshot output.
   *
   * @default false
   */
  snapshotMode?: boolean

  /**
   * Prevent automatic injection of a basic CSS-reset into the DOM
   * @deprecated - no longer has any actual effect. Global reset no longer in use.
   * @todo - Remove for 2.x series
   */
  globalStyle?: boolean

  /**
   * Enable style support for IE11
   * @deprecated - no longer has any actual effect, IE11 support no longer requires
   *  specialized implementation with changes to reset implementation
   * @todo - Remove for 2.x series
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
  i18n = {},
  loadFontSources = true,
  loadGoogleFonts = false,
  snapshotMode = false,
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

  const ConditionalStyleDefender = snapshotMode ? Fragment : StyleDefender

  return (
    <HelmetProvider>
      <ThemeProvider {...props} theme={theme}>
        <ConditionalStyleDefender>
          {loadFontSources && <FontFaceLoader />}
          <FocusTrapProvider>
            <ScrollLockProvider>
              <I18nProvider {...i18n}>{children}</I18nProvider>
            </ScrollLockProvider>
          </FocusTrapProvider>
        </ConditionalStyleDefender>
      </ThemeProvider>
    </HelmetProvider>
  )
}
