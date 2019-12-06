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
   *  @default `plain`
   **/
  intent?: 'warning' | 'positive' | 'critical' | 'info' | 'neutral' | 'plain'

  /**
   *  @default false
   **/
  round?: boolean

  /**
   *  @ false
   **/
  transparent?: boolean
}
const howRound = ({ round }: BadgeProps) => {
  if (round) {
    return css`
      border-radius: 100%;
    `
  }
  return ``
  // if round is passed set it to radius = 100%
}
const setTransparent = ({ transparent }: BadgeProps) => {
  if (transparent) {
    return css`
      background-color: transparent;
      color: inherit;
    `
  }
  return ``
  // if transparent flag is passed set back ground to transparent and color to ?
}
const badgeColor = variant({
  prop: 'intent',
  variants: {
    critical: { bg: 'palette.red500', color: 'palette.white' },
    info: { bg: 'palette.blue500', color: 'palette.white' },
    neutral: { bg: 'palette.charcoal200' },
    plain: { bg: 'palette.purple500', color: 'palette.white' },
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
  ${howRound}
  ${setTransparent}

  display: inline-block;
`
// border: 1px solid ${props => props.theme.colors.palette.purple500};
// color: ${props => props.theme.colors.palette.white};

Badge.defaultProps = {
  borderColor: 'palette.purple500',
  borderRadius: 'medium', // 4px ?
  intent: 'plain',
  size: 'small',
}
