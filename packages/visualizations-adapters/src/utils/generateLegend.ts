/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import map from 'lodash/map'
import get from 'lodash/get'
import { DEFAULT_EMPTY_FIELDS } from '.'
import type { SDKRecord, CAll, Fields } from '../types'

const ENDASH = '\u2013'

export type Legend = {
  dimension: string
  measure: string
}

export const generateLegend = (
  fields: Fields = DEFAULT_EMPTY_FIELDS,
  config: Partial<CAll>
): Legend => {
  const defaultDimensionLabel = map(
    fields.dimensions,
    (d: SDKRecord) => d.label
  ).join(` ${ENDASH} `)
  const defaultMeasureLabel = map(
    fields.measures,
    (m: SDKRecord) => m.label
  ).join(` ${ENDASH} `)

  return {
    dimension: get(config, 'x_axis_label', defaultDimensionLabel) as string,
    measure: get(config, 'y_axes[0].label', defaultMeasureLabel) as string,
  }
}
