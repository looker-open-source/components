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
import styled from 'styled-components'
import {
  color,
  reset,
  space,
  SpaceProps,
  typography,
  TypographyProps,
} from '@looker/design-tokens'
import { badgeSize, BadgeSizeProps } from './size'

interface BadgeProps extends BadgeSizeProps, SpaceProps, TypographyProps {
  children: ReactNode
  /**
   *  @default `palette.purple500`
   **/
  color?: string

  /**
   *  @default false
   **/
  round?: boolean

  /**
   *  @default false
   **/
  transparent?: boolean
}
const BadgeLayout: FC<BadgeProps> = ({ children, color, size, ...props }) => {
  const howRound = () => {
    // if round is passed set it to radius = 100%
  }
  const setTransparent = () => {
    // if transparent flag is passed set back ground to transparent and color to ?
  }
  const badgeColor = () => {
    // if hte color is plain the text should be purple500
    switch (color) {
      case 'warning':
        return 'palette.yellow500'
      case 'positive':
        return 'palette.green500'
      case 'critical':
        return 'palette.red500'
      case 'info':
        return 'palette.blue500'
      case 'neutral':
        return 'palette.grey500'
      case 'plain':
        return 'palette.white'
      default:
        return 'palette.purple500'
    }
  }
  return (
    <span background-color="red" size={size} {...props}>
      {children}
    </span>
  )
}

export const Badge = styled(BadgeLayout)`
  ${reset}

  ${badgeSize}
  ${color}
  ${space}
  ${typography}

  border-radius: ${props => props.theme.radii.medium};
  display: inline-block;
`
// border: 1px solid ${props => props.theme.colors.palette.purple500};
// color: ${props => props.theme.colors.palette.white};

Badge.defaultProps = {
  bg: 'palette.purple500',
  borderColor: 'palette.purple500',
  borderRadius: 'medium', // 4px ?
  color: 'palette.white',
  size: 'small',
}
