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

import type { ExtendedStatefulColor } from '@looker/design-tokens'
import type { CSSProperties } from 'react'

export type RippleCallbacks = {
  endBG: () => void
  endFG: () => void
  startBG: () => void
  startFG: () => void
}

export type UseBoundedRippleProps = {
  /**
   * Change the color of the ripple background and foreground
   * @default neutral
   */
  color?: ExtendedStatefulColor
  /**
   * Decimal multiplier, e.g. 1.5.
   * Use for unbounded ripple that needs to extend past element dimensions,
   * don't use with overflow: hidden
   * @default 1
   */
  size?: number
}

export type UseRippleProps = UseBoundedRippleProps & {
  /**
   * Use for elements where the ripple disappears at the edges of
   * a visible rectangle, e.g. a default Button
   * @default false
   */
  bounded?: boolean
  /**
   * Internal use only
   * @private
   */
  width?: number
  /**
   * Internal use only
   * @private
   */
  height?: number
}

export type UseRippleResponse = {
  /**
   * The start and end functions for the background and foreground
   */
  callbacks: RippleCallbacks
  /**
   * The class names used in rippleStyle to trigger the animations
   */
  className: string
  /**
   * ref is only used for bounded ripple, to detect element dimensions
   */
  ref?: (node: HTMLElement | null) => void
  /**
   * style contains CSS variables to control the animation
   */
  style: CSSProperties
}
