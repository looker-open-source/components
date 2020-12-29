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
  color,
  CompatibleHTMLProps,
  generateIntentShade,
  reset,
  SizeLarge,
  SizeMedium,
  SizeSmall,
  space,
  SpaceProps,
  typography,
  intentUIBlend,
} from '@looker/design-tokens'
import React, { forwardRef, ReactNode, Ref } from 'react'
import styled, { css } from 'styled-components'
import { variant } from 'styled-system'

export type BadgeSizes = SizeSmall | SizeMedium | SizeLarge
type BadgeIntent =
  | 'warn'
  | 'positive'
  | 'critical'
  | 'inform'
  | 'neutral'
  | 'key'

export interface BadgeProps
  extends SpaceProps,
    CompatibleHTMLProps<HTMLSpanElement> {
  children: ReactNode
  /**
   *  @default `default`
   **/
  intent?: BadgeIntent

  /**
   * Defines the size of Badge diameter.
   * @default "medium"
   */
  size?: BadgeSizes
}

/* eslint-disable sort-keys-fix/sort-keys-fix */
const size = variant({
  prop: 'size',
  variants: {
    small: {
      fontSize: 'xxsmall',
      lineHeight: '16px',
      px: 'xsmall',
    },
    medium: {
      fontSize: 'xsmall',
      lineHeight: '24px',
      px: 'xsmall',
    },
    large: {
      fontSize: 'medium',
      lineHeight: '32px',
      px: 'small',
    },
  },
})

const BadgeLayout = forwardRef(
  ({ children, ...props }: BadgeProps, ref: Ref<HTMLElement>) => {
    return (
      <span ref={ref} {...props}>
        {children}
      </span>
    )
  }
)

BadgeLayout.displayName = 'BadgeLayout'

const badgeIntent = (intent: BadgeIntent) =>
  css`
    background: ${intentUIBlend(intent, 1)};
    color: ${({ theme: { colors } }) => generateIntentShade(colors[intent])};
  `

export const Badge = styled(BadgeLayout).attrs(
  ({ intent = 'key', size = 'medium' }) => ({
    intent,
    size,
  })
)`
  ${reset}

  border-radius:50px;
  display: inline-flex;
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};

  ${color}
  ${space}
  ${typography}
  ${size}
  ${({ intent }) => badgeIntent(intent)}
`
