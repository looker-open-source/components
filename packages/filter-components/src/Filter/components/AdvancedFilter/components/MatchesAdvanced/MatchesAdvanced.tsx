/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import type { ChangeEvent } from 'react'
import React from 'react'
import type {
  FilterExpressionType,
  FilterASTNode,
} from '@looker/filter-expressions'
import { typeToGrammar } from '@looker/filter-expressions'
import type { ILookmlModelExploreField } from '@looker/sdk'
import type { FilterParamProps } from '../../../../types/filter_param_props'
import { GroupInput } from '../GroupInput'

const getFilterItemExpression = (
  item: FilterASTNode,
  type: FilterExpressionType,
  field: ILookmlModelExploreField
) => {
  const { toString } = typeToGrammar(type)
  return toString(item, type, field)
}

export const MatchesAdvanced = ({
  item,
  item: { expression },
  onChange,
  field,
  filterType,
}: FilterParamProps) => {
  const expressionChanged = (event: ChangeEvent<HTMLInputElement>) => {
    const newExpression = event.currentTarget.value
    onChange(item.id, {
      ...item,
      type: 'matchesAdvanced',
      expression: newExpression,
    })
  }

  return (
    <GroupInput
      type="text"
      minWidth="120px"
      value={
        expression ??
        getFilterItemExpression(
          item,
          filterType,
          field as ILookmlModelExploreField
        )
      }
      onChange={expressionChanged}
      placement="right"
    />
  )
}
