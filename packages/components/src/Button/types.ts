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

import type {
  CompatibleHTMLProps,
  StatefulColor,
  MaxWidthProps,
  MinWidthProps,
  SpaceProps,
  WidthProps,
} from '@looker/design-tokens'
import type { IconType } from '../Icon'
import type { ButtonSizeProps, ButtonSizes } from './size'

export interface ButtonIconProps {
  iconBefore?: IconType
  iconAfter?: IconType
}

export interface ButtonColorProps {
  /**
   * Defines the color of the button. Can be the string name of a color listed in the color theme, or a color object.
   * @default key
   */
  color?: StatefulColor
}
export interface ButtonBaseProps
  extends Omit<CompatibleHTMLProps<HTMLButtonElement>, 'type'>,
    ButtonSizeProps,
    ButtonColorProps,
    MaxWidthProps,
    MinWidthProps,
    WidthProps,
    SpaceProps {
  type?: 'button' | 'submit' | 'reset'
}

export interface ButtonProps extends ButtonBaseProps, ButtonIconProps {
  /**
   * prop for internal used to support correct color on Button's ripple.
   */
  rippleBackgroundColor?: 'background'
  size?: ButtonSizes
  /**
   * If true, the button's width will be set to 100%.
   */
  fullWidth?: boolean
}
