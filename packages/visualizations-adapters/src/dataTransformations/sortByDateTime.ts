/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import type { ConfigHelper, CAll } from '../types'
import sortBy from 'lodash/sortBy'

/**
 * Data transformation enforces chronological order on the dataset
 * when dealing with a timeframe-based dataset with a single dimension.
 */

export const sortByDateTime: ConfigHelper<CAll> = ({
  data,
  fields,
  config,
}) => {
  const dimension = fields.dimensions[0]
  const draftData = Array.from(data)
  const isTimeframeDataset =
    fields?.dimensions?.length === 1 && dimension.is_timeframe

  return {
    data: isTimeframeDataset
      ? sortBy(draftData, [(d) => new Date(d[dimension.name])])
      : draftData,
    fields,
    config,
  }
}
