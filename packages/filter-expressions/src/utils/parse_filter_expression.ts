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
import type { Parser } from 'pegjs'
import { generate } from 'pegjs'
import type {
  FilterASTNode,
  FilterExpressionType,
  TransformFunction,
  UserAttributeWithValue,
} from '../types'
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
    return transformAST(parser.parse(expression, { Object }), transforms)
  } catch (error) {
    return getMatchesAdvancedNode(expression)
  }
}
