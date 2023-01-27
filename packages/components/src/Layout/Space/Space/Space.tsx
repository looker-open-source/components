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

import styled, { css } from 'styled-components'
import type { FlexboxProps, SpacingSizes } from '@looker/design-tokens'
import { flexbox, shouldForwardProp } from '@looker/design-tokens'
import type { CommonLayoutProps } from '../../utils/common'
import { commonLayoutCSS } from '../../utils/common'

export interface SpaceHelperProps
  extends CommonLayoutProps,
    Omit<
      FlexboxProps,
      'alignItems' | 'display' | 'flexDirection' | 'justifyContent'
    > {
  /**
   * Amount of space between grid cells
   * @default medium
   */
  gap?: SpacingSizes

  /**
   * The spacing between each pair of adjacent items is the same. The empty space before the
   * first and after the last item equals half of the space between each pair of adjacent items.
   * (citation: https://developer.mozilla.org/en-US/docs/Web/CSS/justify-content)
   * @default false
   */
  around?: boolean

  /**
   * The spacing between each pair of adjacent items is the same. The first item is flush with
   * the main-start edge, and the last item is flush with the main-end edge.
   * (citation: https://developer.mozilla.org/en-US/docs/Web/CSS/justify-content)
   * @default false
   */
  between?: boolean

  /**
   * The spacing between each pair of adjacent items, the main-start edge and the first item,
   * and the main-end edge and the last item, are all exactly the same.
   * (citation: https://developer.mozilla.org/en-US/docs/Web/CSS/justify-content)
   * @default false
   */
  evenly?: boolean

  /**
   * reverse direction of content
   * @default false
   */
  reverse?: boolean
  /**
   * Align items vertically within `Space`
   * @default center
   */
  align?: 'start' | 'center' | 'end' | 'stretch' | 'baseline'

  /**
   * Justify items horizontally within `Space`
   * NOTE: This will by overridden by any of align="stretch", evenly, reverse or between.
   * NOTE: Justification is based on flex-direction so if `reverse=true` this will be "backwards".
   * @default start
   */
  justify?: 'start' | 'center' | 'end'
}

export const defaultGap = 'u4'

const getFlexValue = (value: SpaceHelperProps['align' | 'justify']) =>
  value && ['end', 'start'].includes(value) ? `flex-${value}` : value

const getSpaceValue = ({ around, between, evenly }: SpaceHelperProps) => {
  if (around) return 'space-around'
  if (between) return 'space-between'
  if (evenly) return 'space-evenly'
  return false
}

const justifyContent = ({ align, justify, ...rest }: SpaceHelperProps) => {
  const spaceValue = getSpaceValue(rest)
  if (spaceValue || (justify && align !== 'stretch')) {
    return css`
      justify-content: ${spaceValue || getFlexValue(justify)};
    `
  }
  return false
}

export const spaceCSS = css<SpaceHelperProps>`
  ${commonLayoutCSS}
  ${flexbox}

  display: flex;

  ${({ align }) => align && `align-items: ${getFlexValue(align)};`}
  ${justifyContent}
`

export const Space = styled.div
  .withConfig({ shouldForwardProp })
  .attrs<SpaceHelperProps>(({ align = 'center', width = '100%' }) => ({
    align,
    width,
  }))<SpaceHelperProps>`
  ${spaceCSS}
  flex-direction: ${({ reverse }) => (reverse ? 'row-reverse' : 'row')};
  /* gap throws off spacing for around & evenly */
  ${({ around, evenly, gap = defaultGap, theme: { space } }) =>
    !around && !evenly && `gap: 0 ${space[gap]};`}
`
