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

import { Context, useEffect, useRef, useContext } from 'react'
import {
  ComboboxContextProps,
  ComboboxMultiContextProps,
} from '../ComboboxContext'

export function useAddOptionToContext<
  CProps extends ComboboxContextProps | ComboboxMultiContextProps
>(
  context: Context<CProps>,
  value: string,
  label?: string,
  scrollIntoView?: boolean
) {
  const { optionsRef } = useContext(context)
  const indexRef = useRef<number>(-1)

  useEffect(() => {
    const option = { label, scrollIntoView, value }
    const optionsRefCurrent = optionsRef && optionsRef.current
    if (optionsRefCurrent) {
      // Was this option already in the list?
      // If so, re-insert it at the same spot
      if (indexRef.current > -1) {
        optionsRefCurrent.splice(indexRef.current, 0, option)
      } else {
        optionsRefCurrent.push(option)
      }
    }
    return () => {
      // Delete option from the array but save the index so it can be re-inserted there
      if (optionsRefCurrent) {
        const index = optionsRefCurrent.indexOf(option)
        indexRef.current = index
        optionsRefCurrent.splice(index, 1)
      }
    }
  }, [value, label, optionsRef, scrollIntoView])
}
