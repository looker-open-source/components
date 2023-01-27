/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import type { Fields } from '@looker/visualizations-adapters'

export const isDateQuery = (fields: Fields) =>
  fields.dimensions.length === 1 && fields.dimensions[0].is_timeframe
