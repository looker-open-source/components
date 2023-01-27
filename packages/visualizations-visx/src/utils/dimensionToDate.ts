/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import { parseISO } from 'date-fns'
import type { ChartData, Fields } from '@looker/visualizations-adapters'
import { isDateQuery } from './isDateQuery'

export const dimensionToDate = (data: ChartData, fields: Fields) =>
  isDateQuery(fields)
    ? data.map(({ dimension, ...restDatum }) => ({
        dimension: parseISO(dimension),
        ...restDatum,
      }))
    : data
