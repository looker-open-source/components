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
import cloneDeep from 'lodash/cloneDeep'
import type { FilterASTNode } from '../../types'
import { NumberTypes } from '../../types/number_types'
import { serializeNumberNode } from '../number/number_to_string'
import { inorderTraversal, removeNode, treeToList } from '../tree'
import { mergeMultiValueNodes } from './mergeMultiValueNodes'
import applyId from './utils/apply_id_to_ast'

/**
 * Traverses ast and returns the count of 'not' nodes ('is' value set to false)
 */
const countNots = (root: FilterASTNode): number => {
  let count = 0
  inorderTraversal(root, (node) => {
    if (node.is === false) {
      count += 1
    }
  })
  return count
}

/**
 * when two duplicate "is not" nodes are present
 * removes the second one
 */
const removeDuplicateNotNodes = (root: FilterASTNode) => {
  const workingRoot = cloneDeep(applyId(root))
  // get the andClauses - "is not" nodes from the ast
  const andClauses = treeToList(workingRoot).filter((item) => item.is === false)
  // we only care if there are two andClauses with the same expression
  return andClauses.length === 2 &&
    serializeNumberNode(andClauses[0]) === serializeNumberNode(andClauses[1])
    ? // remove the second one
      removeNode(workingRoot, andClauses[1].id)!
    : workingRoot
}

/**
 * Applies the following transformations on the number AST:
 *  - combine the value array on nodes of type '='
 */
export const numberTransform = (root: FilterASTNode): FilterASTNode => {
  // workaround for inconsistency in number filter and allow merging of nodes
  // with different 'is' value: 1, not 2 -> becomes
  // a single filter node { type: '=', is: false, value: [1, 2] }
  const countOfNotNodes = countNots(root)
  const mergeNodesWithDifferentIsValue = countOfNotNodes === 1

  const mergedRoot = mergeMultiValueNodes(
    root,
    NumberTypes.EQUAL,
    mergeNodesWithDifferentIsValue
  )

  // if there are two "is not" nodes check if they are duplicates
  // to undo the "fix" applied when serializing the number filter
  const checkForDuplicates = countOfNotNodes === 2
  return checkForDuplicates ? removeDuplicateNotNodes(mergedRoot) : mergedRoot
}
