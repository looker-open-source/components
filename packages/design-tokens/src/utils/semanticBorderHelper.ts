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

import { css } from 'styled-components'
import { borderRadius } from '../system'
import type { BorderRadiusProps } from '../system'
import type { Colors } from '../color'

type BorderBaseProp = keyof Colors | string
type BorderProp = BorderBaseProp | boolean | 'none'
type BorderPosition = 'bottom' | 'left' | 'right' | 'top' | 'x' | 'y'

export type SemanticBorderProps = BorderRadiusProps & {
  /**
   * Border can be specified as a boolean or a key of the theme colors object.
   * 1px border is applied to all four sides.
   *
   * `true` - will use theme's `ui2` color
   * `false` - will not apply any border
   * `keyof Colors` - will use the color of the key
   */
  border?: BorderProp
  /**
   * A 1px border is applied to the bottom.
   * See `border` property for specifics values that can be specified..
   */
  borderBottom?: BorderProp
  /**
   * A 1px border is applied to the left.
   * See `border` property for specifics values that can be specified..
   */
  borderLeft?: BorderProp
  /**
   * A 1px border is applied to the right.
   * See `border` property for specifics values that can be specified..
   */
  borderRight?: BorderProp
  /**
   * A 1px border is applied to the top.
   * See `border` property for specifics values that can be specified..
   */
  borderTop?: BorderProp
  /**
   * A 1px border is applied to the left & right.
   * See `border` property for specifics values that can be specified..
   */
  borderX?: BorderProp
  /**
   * A 1px border is applied to the top & bottom.
   * See `border` property for specifics values that can be specified..
   */
  borderY?: BorderProp
}

const borderPropertyHelper = (color: BorderBaseProp, property: string) => css`
  ${property}: 1px solid
    ${({ theme }) => theme.colors[color as keyof Colors] || color};
`

const borderPositionHelper = (
  border: BorderProp,
  position?: BorderPosition
) => {
  const color = border === true ? 'ui2' : border
  if (color === 'none' || !color) return null

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
    ${properties.map(property => borderPropertyHelper(color, property))}
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
}: SemanticBorderProps) => css`
  ${border && borderPositionHelper(border)}
  ${borderBottom && borderPositionHelper(borderBottom, 'bottom')}
  ${borderLeft && borderPositionHelper(borderLeft, 'left')}
  ${borderRight && borderPositionHelper(borderRight, 'right')}
  ${borderTop && borderPositionHelper(borderTop, 'top')}
  ${borderX && borderPositionHelper(borderX, 'x')}
  ${borderY && borderPositionHelper(borderY, 'y')}
  ${borderRadius}
`
