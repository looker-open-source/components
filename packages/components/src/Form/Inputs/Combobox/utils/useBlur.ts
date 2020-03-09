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

// Much of the following is pulled from https://github.com/reach/reach-ui
// because their work is fantastic (but is not in TypeScript)
import { useContext } from 'react'
import { ComboboxContext } from '../ComboboxContext'
import { ComboboxActionType, ComboboxState } from './state'

export function useBlur() {
  const { state, transition, popoverRef, inputElement } = useContext(
    ComboboxContext
  )

  return function handleBlur() {
    requestAnimationFrame(() => {
      // we on want to close only if focus rests outside the select
      const popoverCurrent = popoverRef ? popoverRef.current : null
      if (document.activeElement !== inputElement && popoverCurrent) {
        if (popoverCurrent && popoverCurrent.contains(document.activeElement)) {
          // focus landed inside the select, keep it open
          if (state !== ComboboxState.INTERACTING) {
            transition && transition(ComboboxActionType.INTERACT)
          }
        } else {
          // focus landed outside the select, close it.
          transition && transition(ComboboxActionType.BLUR)
        }
      }
    })
  }
}
