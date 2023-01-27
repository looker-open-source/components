/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import type { ILookmlModelExploreField } from '@looker/sdk'
import type { FilterModel } from './filter_model'
import type { FilterExpressionType } from './filter_type'

export type FilterItemToStringFunction = (
  item: FilterModel,
  filterType?: FilterExpressionType,
  field?: ILookmlModelExploreField | null
) => string
