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
import applyId from '../transform/utils/apply_id_to_ast'

/**
 * Adds a new node to the current ast and returns the root node
 */
export const addNode = (root: FilterASTNode, newNode: FilterASTNode) => {
  const workingRoot: FilterASTNode = root
  if (!workingRoot.right) {
    // root is a single node
    const newRoot: FilterASTNode = {
      type: ',',
      left: workingRoot,
      right: newNode,
    }
    return applyId(newRoot)
  }

  let parent = workingRoot
  let pointer = workingRoot
  while (pointer.right) {
    parent = pointer
    pointer = pointer.right
  }

  parent.right = { type: ',', left: pointer, right: newNode }
  return applyId(workingRoot)
}
