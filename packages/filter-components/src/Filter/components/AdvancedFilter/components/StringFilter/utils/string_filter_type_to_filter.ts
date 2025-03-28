/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import type { ElementType } from 'react';
import type { StringFilterType } from '@looker/filter-expressions';
import type { FilterTypeMap } from '../../../../../types';
import defaultTo from 'lodash/defaultTo';
import { Blank } from '../../Blank';
import { MatchesAdvanced } from '../../MatchesAdvanced';
import { UserAttributes } from '../../UserAttributes';

import { MultiStringInput } from '../components/MultiStringInput';
import { StringInput } from '../components/StringInput';

const filterTypeToStringMap: FilterTypeMap<StringFilterType> = {
  null: Blank,
  contains: MultiStringInput,
  match: MultiStringInput,
  startsWith: MultiStringInput,
  endsWith: MultiStringInput,
  blank: Blank,
  user_attribute: UserAttributes,
};

const filterTypeToStringMapSingleValue: FilterTypeMap<string> = {
  contains: StringInput,
  match: StringInput,
  startsWith: StringInput,
  endsWith: StringInput,
};

export const stringFilterTypeToFilter = (
  type: StringFilterType,
  isParameterField?: boolean,
  allowMultipleValues?: boolean
): ElementType => {
  if (
    (!allowMultipleValues || isParameterField) &&
    filterTypeToStringMapSingleValue[type]
  ) {
    return filterTypeToStringMapSingleValue[type];
  }
  return defaultTo(filterTypeToStringMap[type], MatchesAdvanced);
};
