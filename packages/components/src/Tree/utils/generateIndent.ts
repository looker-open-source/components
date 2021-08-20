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

import type { DensityProp, DensityRamp, Theme } from '@looker/design-tokens'
import { css } from 'styled-components'
import { accordionDimensions } from '../../Accordion2/accordionDimensions'

export type GenerateIndentProps = DensityProp & {
  depth?: number
}

export const generateIndentCalculation = (
  depth: number,
  density: DensityRamp,
  theme: Theme
) => {
  const { space, sizes } = theme
  const { indicatorGap, indicatorSize } = accordionDimensions(density)

  return `calc((${sizes[indicatorSize]} + ${space[indicatorGap]}) * ${depth})`
}

/**
 * Generates an indent for a TreeItem
 * @TODO Once this is rebased onto the `Tree refactor` branch, we need to rethink how assumeIconAlignment
 * handles the "parent Tree with Icon" and "parent Tree without Icon" branching paths
 */
export const generateIndent = ({
  depth = 0,
  density,
}: GenerateIndentProps) => css`
  padding-left: ${({ theme }) =>
    generateIndentCalculation(depth, density || theme.defaults.density, theme)};
`
