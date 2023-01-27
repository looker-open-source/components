/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import { getExpressionType, summary } from '@looker/filter-expressions'
import type { FilterProps } from '../../Filter/types/filter_props'

export const getLabel = ({
  expressionType,
  isRequired,
  ...props
}: FilterProps) =>
  summary({
    ...props,
    required: isRequired,
    type:
      expressionType ||
      getExpressionType({ type: props.type, field: props.field || undefined }),
  })
