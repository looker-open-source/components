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

import { DensityProp, DensityRamp, Theme } from '@looker/design-tokens'
import { css } from 'styled-components'
import { accordionDimensions } from '../../Accordion2/accordionDimensions'
import { listItemDimensions } from '../../ListItem'

export type GenerateIndentProps = DensityProp & {
  assumeIconAlignment?: boolean
  depth?: number
  icon?: boolean
}

const generateIndentCalculation = (
  depth: number,
  density: DensityRamp,
  assumeIconAlignment: boolean,
  icon: boolean,
  theme: Theme
) => {
  const { space, sizes } = theme
  const { iconGap } = listItemDimensions(density)
  const { indicatorGap, indicatorSize } = accordionDimensions(density)

  const renderedDepth = assumeIconAlignment && !icon ? depth - 1 : depth
  const iconSpacingSpacer = assumeIconAlignment
    ? `(${space[iconGap]} - ${space[indicatorGap]})`
    : '0px'

  return `calc((${sizes[indicatorSize]} + ${space[indicatorGap]}) * ${renderedDepth} + ${iconSpacingSpacer})`
}

/**
 * Generates an indent for a TreeItem
 */
export const generateIndent = ({
  assumeIconAlignment = false,
  depth = 0,
  density = 0,
  icon = false,
}: GenerateIndentProps) => css`
  padding-left: ${({ theme }) =>
    generateIndentCalculation(
      depth,
      density,
      assumeIconAlignment,
      icon,
      theme
    )};
`
