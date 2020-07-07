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
import React, { forwardRef, Ref } from 'react'

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

/**
 * `target="_blank" can be used to reverse tab-nab
 * https://owasp.org/www-community/attacks/Reverse_Tabnabbing
 */
const noTabNab = 'noopener noreferrer'

const LinkLayout = forwardRef(
  ({ ...props }: LinkProps, ref: Ref<HTMLAnchorElement>) => {
    const rel =
      props.target === '_blank'
        ? props.rel
          ? `${props.rel} ${noTabNab}`
          : noTabNab
        : props.rel

    return <a {...props} ref={ref} rel={rel} />
  }
)

LinkLayout.displayName = 'LinkLayout'

export const Link = styled(LinkLayout)`
  ${reset}
  ${typography}

  color: ${({ keyColor, theme: { colors } }) =>
    keyColor ? colors.key : colors.link};
  text-decoration: ${({ underline }) => (underline ? 'underline' : 'none')};

  &:focus,
  &:hover,
  &:active,
  &.active,
  &:visited {
    color: ${({ keyColor, theme: { colors } }) =>
      keyColor ? colors.keyInteractive : colors.linkInteractive};
    text-decoration: underline;
  }
`
