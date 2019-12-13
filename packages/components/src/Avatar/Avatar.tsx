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
  space,
  SpaceProps,
  typography,
  SizeLarge,
  SizeMedium,
  SizeSmall,
  SizeXSmall,
  SizeXXSmall,
} from '@looker/design-tokens'
import { css } from 'styled-components'
import { variant } from 'styled-system'

export type AvatarSizes =
  | SizeXXSmall
  | SizeXSmall
  | SizeSmall
  | SizeMedium
  | SizeLarge

export interface AvatarProps extends SpaceProps {
  className?: string
  /**
   *  @default `palette.purple400`
   **/
  color?: string
  /**
   * Defines the size of the Avatar
   * @default "small"
   */
  size?: AvatarSizes | string
}

/* eslint-disable sort-keys */
const size = variant({
  prop: 'size',
  variants: {
    xxsmall: {
      fontSize: 'xsmall',
      height: '24px',
      width: '24px',
    },
    xsmall: {
      fontSize: 'xsmall',
      height: '32px',
      width: '32px',
    },
    small: {
      fontSize: 'small',
      height: '40px',
      width: '40px',
    },
    medium: {
      fontSize: 'medium',
      height: '54px',
      width: '54px',
    },
    large: {
      fontSize: 'large',
      height: '60px',
      width: '60px',
    },
  },
})

export const avatarCSS = css`
  ${reset}

  ${color}
  ${space}
  ${typography}
  ${size}

  align-items: center;
  border-radius: 100%;
  display: grid;
  justify-items: center;
  overflow: hidden;
`
