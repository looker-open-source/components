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

import { ComponentsProvider } from '@looker/components-providers'
import type { ComponentsProviderProps } from '@looker/components-providers'
import type { RenderOptions } from '@testing-library/react'
import { render } from '@testing-library/react'
import 'jest-styled-components'
import type { ReactElement } from 'react'
import React from 'react'

export const withThemeProvider = (
  Component: ReactElement,
  providerProps?: ComponentsProviderProps
) => (
  <ComponentsProvider disableStyleDefender {...providerProps}>
    {Component}
  </ComponentsProvider>
)

/**
 * Renders a component inside a ComponentsProvider, includes theme and i18n contexts
 * @param Component the component to render
 * @param renderOptions the options to pass to RTL's render function
 * @param providerProps the props to pass to ComponentsProvider
 * @returns
 */
export const renderWithTheme = (
  Component: ReactElement,
  renderOptions?: Omit<RenderOptions, 'queries'>,
  providerProps?: ComponentsProviderProps
) => render(withThemeProvider(Component, providerProps), renderOptions)
