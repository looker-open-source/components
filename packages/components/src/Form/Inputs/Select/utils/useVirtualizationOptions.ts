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

import omit from 'lodash/omit'
import { useContext, useMemo, useEffect } from 'react'
import { ComboboxContext, ComboboxMultiContext } from '../../Combobox'
import {
  SelectOptionProps,
  SelectOptionGroupProps,
  SelectOptionObject,
} from '../SelectOptions'
import { ComboboxOptionObject } from '../../Combobox/types'

export function useVirtualizationOptions(
  virtualize: boolean,
  options?: SelectOptionProps[],
  isMulti?: boolean
) {
  // Flatten & convert options to ComboboxOptionObject for TS and to warn if groups are used
  const virtualizationOptions = useMemo(() => {
    if (virtualize && options) {
      const flatOptions: ComboboxOptionObject[] = []
      const ableToVirtualize = options.every((option) => {
        if ((option as SelectOptionGroupProps).options) {
          /* eslint-disable-next-line no-console */
          console.warn(
            'Warning: `virtualize` can only be used when options are not grouped'
          )
          return false
        }
        flatOptions.push(omit(option as SelectOptionObject, 'description'))
        return true
      })
      if (ableToVirtualize) {
        return flatOptions
      }
    }
    return []
  }, [options, virtualize])

  // virtualize disables useAddOptionToContext, need to manage it here for keyboard nav
  const context = useContext(ComboboxContext)
  const contextMulti = useContext(ComboboxMultiContext)
  const contextToUse = isMulti ? contextMulti : context
  const { optionsRef } = contextToUse

  useEffect(() => {
    if (virtualizationOptions.length > 0 && options && optionsRef) {
      optionsRef.current = virtualizationOptions
    }
  }, [options, optionsRef, virtualizationOptions])
}
