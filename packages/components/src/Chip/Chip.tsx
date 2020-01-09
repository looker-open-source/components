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

export type ChipSizes = SizeSmall | SizeMedium | SizeLarge

export interface ChipProps
  extends SpaceProps,
    CompatibleHTMLProps<HTMLSpanElement> {
  children: ReactNode
  /**
   *  @default `default`
   **/
  intent?:
    | 'warning'
    | 'positive'
    | 'critical'
    | 'info'
    | 'neutral'
    | 'plain'
    | 'default'

  /**
   *  @default false
   **/
  rounded?: boolean

  /**
   * Defines the size of Chip diameter.
   * @default "medium"
   */
  size?: ChipSizes
}

/* eslint-disable sort-keys */
const size = variant({
  prop: 'size',
  variants: {
    small: {
      fontSize: 'xxsmall',
      lineHeight: '16px',
      px: 'xxsmall',
    },
    medium: {
      fontSize: 'xsmall',
      lineHeight: '24px',
      px: 'xsmall',
    },
    large: {
      fontSize: 'medium',
      lineHeight: '32px',
      px: 'xsmall',
    },
  },
})

const intent = variant({
  prop: 'intent',
  variants: {
    critical: { bg: 'palette.red500', color: 'palette.white' },
    default: { bg: 'palette.purple500', color: 'palette.white' },
    info: { bg: 'palette.blue500', color: 'palette.white' },
    neutral: { bg: 'palette.charcoal500', color: 'palette.white' },
    plain: { bg: 'palette.white', color: 'palette.purple500' },
    positive: { bg: 'palette.green500', color: 'palette.white' },
    warning: { bg: 'palette.yellow500', color: 'palette.white' },
  },
})
const ChipLayout: FC<ChipProps> = ({ children, ...props }) => {
  return <span {...props}>{children}</span>
}

export const Chip = styled(ChipLayout).attrs({ fontWeight: 'semiBold' })`
  ${reset}

  ${color}
  ${space}
  ${typography}
  ${size}
  ${intent}

  display: inline-flex;
  border-radius: ${props =>
    props.rounded ? '50px' : props.theme.radii.medium};
`

Chip.defaultProps = {
  intent: 'default',
  size: 'medium',
}
