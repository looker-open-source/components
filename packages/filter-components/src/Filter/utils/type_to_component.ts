/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import type { FilterExpressionType } from '@looker/filter-expressions'
import { DateFilter } from '../components/AdvancedFilter/components/DateFilter'
import { LocationFilter } from '../components/AdvancedFilter/components/LocationFilter'
import { NumberFilter } from '../components/AdvancedFilter/components/NumberFilter'
import { StringFilter } from '../components/AdvancedFilter/components/StringFilter'
import { TierFilter } from '../components/AdvancedFilter/components/TierFilter'
import type { FilterParamProps } from '../types/filter_param_props'
import type { ReactElement } from 'react'

type ComponentMapType = {
  [type in FilterExpressionType]: (props: FilterParamProps<any>) => ReactElement
}

/**
 * A map of available filter types and the grammar properties needed to parse and display
 */
export const componentsMap: ComponentMapType = {
  date: DateFilter,
  date_time: DateFilter,
  number: NumberFilter,
  string: StringFilter,
  tier: TierFilter,
  location: LocationFilter,
}

export const typeToComponent = (type: FilterExpressionType) =>
  componentsMap[type]
