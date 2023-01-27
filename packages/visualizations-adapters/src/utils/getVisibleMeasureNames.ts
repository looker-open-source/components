/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import isArray from 'lodash/isArray'
import { DEFAULT_EMPTY_FIELDS } from '.'
import type { CCartesian, Fields } from '../types'

/**
 * This function extracts measure names of visible measures from the fields object.
 *
 * @param fields is the Fields response as returned by the SDK
 * @returns an array of strings names
 */

export const getVisibleMeasureNames = (
  fields: Fields = DEFAULT_EMPTY_FIELDS,
  config: CCartesian
): string[] => {
  const { measures = [] } = fields

  const visibleMeasures = measures.filter((measure, index) => {
    /**
     * Because config.series is optional, we need to check for its existence
     * before including it in visibility logic.
     */
    if (config.series) {
      return isArray(config.series)
        ? config?.series?.[index]?.visible
        : config?.series?.[measure.name]?.visible
    }

    /**
     * If we get here, we don't have enough information to hide the given series,
     * so just return true
     */
    return true
  })

  return visibleMeasures.map((measure) => measure.name)
}
