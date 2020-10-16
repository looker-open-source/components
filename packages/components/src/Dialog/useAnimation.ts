/*

 MIT License

 Copyright (c) 2020 Looker Data Sciences, Inc.

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

import { transitions } from '@looker/design-tokens'
import { useEffect, useState } from 'react'

type Entering = 'entering'
type Entered = 'entered'
type Exiting = 'exiting'
type Exited = 'exited'

type AnimationStates = Entering | Entered | Exiting | Exited

const busyStates = ['entering', 'exiting']

interface UseAnimationStateReturn {
  /**
   * className will transition from 'entering` => `entered` => `exiting` => `exited`
   */
  className: string
  /**
   * renderDOM indicates whether or not the DOM elements to be associated should
   * be rendered.
   */
  renderDOM: boolean
  /**
   * Animation is actively running (use to trigger `aria-busy` application)
   */
  busy: boolean
}

/**
 *
 * Hook that encapsulates timing behavior to allow for CSS transitions to complete before DOM elements are
 * removed from the DOM as well as offering classNames to hook transitions to and `busy` response that details
 *
 *
 * @param isOpen - Toggle visibility
 * @param timing - How long does the transition take to complete. Elements will be removed from the DOM once this time is elapsed
 */
export const useAnimationState = (
  isOpen: boolean,
  timing = transitions.moderate
): UseAnimationStateReturn => {
  const [state, setState] = useState<AnimationStates>('exited')

  useEffect(() => {
    /* Short-circuit state changes that don't matter */
    if (!isOpen && state === 'exited') return
    if (isOpen && state === 'entered') return

    if (isOpen) {
      const entering = setTimeout(() => setState('entering'), 0)
      const open = setTimeout(() => setState('entered'), timing)
      return () => {
        clearTimeout(entering)
        clearTimeout(open)
      }
    } else {
      setState('exiting')
      const closed = setTimeout(() => setState('exited'), timing)
      return () => clearTimeout(closed)
    }
  }, [isOpen, state, timing])

  return {
    busy: busyStates.includes(state),
    className: state,
    renderDOM: state !== 'exited',
  }
}
