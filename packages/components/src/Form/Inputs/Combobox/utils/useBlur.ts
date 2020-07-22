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

// Much of the following is pulled from https://github.com/reach/reach-ui
// because their work is fantastic (but is not in TypeScript)
import { Context, FocusEvent, useContext } from 'react'
import {
  ComboboxContextProps,
  ComboboxMultiContextProps,
} from '../ComboboxContext'
import { ComboboxActionType, ComboboxState } from './state'

export function useBlur<
  TContext extends
    | ComboboxContextProps
    | ComboboxMultiContextProps = ComboboxContextProps
>(context: Context<TContext>) {
  const { state, transition, listRef, inputElement } = useContext(context)

  return function handleBlur(e: FocusEvent) {
    // we on want to close only if focus rests outside the select
    const popoverCurrent = listRef ? listRef.current : null
    if (e.relatedTarget !== inputElement && popoverCurrent) {
      if (popoverCurrent && popoverCurrent.contains(e.relatedTarget as Node)) {
        // focus landed inside the select, keep it open
        requestAnimationFrame(() => {
          if (state !== ComboboxState.INTERACTING) {
            transition && transition(ComboboxActionType.INTERACT)
          }
        })
        e.preventDefault()
      } else {
        // focus landed outside the select, close it.
        transition && transition(ComboboxActionType.BLUR)
      }
    }
  }
}
