/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import type { LocationFilterType } from '@looker/filter-expressions';
import type { FilterTypeMap } from '../../../../../types';
import { Blank } from '../../Blank';
import { MatchesAdvanced } from '../../MatchesAdvanced';
import { UserAttributes } from '../../UserAttributes';

import { LocationBox } from '../components/LocationBox';
import { LocationCircle } from '../components/LocationCircle';
import { LocationExact } from '../components/LocationExact';

const filterTypeToLocationMap: FilterTypeMap<LocationFilterType> = {
  location: LocationExact,
  circle: LocationCircle,
  box: LocationBox,
  anyvalue: Blank,
  null: Blank,
  notnull: Blank,
  user_attribute: UserAttributes,
};

export const locationFilterTypeToFilter = (type: LocationFilterType) =>
  filterTypeToLocationMap[type] || MatchesAdvanced;
