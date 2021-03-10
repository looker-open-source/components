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
import { Colors } from '@looker/design-tokens'

export interface SemanticBorderProps {
  border?: borderProp
  borderBottom?: borderProp
  borderLeft?: borderProp
  borderRight?: borderProp
  borderTop?: borderProp
  borderX?: borderProp
  borderY?: borderProp
}

type borderProp = boolean | keyof Colors

type BorderPosition = 'bottom' | 'left' | 'right' | 'top' | 'x' | 'y'

const borderPropertyHelper = (color: keyof Colors, property: string) =>
  css`
    ${property}: 1px solid
    ${({ theme }) => theme.colors[color]};
  `

const borderPositionHelper = (
  border: borderProp,
  position?: BorderPosition
) => {
  if (!border) return null
  const color = border === true ? 'ui2' : border
  let properties: string[] = []
  switch (position) {
    case 'x':
      properties = ['border-left', 'border-right']
      break
    case 'y':
      properties = ['border-bottom', 'border-top']
      break
    case undefined:
      return css`
        ${borderPropertyHelper(color, 'border')}
      `
    default:
      properties = [`border-${position}`]
  }

  return css`
    ${properties.map((property) => borderPropertyHelper(color, property))}
  `
}

export const borderHelper = ({
  border,
  borderBottom,
  borderLeft,
  borderRight,
  borderTop,
  borderX,
  borderY,
}: SemanticBorderProps) => {
  return css`
    ${border && borderPositionHelper(border)}
    ${borderBottom && borderPositionHelper(borderBottom, 'bottom')}
    ${borderLeft && borderPositionHelper(borderLeft, 'left')}
    ${borderRight && borderPositionHelper(borderRight, 'right')}
    ${borderTop && borderPositionHelper(borderTop, 'top')}
    ${borderX && borderPositionHelper(borderX, 'x')}
    ${borderY && borderPositionHelper(borderY, 'y')}
  `
}
