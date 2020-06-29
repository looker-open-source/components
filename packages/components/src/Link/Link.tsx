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

import {
  CompatibleHTMLProps,
  reset,
  typography,
  TypographyProps,
} from '@looker/design-tokens'
import styled from 'styled-components'

export interface LinkProps
  extends CompatibleHTMLProps<HTMLAnchorElement>,
    TypographyProps {
  /**
   * Use the theme `key` color rather than `link`
   * @default false
   */
  keyColor?: boolean

  /**
   * Display underline.
   * NOTE: Underline is displayed when Link has :hover or :focus
   * @default false
   */
  underline?: boolean
}

export const Link = styled.a<LinkProps>`
  ${reset}
  ${typography}

  color: ${({ keyColor, theme: { colors } }) =>
    keyColor ? colors.key : colors.link};
  text-decoration: ${({ underline }) => (underline ? 'underline' : 'none')};

  &:visited {
    /* @TODO - We should probably support this */
  }

  &:focus,
  &:hover {
    color: ${({ keyColor, theme: { colors } }) =>
      keyColor ? colors.key : colors.link};
    text-decoration: underline;
  }

  &:active,
  &.active {
    /* @TODO - We should probably support this */
  }
`
