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
import type { FilterASTNode, FilterModel } from '@looker/filter-expressions'
import {
  getExpressionType,
  typeToGrammar,
  hasUserAttributeNode,
  parseFilterExpression,
  updateNode,
} from '@looker/filter-expressions'
import isEmpty from 'lodash/isEmpty'
import React, { useMemo, useRef, useState } from 'react'
import type { FilterProps } from './types/filter_props'
import { useFilterConfig, useValidationMessage } from './utils'
import { updateASTFromProps } from './utils/update_ast'
import { isValidFilterType } from './utils/filter_token_type_map'
import { ControlFilter } from './components/ControlFilter'
import { AdvancedFilter } from './components/AdvancedFilter'

/**
 * The top-level filter component that generates an AST from the expression
 * and renders either an advanced filter or control filter depending on the config.
 * `Filter` renders only the filter input control(s) – for label and validation display
 * and suggestion fetching, see `DashboardFilter`.
 */
export const Filter = ({
  expression,
  type,
  expressionType: propsExpressionType,
  loadUserAttributes,
  skipFilterConfigCheck,
  ...props
}: FilterProps) => {
  const expressionType = useMemo(() => {
    return (
      propsExpressionType ||
      getExpressionType({ type, field: props.field || undefined })
    )
  }, [propsExpressionType, type, props.field])

  const validationMessage = useValidationMessage(expression, props.isRequired)

  const getAST = () =>
    updateASTFromProps(expressionType, expression, props.userAttributes)

  const [ast, setAST] = useState(getAST)

  // Track changes in the expression & type props that will
  // require updateASTFromProps to be re-run
  const expressionRef = useRef(expression)
  const typeRef = useRef(expressionType)

  // This ref tracks whether the AST has been updated internally
  // and avoids deriving it from props if so
  // (The internally updated AST may better reflect user interactions)
  const internallyUpdating = useRef(false)
  if (
    !internallyUpdating.current &&
    (expressionRef.current !== expression || typeRef.current !== expressionType)
  ) {
    setAST(getAST)
    expressionRef.current = expression
    typeRef.current = expressionType
  }

  const updateExpression = (newAST: FilterASTNode) => {
    const { toString } = typeToGrammar(expressionType)
    if (newAST.type === 'matchesAdvanced') {
      if (newAST.expression === undefined || newAST.expression === null) {
        return expression
      } else return newAST.expression
    } else {
      return toString(newAST, expressionType, props.field || undefined)
    }
  }

  const updateAST = (newAST: FilterASTNode | undefined) => {
    internallyUpdating.current = true
    requestAnimationFrame(() => {
      internallyUpdating.current = false
    })
    setAST(newAST)
    if (newAST) {
      // userAttributes is empty and ast has a node set to userAttribute type
      if (
        loadUserAttributes &&
        isEmpty(props.userAttributes) &&
        hasUserAttributeNode(newAST)
      ) {
        loadUserAttributes()
      } else {
        try {
          const newExpression = updateExpression(newAST)
          // verify newExpression is valid
          parseFilterExpression(
            expressionType,
            newExpression,
            props.userAttributes
          )
          expressionRef.current = newExpression
          // call onChange with new expression
          props.onChange?.({ expression: newExpression })
        } catch ({ message }) {
          // expression derived from UI change is invalid
          // catch silently and let user continue editing filter
        }
      }
    }
  }

  const { uiConfig: config } = useFilterConfig({
    ast: ast || {},
    config: props.config,
    field: props.field,
    suggestions: props.suggestions,
    enumerations: props.enumerations,
    skipFilterConfigCheck,
  })

  const isControlFilter = config && isValidFilterType(config.type)
  /**
   * Captures Filter UI changes, updates AST and generates a new expression
   */
  const changeFilter = (id: number, newItem: FilterModel) => {
    // UI only exists with a valid AST
    if (ast) {
      if (isControlFilter) {
        props.onChange?.({ expression: updateExpression(newItem) })
      } else {
        // generate new AST
        const item =
          newItem.type === 'matchesAdvanced'
            ? {
                ...newItem,
                expression:
                  newItem.expression === undefined ||
                  newItem.expression === null
                    ? expression
                    : newItem.expression,
              }
            : { ...newItem, expression: null }
        updateAST(updateNode(ast, id, item))
      }
    }
  }

  if (!ast) return null

  return isControlFilter ? (
    <ControlFilter
      {...props}
      config={config}
      expressionType={expressionType}
      ast={ast}
      changeFilter={changeFilter}
      validationMessage={validationMessage}
    />
  ) : (
    <AdvancedFilter
      {...props}
      config={config}
      expressionType={expressionType}
      ast={ast}
      updateAST={updateAST}
      changeFilter={changeFilter}
      validationMessage={validationMessage}
    />
  )
}
