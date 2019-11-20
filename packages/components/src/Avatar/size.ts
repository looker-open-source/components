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

import { SizeLarge, SizeMedium, SizeSmall } from '@looker/design-tokens'
import { variant } from 'styled-system'

export type AvatarSizes = SizeSmall | SizeMedium | SizeLarge

export interface AvatarSizeProps {
  /**
   * Defines the size of the button.
   * @default "large"
   */
  size?: AvatarSizes
}

/*
  icon sizes:
    small: 9.6,
    medium: 12.8,
    large: 16,
*/

/* eslint-disable sort-keys */
export const avatarSize = variant({
  prop: 'size',
  variants: {
    small: {
      fontSize: 'xsmall',
      height: '24px',
      icon: '9.6',
      width: '24px',
    },
    medium: {
      fontSize: 'medium',
      height: '32px',
      icon: '12.8',
      width: '32px',
    },
    large: {
      fontSize: 'large',
      height: '40px',
      icon: '16',
      width: '40px',
    },
  },
})
