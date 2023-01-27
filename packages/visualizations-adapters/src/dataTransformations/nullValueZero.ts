/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import type { CLineBase } from '../adapters'
import type { ConfigHelper } from '../types'
import { getMeasureNames } from '../utils'
import pick from 'lodash/pick'

/**
 * Data transformation replaces all null values with 0 when
 * config.render_null_values is true.
 */

export const nullValueZero: ConfigHelper<CLineBase> = ({
  data,
  fields,
  config,
}) => {
  if (config?.render_null_values) {
    const measureNames = getMeasureNames(fields)
    const draftData = data.map((d) => {
      const measures = Object.entries(pick(d, measureNames)).map(
        ([key, val]) => [key, Number(val)]
      )
      return { ...d, ...Object.fromEntries(measures) }
    })

    return { data: draftData, fields, config }
  }
  return { data, fields, config }
}
