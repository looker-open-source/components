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

import { useMemo } from 'react'
import {
  SelectOptionGroupProps,
  SelectOptionObject,
  SelectOptionProps,
} from '../types'

export interface UseOptionsToRenderProps {
  start: number
  end: number
  numGroups: number
  flatOptions?: SelectOptionObject[]
  options?: SelectOptionProps[]
}

export const useOptionsToRender = ({
  start,
  end,
  numGroups,
  flatOptions,
  options,
}: UseOptionsToRenderProps) => {
  return useMemo(() => {
    if (!flatOptions) return flatOptions

    if (numGroups === 0) return flatOptions.slice(start, end + 1)

    if (!options || end + 1 - start === flatOptions.length) return options
    // Go through each option, and if it's a group,
    // only return the sub-options that are inside the start/end range
    const optionsToRender: SelectOptionProps[] = []
    let num = 0

    options.every((option) => {
      // We're at the end of the window, break the loop
      if (num > end) return false
      const optionAsGroup = option as SelectOptionGroupProps
      const groupOptions = optionAsGroup.options
      if (groupOptions) {
        // Is the whole group before the window?
        const groupLength = groupOptions.length
        if (num + groupLength > start) {
          // Slice from the beginning of the group or the window start
          // whichever is greater
          const sliceStart = start > num ? start - num : 0
          const sliceEnd = end + 1 - num

          const groupOptionsToRender = groupOptions.slice(sliceStart, sliceEnd)

          optionsToRender.push({
            label: option.label,
            options: groupOptionsToRender,
          })
        }
        // Move ahead by the number of options in the group
        // plus 2 for group divider & label
        num += groupOptions.length + 2
      } else {
        // Non-group – add the option and move ahead by 1
        if (num > start) {
          optionsToRender.push(option)
        }
        num++
      }
      // Keep the loop running
      return true
    })

    return optionsToRender
  }, [start, end, numGroups, flatOptions, options])
}
