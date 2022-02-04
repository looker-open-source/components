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
import type { FilterASTNode, UserAttributeWithValue } from '../../types'
import { TYPE_USER_ATTRIBUTE } from '../../types'
import { findUserAttribute } from '../user_attribute'

/**
 * sets the userAttributeValue on a node with type 'user_attribute'
 */
const updateAttributeValue = (
  node: FilterASTNode,
  userAttributes: UserAttributeWithValue[]
): FilterASTNode => {
  if (node && node.type === TYPE_USER_ATTRIBUTE) {
    const userAttribute = findUserAttribute(node.attributeName, userAttributes)
    return {
      ...node,
      attributeValue: userAttribute && userAttribute.value,
    } as FilterASTNode
  }
  return node
}

/**
 * Traverses ast and updates userAttribute value
 */
export const userAttributeTransform = (
  userAttributes?: UserAttributeWithValue[]
) => (root: FilterASTNode): FilterASTNode => {
  if (!userAttributes || !userAttributes.length) return root

  const workingRoot = updateAttributeValue(root, userAttributes)
  let pointer = workingRoot
  while (pointer.right) {
    pointer.left =
      pointer.left && updateAttributeValue(pointer.left, userAttributes)
    pointer.right = updateAttributeValue(pointer.right, userAttributes)
    pointer = pointer.right
  }
  return workingRoot
}
