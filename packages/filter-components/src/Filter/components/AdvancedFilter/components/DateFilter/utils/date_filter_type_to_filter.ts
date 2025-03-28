/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import type { ElementType } from 'react';
import type { DateFilterType } from '@looker/filter-expressions';
import defaultTo from 'lodash/defaultTo';
import type { FilterTypeMap } from '../../../../../types';
import { Blank } from '../../Blank';
import { MatchesAdvanced } from '../../MatchesAdvanced';
import { UserAttributes } from '../../UserAttributes';
import { BeforeAfter } from '../components/BeforeAfter';
import { DateRange } from '../components/DateRange';
import { OnDate } from '../components/OnDate';
import { Past } from '../components/Past';
import { Relative } from '../components/Relative';
import { ThisNextLast } from '../components/ThisNextLast';
import { Year } from '../components/Year';
import { YearMonth } from '../components/YearMonth';

const filterTypeToDateMap: FilterTypeMap<DateFilterType> = {
  null: Blank,
  anyvalue: Blank,
  notnull: Blank,
  past: Past,
  pastAgo: MatchesAdvanced,
  day: MatchesAdvanced,
  this: ThisNextLast,
  next: ThisNextLast,
  last: ThisNextLast,
  year: Year,
  month: YearMonth,
  before: BeforeAfter,
  after: BeforeAfter,
  range: DateRange,
  thisRange: MatchesAdvanced,
  on: OnDate,
  relative: Relative,
  user_attribute: UserAttributes,
};

export const dateFilterTypeToFilter = (type: DateFilterType): ElementType =>
  defaultTo(filterTypeToDateMap[type], MatchesAdvanced);
