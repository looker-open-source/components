/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import type {
  FilterTypeMap,
  NumberFilterType,
} from '@looker/filter-expressions'
import { MatchesAdvanced } from '../../MatchesAdvanced'
import { UserAttributes } from '../../UserAttributes'

import { Between } from '../components/Between'
import { MultiInput } from '../components/MultiInput'
import { SingleNumberInput } from '../components/SingleNumberInput'

const Blank = () => ''

const filterTypeToNumberMap: FilterTypeMap<NumberFilterType> = {
  '=': MultiInput,
  '>': SingleNumberInput,
  '<': SingleNumberInput,
  '>=': SingleNumberInput,
  '<=': SingleNumberInput,
  between: Between,
  null: Blank,
  user_attribute: UserAttributes,
}

const filterTypeToNumberMapSingleInput: FilterTypeMap<string> = {
  '=': SingleNumberInput,
}

export const numberFilterTypeToFilter = (
  type: NumberFilterType,
  allowMultipleOptions: boolean,
  isParameterField?: boolean
) => {
  if (
    (!allowMultipleOptions || isParameterField) &&
    filterTypeToNumberMapSingleInput[type]
  ) {
    return filterTypeToNumberMapSingleInput[type]
  }
  return filterTypeToNumberMap[type] || MatchesAdvanced
}
