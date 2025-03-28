/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import { Category } from '@looker/sdk';
import type { ILookmlModelExploreField } from '@looker/sdk';
import type { FilterExpressionType } from '@looker/filter-expressions';
import { DateFilter } from '../components/AdvancedFilter/components/DateFilter';
import { LocationFilter } from '../components/AdvancedFilter/components/LocationFilter';
import { NumberFilter } from '../components/AdvancedFilter/components/NumberFilter';
import { StringFilter } from '../components/AdvancedFilter/components/StringFilter';
import { TierFilter } from '../components/AdvancedFilter/components/TierFilter';
import type { FilterParamProps } from '../types/filter_param_props';
import type { ReactElement } from 'react';

type AdvancedFilterComponent = (props: FilterParamProps) => ReactElement;

/**
 * A map of available filter types and the grammar properties needed to parse and display
 */
export const componentsMap = {
  date: DateFilter as AdvancedFilterComponent,
  date_time: DateFilter as AdvancedFilterComponent,
  number: NumberFilter as AdvancedFilterComponent,
  string: StringFilter as AdvancedFilterComponent,
  tier: TierFilter as AdvancedFilterComponent,
  location: LocationFilter as AdvancedFilterComponent,
};

export const typeToComponent = (
  type: FilterExpressionType,
  field?: ILookmlModelExploreField | null
) => {
  if (
    field?.category === Category.parameter &&
    field?.type === 'number' &&
    field?.has_allowed_values
  ) {
    // Number type parameters with allowed_values need to be parsed as number type,
    // but displayed as tier type
    // b/324241917
    return componentsMap.tier;
  }
  return componentsMap[type];
};
