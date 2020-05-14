/*

 MIT License

 Copyright (c) 2020 Looker Data Sciences, Inc.

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
import { SpacingSizes, flexbox, FlexboxProps } from '@looker/design-tokens'
import { simpleLayoutCSS, SimpleLayoutProps } from '../utils/simple'

export interface SpaceHelperProps extends SimpleLayoutProps, FlexboxProps {
  /**
   * Amount of space between grid cells
   * @default 'medium'
   */
  gap?: SpacingSizes | 'between' | 'evenly'

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
}

export const defaultSpaceSize = 'medium'

export const spaceCSS = css`
  ${simpleLayoutCSS}
  ${flexbox}

  display: flex;
`

const fauxFlexGap = (space: SpaceHelperProps) => css`
  && > * {
    margin-left: ${({ theme }) => theme.space[space.gap || defaultSpaceSize]};
  }

  ${({ theme }) =>
    space.reverse
      ? `&& > *:last-child { margin-left: ${theme.space.none}; }`
      : `&& > *:first-child { margin-left: ${theme.space.none}; }`}
`

export const Space = styled.div<SpaceHelperProps>`
  ${spaceCSS}
  flex-direction: ${({ reverse }) => (reverse ? 'row-reverse' : 'row')};

  ${({ around }) => around && 'justify-content: space-around;'}
  ${({ between }) => between && 'justify-content: space-between;'}
  ${({ evenly }) => evenly && 'justify-content: space-evenly;'}
  ${({ around, between, evenly }) =>
    !around && !between && !evenly && fauxFlexGap}
`

Space.defaultProps = { alignItems: 'center', width: '100%' }
