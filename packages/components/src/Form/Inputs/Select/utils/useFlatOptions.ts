/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
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
