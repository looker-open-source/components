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
import { variant } from 'styled-system'
import { SpacingSizes, flexbox, FlexboxProps } from '@looker/design-tokens'
import { simpleLayoutCSS, SimpleLayoutProps } from '../utils/simple'

export interface SpaceHelperProps extends SimpleLayoutProps, FlexboxProps {
  /**
   * Amount of space between grid cells
   * @default 'medium'
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
   * @default 'center'
   */
  align?: 'start' | 'center' | 'end'

  /**
   * Stretch items full width of space
   * @default false
   */
  stretch?: boolean
}

export const defaultGap = 'medium'

export const spaceCSS = css`
  ${simpleLayoutCSS}
  ${flexbox}

  display: flex;
`

/**
 * Sadly, there's no way to detect if a browser supports flexbox-gap ("gap" is supported via grid)
 * Chrome 84 will purportedly support flexbox "gap" if it does so we'll look for a fix that allows
 * for specific targeting of that browser as well
 *
 * The `gap` implementation properly adds space between items both horizontally and vertically
 * when `flexGap="gap"` whereas the home-grown version only produces gaps on the horizontal axis.
 *
 */

const flexGap = ({ gap = defaultGap, reverse }: SpaceHelperProps) => css`
  @supports (-moz-appearance: none) {
    gap: ${({ theme: { space } }) => space[gap]};
  }

  @supports not (-moz-appearance: none) {
    && > * {
      margin-right: ${({ theme: { space } }) => space[gap]};
    }

    ${({ theme: { space } }) =>
      reverse
        ? `&& > *:first-child { margin-right: ${space.none}; }`
        : `&& > *:last-child { margin-right: ${space.none}; }`}
  }
`

const verticalAlign = variant({
  prop: 'align',
  variants: {
    center: {
      alignItems: 'center',
    },
    end: {
      alignItems: 'flex-end',
    },
    start: {
      alignItems: 'flex-start',
    },
  },
})

export const Space = styled.div<SpaceHelperProps>`
  ${spaceCSS}
  ${({ stretch }) => !stretch && verticalAlign}
  flex-direction: ${({ reverse }) => (reverse ? 'row-reverse' : 'row')};

  ${({ around }) => around && 'justify-content: space-around;'}
  ${({ between }) => between && 'justify-content: space-between;'}
  ${({ evenly }) => evenly && 'justify-content: space-evenly;'}
  ${({ around, between, evenly }) => !around && !between && !evenly && flexGap}
`

Space.defaultProps = { alignItems: 'center', width: '100%' }
