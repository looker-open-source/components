/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
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
export const userAttributeTransform =
  (userAttributes?: UserAttributeWithValue[]) =>
  (root: FilterASTNode): FilterASTNode => {
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
