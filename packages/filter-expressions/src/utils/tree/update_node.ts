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
import type { FilterASTNode } from '../../types'

/**
 * Traverses the Filter AST looking for a node with id = nodeId and applies updateProps to it
 */
export const updateNode = (
  root: FilterASTNode,
  nodeId: number,
  updateProps: any
): FilterASTNode => {
  if (root.id === nodeId) {
    return { ...root, ...updateProps }
  }

  let node: FilterASTNode | undefined = root
  while (node) {
    const { left, right } = node
    if (left && left.id === nodeId) {
      node.left = { ...left, ...updateProps }
      return root
    }

    if (right && right.id === nodeId) {
      node.right = { ...right, ...updateProps }
      return root
    }

    node = node.right
  }
  return root
}
