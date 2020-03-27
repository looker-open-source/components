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

import { useRef, Ref } from 'react'
import { useCallbackRef } from '../../../../utils'
import { ComboboxOptionObject } from '../types'

export function useComboboxRefs(forwardedRef: Ref<HTMLDivElement>) {
  // Need this to get the menu width
  const [wrapperElement, ref] = useCallbackRef<HTMLDivElement>(forwardedRef)
  // We store the values of all the ComboboxOptions on this ref. This makes it
  // possible to perform the keyboard navigation from the input on the list. We
  // manipulate this array through context so that we don't have to enforce a
  // parent/child relationship between ComboboxList and ComboboxOption with
  // cloneElement or fall back to DOM traversal. It's a new trick for me and
  // I'm pretty excited about it.
  const optionsRef = useRef<ComboboxOptionObject[]>([])

  const popoverRef = useRef<HTMLDivElement>(null)

  // When <ComboboxInput autoComplete={false} /> we don't want cycle back to
  // the user's value while navigating (because it's always the user's value),
  // but we need to know this in useKeyDown which is far away from the prop
  // here, so we do something sneaky and write it to this ref on context so we
  // can use it anywhere else 😛. Another new trick for me and I'm excited
  // about this one too!
  const autoCompletePropRef = useRef(true)
  const readOnlyPropRef = useRef(false)

  const persistSelectionPropRef = useRef(false)
  const closeOnSelectPropRef = useRef(true)

  return {
    autoCompletePropRef,
    closeOnSelectPropRef,
    optionsRef,
    persistSelectionPropRef,
    popoverRef,
    readOnlyPropRef,
    ref,
    wrapperElement,
  }
}
