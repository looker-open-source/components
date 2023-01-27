/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import type { FilterTypeMap } from '@looker/filter-expressions'
import defaultTo from 'lodash/defaultTo'
import type { ElementType } from 'react'
import { MatchesAdvanced } from '../../MatchesAdvanced'

import { MultiStringInput } from '../../StringFilter/components/MultiStringInput'
import { StringInput } from '../../StringFilter/components/StringInput'
import { UserAttributes } from '../../UserAttributes'
import { ParamFilter } from '../components/ParamFilter'

const typeMap: FilterTypeMap = {
  anyvalue: () => '',
  match: MultiStringInput,
  user_attribute: UserAttributes,
}

const typeMapSingleInput: FilterTypeMap = {
  match: StringInput,
}

export const tierFilterTypeToFilter = (
  type: string,
  isParamFilter?: boolean,
  allowMultipleValues?: boolean
): ElementType => {
  if (isParamFilter && type !== 'user_attribute') {
    return ParamFilter
  } else if (!allowMultipleValues && typeMapSingleInput[type]) {
    return typeMapSingleInput[type]
  }
  return defaultTo(typeMap[type], MatchesAdvanced)
}
