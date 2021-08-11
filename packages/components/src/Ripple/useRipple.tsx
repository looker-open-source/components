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

import { useMeasuredElement, useCallbackRef } from '../utils'
import {
  RippleAnimationValues,
  RippleCallbacks,
  RippleColorProps,
} from './types'
import { useRippleState } from './useRippleState'
import { useRippleStateBG } from './useRippleStateBG'

export type UseRippleProps = RippleColorProps & {
  /**
   * Use for elements where the ripple disappears at the edges of
   * a visible rectangle, e.g. a default Button
   */
  bounded?: boolean
}

export type UseRippleResponse = RippleAnimationValues & {
  callbacks: RippleCallbacks
  className: string
  ref?: (node: HTMLElement | null) => void
}

const getMinMaxDimensions = (width: number, height: number) => {
  const min = Math.min(width, height)
  const max = Math.max(width, height)
  return [min, max]
}

const getRippleScaleRange = (
  min: number,
  max: number,
  bounded?: boolean
): [number, number] => {
  // For squares it looks best to start the ripple very small
  const start = 0.1
  if (bounded) {
    // For rectangles it looks better to start at the size of the smaller dimension
    // which is 1 because of how size is calculated
    const startBounded = min === max ? start : 1
    // The ripple needs to spread past all corners, use hypotenuse as the
    // final diameter, and start at 1 to make the animation less jarring
    return [startBounded, Math.hypot(min, max) / min]
  }
  // Start small and expand to the full size
  return [start, 1]
}

const getRippleOffset = (min: number, max: number, bounded?: boolean) => {
  if (!bounded || min === max) {
    return '0, 0'
  }
  // If the element is rectangular, adjust the center of the ripple
  // further along the larger dimension
  // NOTE: Currently only works for a horizontal rectangle like a Button
  const offset = max / 2 - min / 2
  return `${offset}px, 0`
}

export const useRipple = ({ bounded }: UseRippleProps): UseRippleResponse => {
  // ref is actually only used for bounded, when dimensions are needed
  // otherwise ref is wasteful since it triggers a state update & re-render
  const [element, ref] = useCallbackRef()
  const [{ width, height }] = useMeasuredElement(element)

  // Get values for animation – bounded uses dimensions, otherwise they're static
  const [min, max] = getMinMaxDimensions(width, height)
  const rippleScaleRange = getRippleScaleRange(min, max, bounded)
  const rippleOffset = getRippleOffset(min, max, bounded)

  // Background (hover, focus) and foreground (press) ripple states
  const { start: startBG, end: endBG, className: bgClass } = useRippleStateBG()
  const { start: startFG, end: endFG, className: fgClass } = useRippleState()

  return {
    // Functions to be called from event handlers
    // Use useRippleHandlers for most common mapping
    callbacks: {
      endBG,
      endFG,
      startBG,
      startFG,
    },
    // Props to be applied to the same element that gets rippleStyle
    className: `${bgClass} ${fgClass}`,
    // bounded needs to get the element size
    ref: bounded ? ref : undefined,
    rippleOffset,
    rippleScaleRange,
    // bounded needs an explicit size, otherwise just fill the whole area
    rippleSize: bounded ? `${min}px` : '100%',
  }
}
