/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import type { Parser } from 'pegjs'
import { generate } from 'pegjs'
import type {
  FilterASTNode,
  FilterExpressionType,
  TransformFunction,
  UserAttributeWithValue,
} from '../types'
import { getNumberFromString } from './number/get_number_from_string'
import { getMatchesAdvancedNode } from './get_matches_advanced_node'
import { transformAST } from './transform/transform_ast'
import { userAttributeTransform } from './transform/userAttributeTransform'
import { typeToGrammar } from './type_to_grammar'

/**
 * Generates a parser from a PEGjs grammar and caches the result
 */
const generateParser = (() => {
  const parserCache: { [key: string]: Parser } = {}
  return (type: string, grammar: string) => {
    if (!parserCache[type]) {
      parserCache[type] = generate(grammar)
    }
    return parserCache[type]
  }
})()

/**
 * Variables used inside grammars
 */
export const parserOptions = { Object, getNumberFromString }

/**
 * A functions that uses a grammar of type type to parse an expression and returns an AST
 */
export const parseFilterExpression = (
  type: FilterExpressionType,
  expression: string,
  userAttributes?: UserAttributeWithValue[]
): FilterASTNode => {
  const {
    grammar,
    anyvalue,
    transform = (root: FilterASTNode) => root,
  } = typeToGrammar(type)
  if (expression === '') {
    return anyvalue
  }
  try {
    const parser = generateParser(type, grammar)
    const transforms: TransformFunction[] = [
      userAttributeTransform(userAttributes),
      transform,
    ]
    return transformAST(parser.parse(expression, parserOptions), transforms)
  } catch (error) {
    return getMatchesAdvancedNode(expression)
  }
}
