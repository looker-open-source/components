/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import type { NumberFilterType } from '@looker/filter-expressions';
import type { FilterTypeMap } from '../../../../../types';
import { Blank } from '../../Blank';
import { MatchesAdvanced } from '../../MatchesAdvanced';
import { UserAttributes } from '../../UserAttributes';

import { Between } from '../components/Between';
import { MultiInput } from '../components/MultiInput';
import { SingleNumberInput } from '../components/SingleNumberInput';

const filterTypeToNumberMap: FilterTypeMap<NumberFilterType> = {
  '=': MultiInput,
  '>': SingleNumberInput,
  '<': SingleNumberInput,
  '>=': SingleNumberInput,
  '<=': SingleNumberInput,
  between: Between,
  null: Blank,
  user_attribute: UserAttributes,
};

const filterTypeToNumberMapSingleInput: FilterTypeMap<string> = {
  '=': SingleNumberInput,
};

export const numberFilterTypeToFilter = (
  type: NumberFilterType,
  allowMultipleOptions: boolean,
  isParameterField?: boolean
) => {
  if (
    (!allowMultipleOptions || isParameterField) &&
    filterTypeToNumberMapSingleInput[type]
  ) {
    return filterTypeToNumberMapSingleInput[type];
  }
  return filterTypeToNumberMap[type] || MatchesAdvanced;
};
