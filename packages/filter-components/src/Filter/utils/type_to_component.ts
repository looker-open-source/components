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
import type { FilterExpressionType } from '@looker/filter-expressions'
import type { FC } from 'react'
import { DateFilter } from '../components/AdvancedFilter/components/DateFilter'
import { LocationFilter } from '../components/AdvancedFilter/components/LocationFilter'
import { NumberFilter } from '../components/AdvancedFilter/components/NumberFilter'
import { StringFilter } from '../components/AdvancedFilter/components/StringFilter'
import { TierFilter } from '../components/AdvancedFilter/components/TierFilter'
import type { FilterParamProps } from '../types/filter_param_props'

type ComponentMapType = {
  [type in FilterExpressionType]: FC<FilterParamProps<any>>
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
