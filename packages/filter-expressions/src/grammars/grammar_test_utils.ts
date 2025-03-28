/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import type { ILookmlModelExploreField } from '@looker/sdk';
import type { FilterExpressionType } from '../types';

export interface GrammarTestItem {
  expression: string;
  output?: string;
  describe?: string;
  type?: string;
  filterType?: FilterExpressionType;
  field?: ILookmlModelExploreField;
  low?: string;
  high?: string;
  bounds?: string;
}
