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

import { css } from 'styled-components'
import { SpacingSizes, Theme } from '@looker/design-tokens'
import { IconSize, IconType } from '../../Icon'

export interface GenerateIndentProps {
  depth: number
  iconSpacing?: boolean
  forceLabelPadding?: boolean
  icon?: IconType
  iconGap: SpacingSizes
  indicatorGap: SpacingSizes
  indicatorSize: IconSize
  theme: Theme
}

export const generateIndent = ({
  depth,
  iconSpacing,
  forceLabelPadding,
  icon,
  iconGap,
  indicatorGap,
  indicatorSize,
  theme,
}: GenerateIndentProps) => {
  const { space, sizes } = theme

  const renderedDepth = forceLabelPadding || iconSpacing ? depth - 1 : depth
  const forceLabelPaddingSpacer =
    forceLabelPadding && icon
      ? `(${sizes[indicatorSize]} + ${space[iconGap]})`
      : '0px'
  const iconSpacingSpacer = iconSpacing
    ? `(${space[iconGap]} - ${space[indicatorGap]})`
    : '0px'

  const indentCalculation = `(${sizes[indicatorSize]} + ${space[indicatorGap]}) * ${renderedDepth} + ${forceLabelPaddingSpacer} + ${iconSpacingSpacer}`

  return css`
    padding-left: calc(${indentCalculation});
  `
}
