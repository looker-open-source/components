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
  reset,
  SizeLarge,
  SizeMedium,
  SizeSmall,
  space,
  SpaceProps,
  typography,
  CompatibleHTMLProps,
} from '@looker/design-tokens'
import React, { ReactNode, FC } from 'react'
import styled from 'styled-components'
import { variant } from 'styled-system'

export type BadgeSizes = SizeSmall | SizeMedium | SizeLarge

export interface BadgeProps
  extends SpaceProps,
    CompatibleHTMLProps<HTMLSpanElement> {
  children: ReactNode
  /**
   *  @default `default`
   **/
  intent?:
    | 'warn'
    | 'positive'
    | 'critical'
    | 'inform'
    | 'neutral'
    | 'plain'
    | 'key'
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

const intent = variant({
  prop: 'intent',
  variants: {
    critical: { bg: 'criticalAccent', color: 'criticalInteractive' },
    key: { bg: 'keyAccent', color: 'keyPressed' },
    inform: { bg: 'palette.blue100', color: 'palette.blue600' },
    neutral: { bg: 'neutralAccent', color: 'neutralPressed' },
    plain: { bg: 'keyText', color: 'keyInteractive' },
    positive: { bg: 'palette.green100', color: 'palette.green700' },
    warn: { bg: 'palette.yellow100', color: 'palette.yellow900' },
  },
})

const BadgeLayout: FC<BadgeProps> = ({ children, ...props }) => {
  return <span {...props}>{children}</span>
}

export const Badge = styled(BadgeLayout).attrs({ fontWeight: 'semiBold' })`
  ${reset}

  ${color}
  ${space}
  ${typography}
  ${size}
  ${intent}

  display: inline-flex;
  border-radius:50px;
`

Badge.defaultProps = {
  intent: 'key',
  size: 'medium',
}
