/*

 MIT License

 Copyright (c) 2021 Looker Data Sciences, Inc.

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
import type { FC } from 'react'
import React from 'react'
import type { InternalFilterProps } from '../../types/filter_props'
import type { FilterModel, FilterASTNode } from '@looker/filter-expressions'
import { addNode, removeNode, treeToList } from '@looker/filter-expressions'
import { typeToComponent } from '../../utils/type_to_component'
import { Box } from '@looker/components'

/**
 * Advanced filters allow for more flexibility and specific customization by the user
 */
export interface AdvancedFilterProps extends InternalFilterProps {
  updateAST: (ast?: FilterASTNode) => void
}

export const AdvancedFilter: FC<AdvancedFilterProps> = ({
  ast,
  updateAST,
  name,
  onInputChange,
  changeFilter,
  suggestions,
  enumerations,
  isLinked,
  expressionType,
  userAttributes,
  field,
  inline,
  validationMessage,
  isLoading,
}) => {
  const onAdd = (filterItem: FilterModel) => {
    if (ast) {
      updateAST(addNode(ast, { ...filterItem, value: [] } as FilterASTNode))
    }
  }

  const onRemove = (id: string) => {
    if (ast) {
      updateAST(removeNode(ast, id))
    }
  }

  const FilterComponent = typeToComponent(expressionType)
  if (!FilterComponent) return null

  const items: FilterModel[] = treeToList(ast!)

  const lastItemIndex = items.length - 1
  const hasMultipleClauses = items.length > 1

  const filterList = items.map((item, itemIndex) => {
    const key = `${name}-${item.id}`
    const isMatchesAdvanced = item.type === 'matchesAdvanced'
    const showAdd = itemIndex === lastItemIndex && !isMatchesAdvanced
    const showRemove = lastItemIndex > 0 && !isMatchesAdvanced
    return (
      <Box
        key={key}
        pb={itemIndex === lastItemIndex ? 'none' : 'xxsmall'}
        pl={hasMultipleClauses && itemIndex === 0 ? 'xxxlarge' : 'none'}
      >
        <FilterComponent
          key={key}
          name={name}
          filterType={expressionType}
          isLinked={isLinked}
          suggestions={suggestions}
          enumerations={enumerations}
          item={item}
          isLoading={isLoading}
          onChange={changeFilter}
          onInputChange={onInputChange}
          onAdd={onAdd}
          onRemove={onRemove}
          showAdd={showAdd}
          showName={itemIndex === 0}
          showRemove={showRemove}
          showOperator={itemIndex > 0}
          userAttributes={userAttributes}
          showMatchesAdvanced={items.length === 1}
          field={field}
          inline={inline}
          validationMessage={validationMessage}
        />
      </Box>
    )
  })
  return <div>{filterList}</div>
}
