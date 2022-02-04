/*

 MIT License

 Copyright (c) 2022 Looker Data Sciences, Inc.

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
  SpaceProps,
  SizeLarge,
  SizeMedium,
  SizeSmall,
  SizeXSmall,
  SizeXXSmall,
} from '@looker/design-tokens'
import type { Placement } from '@popperjs/core'
import type { Property } from 'csstype'
import type { IconProps } from '../Icon'
import type { TooltipProps } from '../Tooltip'
import type { ButtonBaseProps } from './types'
interface IconButtonVariantProps {
  /**
   * Defines the variant or mapping of colors to style properties, like border of the button.
   * @default false
   */
  outline?: boolean
}

export type IconButtonSizes =
  | SizeXXSmall
  | SizeXSmall
  | SizeSmall
  | SizeMedium
  | SizeLarge

export type ToggleColor = 'key' | 'calculation' | 'dimension' | 'measure'

export interface ToggleColorProps {
  /**
   * Change icon and background color when toggled
   * Supports 'calculation', 'dimension', 'measure' and 'key'
   * @default key
   */
  toggleColor?: ToggleColor
}
export interface IconButtonProps
  extends Omit<CompatibleHTMLProps<HTMLButtonElement>, 'children' | 'type'>,
    Omit<ButtonBaseProps, 'color'>,
    IconButtonVariantProps,
    ToggleColorProps,
    Pick<IconProps, 'icon'>,
    SpaceProps {
  type?: 'button' | 'submit' | 'reset'
  /**
   * Display border
   * @default false
   */
  outline?: boolean
  /**
   *  A hidden text label for the IconButton that is accessible to assistive technology
   */
  label: TooltipProps['content']
  /**
   *  Sets the size of the button
   * @default xsmall
   */
  size?: IconButtonSizes
  /**
   *  Optional square icon button variant
   * @default round
   */
  shape?: 'round' | 'square'
  /**
   * If the IconButton is in the optional toggled on or toggled off state
   */
  toggle?: boolean
  /**
   * to improve toggle's behavior this prop will update the background-color to `${toggleColor}Accent` when toggle is true
   * @default false
   */
  toggleBackground?: boolean
  /**
   * By default IconButton shows a Tooltip with the Button's label text. Setting disableTooltip will disable that behavior.
   * @default false
   */

  tooltipDisabled?: boolean
  /**
   * Placement of the built-in Tooltip.
   */
  tooltipPlacement?: Placement
  /**
   * Width of the built-in Tooltip.
   */
  tooltipWidth?: string
  /**
   * Text alignment of the built-in Tooltip.
   */
  tooltipTextAlign?: Property.TextAlign
}
