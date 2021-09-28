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

import type { CompatibleHTMLProps } from '@looker/design-tokens'
import type { MouseEvent, ReactNode } from 'react'
import type { SimpleLayoutProps } from '../../../Layout/utils/simple'
import type { IconType } from '../../../Icon'
import type { InputProps, InputTextTypeProps } from '../InputProps'

export type DivMouseHandler = (e: MouseEvent<HTMLDivElement>) => void

export type InputTextBaseProps = Omit<SimpleLayoutProps, 'size'> &
  Omit<InputProps, 'type'> &
  InputTextTypeProps &
  // Mouse event handlers are attached to the wrapper div
  Pick<
    CompatibleHTMLProps<HTMLDivElement>,
    | 'onClick'
    | 'onMouseDown'
    | 'onMouseEnter'
    | 'onMouseLeave'
    | 'onMouseOver'
    | 'onMouseOut'
    | 'onMouseUp'
  > & {
    /**
     * Allows the input width to resize with the value or placeholder
     * Styles will default to `width: auto` and `display: inline-flex`
     * Do not use with children
     */
    autoResize?: boolean
  }

export type InputTextProps = InputTextBaseProps & {
  /**
   * Content to place after the input
   * If a string is used, formatting will be automatically applied
   * If JSX is used, it will displace the built-in validation icon
   */
  after?: ReactNode
  iconAfter?: IconType

  /**
   * Content to place before the input
   * If a string is used, formatting will be automatically applied
   */
  before?: ReactNode
  iconBefore?: IconType
}
