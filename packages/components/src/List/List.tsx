/*

 MIT License

 Copyright (c) 2019 Looker Data Sciences, Inc.

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

import {
  CompatibleHTMLProps,
  reset,
  space,
  SpaceProps,
  typography,
  TypographyProps,
  PositionProps,
  LayoutProps,
  position,
  layout,
} from '@looker/design-tokens'
import styled from 'styled-components'
import { variant } from 'styled-system'

export interface ListProps
  extends CompatibleHTMLProps<HTMLUListElement | HTMLOListElement>,
    PositionProps,
    LayoutProps,
    SpaceProps,
    TypographyProps {
  /**
   * Specify the type of marker to place next to list items.
   *
   * @default 'none'
   */
  type?: 'none' | 'bullet' | 'number' | 'letter'
  nomarker?: boolean
}

const typeVariant = variant({
  prop: 'type',
  variants: {
    bullet: {
      listStyleType: 'disc',
      pl: 'medium',
    },
    letter: {
      listStyleType: 'upper-alpha',
      pl: 'medium',
    },
    none: {
      listStyleType: 'none',
    },
    number: {
      listStyleType: 'decimal',
      pl: 'medium',
    },
  },
})

export const List = styled.ul.attrs((props: ListProps) => ({
  as: ['letter', 'number'].includes(String(props.type)) ? 'ol' : undefined,
  type: props.nomarker ? 'none' : props.type,
}))<ListProps>`
  ${reset}
  ${typography}
  ${typeVariant}
  ${space}

  ${position}
  ${layout}
`

List.defaultProps = { type: 'none' }
