/*

 MIT License

 Copyright (c) 2021 Looker Data Sciences, Inc.

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
  SizeLarge,
  SizeMedium,
  SizeSmall,
  SizeXSmall,
  SizeXXSmall,
  variant,
} from '@looker/design-tokens'

/* eslint-disable sort-keys-fix/sort-keys-fix */

export type ButtonBaseSizes =
  | SizeXXSmall
  | SizeXSmall
  | SizeSmall
  | SizeMedium
  | SizeLarge

export type ButtonSizes =
  | SizeXXSmall
  | SizeXSmall
  | SizeSmall
  | SizeMedium
  | SizeLarge

export interface ButtonSizeProps {
  /**
   * Defines the size of the button.
   * @default medium
   */
  size?: ButtonBaseSizes
}

/**
 * Defines known heights of `Button*` and height/width of `IconButton`
 *
 * @private - External use is discouraged
 */
export const buttonSizeMap = {
  xxsmall: 20,
  xsmall: 24,
  small: 28,
  medium: 36,
  large: 44,
}

/* The size of an icon relative to the Button size inside an IconButton */
export const iconButtonIconSizeMap = {
  xxsmall: 'xxsmall',
  xsmall: 'xsmall',
  small: 'small',
  medium: 'small',
  large: 'medium',
}

/* The size of an icon relative to the Button size inside a Button, ButtonOutline and ButtonTransparent */
export const buttonIconSizeMap = {
  xxsmall: 'xxxsmall',
  xsmall: 'xxxsmall',
  small: 'xxsmall',
  medium: 'xsmall',
  large: 'small',
}

export const buttonPadding = (
  hasIcon: boolean,
  size: ButtonBaseSizes | undefined
) => {
  switch (size) {
    case 'xxsmall':
      return 'xsmall'
    case 'xsmall':
      return 'small'
    case 'small':
      return hasIcon ? 'small' : 'large'
    case 'medium':
    case 'large':
    default:
      return hasIcon ? 'medium' : '1.5rem'
  }
}

/* eslint-disable sort-keys-fix/sort-keys-fix */
export const buttonSize = variant({
  prop: 'size',
  variants: {
    xxsmall: {
      fontSize: 'xxsmall',
      height: `${buttonSizeMap.xxsmall}px`,
    },
    xsmall: {
      fontSize: 'xxsmall',
      height: `${buttonSizeMap.xsmall}px`,
    },
    small: {
      fontSize: 'xsmall',
      height: `${buttonSizeMap.small}px`,
    },
    medium: {
      fontSize: 'small',
      height: `${buttonSizeMap.medium}px`,
    },
    large: {
      fontSize: 'large',
      height: `${buttonSizeMap.large}px`,
    },
  },
})
