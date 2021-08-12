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

import React, { FC, useContext } from 'react'
import { DensityRamp } from '@looker/design-tokens'
import { ThemeContext, ThemeProvider } from 'styled-components'

export type DensityProps = {
  scale: DensityRamp
}

/**
 * Utility component which alters the default density within the theme.
 * Wrap <Density density={1}> around other components to apply the specified
 * density value to all of the nested components.
 *
 * NOTE: If `density` is explicitly specified on a component within `Density`
 * the explicitly specified value will be used instead.
 */
export const Density: FC<DensityProps> = ({ scale, children }) => {
  const theme = useContext(ThemeContext)
  theme.defaults.density = scale

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}

/**
 * Shortcut to `<Density scale={1} />`
 */
export const Density1: FC = (props) => <Density scale={1} {...props} />
/**
 * Shortcut to `<Density scale={0} />`
 */
export const Density0: FC = (props) => <Density scale={0} {...props} />
/**
 * Shortcut to `<Density scale={-1} />`
 */
export const DensityNegative1: FC = (props) => <Density scale={-1} {...props} />
/**
 * Shortcut to `<Density scale={-2} />`
 */
export const DensityNegative2: FC = (props) => <Density scale={-2} {...props} />
/**
 * Shortcut to `<Density scale={-3} />`
 */
export const DensityNegative3: FC = (props) => <Density scale={-3} {...props} />
