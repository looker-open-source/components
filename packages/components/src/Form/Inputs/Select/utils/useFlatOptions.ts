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
import type {
  FlatOption,
  SelectOptionGroupProps,
  SelectOptionObject,
  SelectOptionProps,
} from '../types'

export const getFlatOptions = (options: SelectOptionProps[]) =>
  options.reduce(
    (
      acc: {
        flatOptions: FlatOption[]
        navigationOptions: SelectOptionObject[]
      },
      option: SelectOptionProps
    ) => {
      const optionAsGroup = option as SelectOptionGroupProps
      if (optionAsGroup.options) {
        // Include the divider
        const groupPseudoOptions = [{}]
        if (optionAsGroup.label) {
          // ...and header as pseudo options for windowing purposes
          groupPseudoOptions.push({ label: optionAsGroup.label })
        }
        return {
          flatOptions: [
            ...acc.flatOptions,
            ...groupPseudoOptions,
            ...optionAsGroup.options,
          ],
          navigationOptions: [
            ...acc.navigationOptions,
            ...optionAsGroup.options,
          ],
        }
      }
      return {
        flatOptions: [...acc.flatOptions, option],
        navigationOptions: [
          ...acc.navigationOptions,
          option as SelectOptionObject,
        ],
      }
    },
    { flatOptions: [], navigationOptions: [] }
  )

/**
 * Takes potentially grouped options and returns 2 arrays of flattened options:
 * 1) flatOptions that includes dividers & headers (used for windowing), and
 * 2) navigationOptions that only includes options with values
 * @param options
 */
export const useFlatOptions = (options?: SelectOptionProps[]) => {
  return useMemo(() => {
    if (!options)
      return { flatOptions: undefined, navigationOptions: undefined }

    return getFlatOptions(options)
  }, [options])
}
