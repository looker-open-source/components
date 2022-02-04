/*

 MIT License

 Copyright (c) 2022 Looker Data Sciences, Inc.

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in all
 copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 SOFTWARE.

 */
import type { ChangeEvent, FC } from 'react'
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

export const MatchesAdvanced: FC<FilterParamProps> = ({
  item,
  item: { expression },
  onChange,
  field,
  filterType,
}) => {
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
