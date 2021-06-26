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

import { CompatibleHTMLProps, Transitions } from '@looker/design-tokens'
import { Placement } from '@popperjs/core'
import { Property } from 'csstype'
import { ReactElement, ReactNode } from 'react'
import { MenuDomProps } from '../Menu'

// import { UsePopoverResponseDom } from '../Popover'

export type TooltipRenderProp = (props: UseTooltipResponseDom) => ReactNode

export interface UseTooltipProps {
  /**
   * Specify a callback to be called before trying to close the Tooltip. This allows for
   * use-cases where the user might lose work (think common "Save before closing warning" type flow)
   * Specify a callback to be called each time this Tooltip is closed
   */
  canClose?: () => boolean
  isOpen?: boolean
  /**
   * Can be one of: top, bottom, left, right, auto, with the modifiers: start,
   * end. This value comes directly from popperjs. See
   * https://popper.js.org/popper-documentation.html#Popper.placements for more
   * info.
   */
  placement?: Placement
  /**
   * Content to display inside the tooltip. Can be a string or JSX.
   * If not defined, the Tooltip will not render.
   * I18n recommended: content that is user visible should be treated for i18n
   */
  content?: ReactNode
  /**
   * Specify a fixed content width.
   * @default auto
   */
  width?: string
  /**
   * Specify a fixed max-width.
   * @default none
   */
  maxWidth?: string
  /**
   * Specify the text alignment within tooltips.
   * @default center
   */
  textAlign?: Property.TextAlign

  /**
   * The id of the span containing the tooltip text (if absent, a random id will be generated)
   */
  id?: string

  /**
   * Tooltip background and text color is inverted from the page default
   * @default true
   * @private
   */
  invert?: boolean

  /**
   * The trigger element ref to use (if absent, one will be created and returned)
   */
  triggerElement?: HTMLElement | null

  /**
   * If true, the useTooltip hook will return nothing
   */
  disabled?: boolean

  /**
   * Delay
   */
  delay?: Transitions
}

type UseTooltipCallbacks = Required<
  Pick<
    CompatibleHTMLProps<HTMLElement>,
    'onBlur' | 'onFocus' | 'onMouseOut' | 'onMouseOver'
  >
>

export type UseTooltipResponseDom = UseTooltipCallbacks &
  Pick<CompatibleHTMLProps<HTMLElement>, 'aria-describedby' | 'className'>
export interface TooltipProps extends UseTooltipProps, Partial<MenuDomProps> {
  content: ReactNode
  /**
   * Component to receive tooltip behavior or render prop function that
   * receives tooltip props and returns a component
   */
  children:
    | ReactElement<UseTooltipResponseDom & MenuDomProps>
    | TooltipRenderProp
}
