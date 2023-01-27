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

import type { ExtendedStatefulColor } from '@looker/design-tokens'
import type { CSSProperties, Ref } from 'react'

export type RippleCallbacks = {
  endBG: () => void
  endFG: () => void
  startBG: () => void
  startFG: () => void
}

export type UseRippleBaseProps = {
  /**
   * An existing class name to merge with the ripple class name
   */
  className?: string
  /**
   * Existing styles to merge with the ripple styles (css vars)
   */
  style?: CSSProperties
  /**
   * Change the color of the ripple background and foreground
   * @default neutral
   */
  color?: ExtendedStatefulColor | 'background'
  /**
   * Decimal multiplier, e.g. 1.5.
   * Use for unbounded ripple that needs to extend past element dimensions,
   * don't use with overflow: hidden
   * @default 1
   */
  size?: number
}

export type UseBoundedRippleProps<T extends HTMLElement = HTMLElement> =
  UseRippleBaseProps & {
    /**
     * Existing ref to wrap
     */
    ref?: Ref<T>
  }

export type UseRippleProps = UseRippleBaseProps & {
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
   * style contains CSS variables to control the animation
   */
  style: CSSProperties
}

export type UseBoundedRippleResponse<T extends HTMLElement = HTMLElement> =
  UseRippleResponse & {
    /**
     * ref used for measuring the element for correct ripple sizing
     */
    ref: (node: T | null) => void
  }
