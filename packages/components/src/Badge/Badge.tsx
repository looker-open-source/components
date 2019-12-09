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

/*
  default color - looker purple
  other colors: red, blue, yellow, white, green, grey
  size (font and diameter): xsmall, small, medium, large
  extra flags: transparent(color: ? ) | round: boolean
 */

import React, { ReactNode, FC } from 'react'
import styled, { css } from 'styled-components'
import {
  border,
  BorderProps,
  color,
  reset,
  space,
  SpaceProps,
  typography,
  TypographyProps,
  CompatibleHTMLProps,
} from '@looker/design-tokens'
import { variant } from 'styled-system'
import { badgeSize, BadgeSizeProps } from './size'

interface BadgeProps
  extends BadgeSizeProps,
    BorderProps,
    SpaceProps,
    TypographyProps,
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
  round?: boolean

  /**
   *  @default false
   **/
  transparent?: boolean
}
const badgeRound = ({ round }: BadgeProps) =>
  round
    ? css`
        border-radius: 50px;
      `
    : ``

const badgeTransparent = ({ transparent }: BadgeProps) =>
  transparent
    ? css`
        background-color: transparent;
        color: inherit;
      `
    : ``

const badgeColor = variant({
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
const BadgeLayout: FC<BadgeProps> = ({ children, ...props }) => {
  return <span {...props}>{children}</span>
}

export const Badge = styled(BadgeLayout)`
  ${reset}

  ${border}
  ${color}
  ${space}
  ${typography}
  ${badgeSize}
  ${badgeColor}
  ${badgeRound}
  ${badgeTransparent}

  display: inline-block;
`

Badge.defaultProps = {
  borderColor: 'palette.purple500',
  borderRadius: 'medium',
  fontWeight: 'semiBold',
  intent: 'default',
  size: 'small',
}
