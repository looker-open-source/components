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

import { useCallback, useState } from 'react'
import { useControlWarn } from './useControlWarn'

// This hook is for when a state value is either controlled internally or externally

export function useControllableState<T>(
  initialValue: T,
  controlledValue?: T,
  controlledCallback?: (value: T) => void,
  controllingProps?: string[],
  name?: string
): [T, (newValue: T) => void] {
  const isControlled = useControlWarn({
    controllingProps: controllingProps || [],
    isControlledCheck: () =>
      controlledValue !== undefined && controlledCallback !== undefined,
    name: name || '',
  })

  const [uncontrolledValue, setUncontrolledValue] = useState(initialValue)
  const value = isControlled ? controlledValue : uncontrolledValue

  const setValue = useCallback(
    (val: T) => {
      if (!isControlled) {
        setUncontrolledValue(val)
      }
      controlledCallback && controlledCallback(val)
    },
    [isControlled, controlledCallback]
  )

  return [value as T, setValue]
}
