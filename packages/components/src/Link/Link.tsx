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

import type {
  CompatibleHTMLProps,
  TypographyProps,
} from '@looker/design-tokens'
import { reset, typography, omitStyledProps } from '@looker/design-tokens'
import { Launch } from '@styled-icons/material/Launch'
import omit from 'lodash/omit'
import styled from 'styled-components'
import type { Ref } from 'react'
import React, { forwardRef } from 'react'

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
   * NOTE:
   * When false no underline will be displayed for any pseudo classes
   * When true underline will always be displayed
   * When undefined underline is only displayed when Link has :hover, :focus, :active and :visited
   * @default undefined
   */
  underline?: boolean

  /**
   * Display an icon indicating that the link is to an external resource
   * Also sets `rel="external noreferrer" on generated link.
   * @default false
   */
  isExternal?: boolean

  /**
   * Disable `Link`'s automatic additional of `rel` for `target="_blank" &
   * `isExternal` prop. Use of this is discouraged but may warranted in
   * narrow cases.
   *
   * Use with caution.
   *
   * @default false
   */
  dangerouslyDisableRel?: boolean
}

/**
 * `target="_blank" can be used to reverse tab-nab
 * https://owasp.org/www-community/attacks/Reverse_Tabnabbing
 */

const ExternalLinkIndicator = styled(Launch)`
  height: ${({ theme }) => theme.sizes.xxsmall};
  margin-left: ${({ theme }) => theme.space.u1};
  width: ${({ theme }) => theme.sizes.xxsmall};
`

/**
 * Generate appropriate LinkType based on properties
 *
 * See https://developer.mozilla.org/en-US/docs/Web/HTML/Link_types for context on
 * proper usage.
 */
const generateLinkTypes = ({
  dangerouslyDisableRel,
  isExternal,
  rel,
  target,
}: LinkProps) => {
  if (dangerouslyDisableRel) return rel
  const linkTypes = rel ? rel.split(' ') : []

  if (target === '_blank') {
    linkTypes.push('noopener', 'noreferrer')
  } else if (isExternal) {
    linkTypes.push('external', 'noreferrer')
  }

  return [...new Set(linkTypes)].join(' ')
}

const linkStyleProps = ['keyColor', 'underline']

const LinkLayout = forwardRef(
  (props: LinkProps, ref: Ref<HTMLAnchorElement>) => {
    const { children, isExternal, ...restProps } = props
    const enhancedRel = generateLinkTypes(props)

    return (
      <a
        {...omit(omitStyledProps(restProps), [
          ...linkStyleProps,
          'dangerouslyDisableRel',
        ])}
        ref={ref}
        rel={enhancedRel}
      >
        {children}
        {isExternal && <ExternalLinkIndicator />}
      </a>
    )
  }
)

/**
 * The `<Link />` component renders an `<a>` tag that accepts an `href` property.
 *
 * You can also supply an optional `id` property if you want to give your anchor an id.
 *
 * Link provides built-in protection against "reverse tab-nab"
 * (https://owasp.org/www-community/attacks/Reverse_Tabnabbing)
 * by detecting `target="_blank" and adding the appropriate `rel` attributes to protect
 * against bad behavior.
 */
export const Link = styled(LinkLayout)`
  ${reset}
  ${typography}

  color: ${({ keyColor, theme: { colors } }) =>
    keyColor ? colors.key : colors.link};
  text-decoration: ${({ underline }) =>
    underline === true ? 'underline' : 'none'};

  &[aria-expanded='true'],
  &:focus,
  &:hover,
  &:active,
  &.active,
  &:visited {
    color: ${({ keyColor, theme: { colors } }) =>
      keyColor ? colors.keyInteractive : colors.linkInteractive};
    outline: none;
    text-decoration: ${({ underline }) =>
      underline === false ? 'none' : 'underline'};
  }
`
