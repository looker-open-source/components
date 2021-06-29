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
import { addNode } from './add_node'
import { treeToList } from './tree_to_list'

describe('Add Node function', () => {
  it('Ensure when root is singular node gets broken into a balanced tree, comma separated', () => {
    const rootValue = 1
    const newNodeValue = 2

    const root = { id: 1, type: '=', value: rootValue }
    const newNode = { id: 2, type: '=', value: newNodeValue }
    const ast = addNode(root, newNode)
    expect(ast.type).toEqual(',')
    expect(ast.left).toBeDefined()
    expect(ast.right).toBeDefined()
    expect(ast.left!.value).toEqual(rootValue)
    expect(ast.right!.value).toEqual(newNodeValue)
  })

  it('Tree node count increases by one', () => {
    const node = { id: 2, type: '=', value: 1 }
    const root = { id: 1, right: node }
    const newNode = { id: 3, type: '=', value: 10 }

    const nodeListCount = treeToList(root).length

    const ast = addNode(root, newNode)

    expect(treeToList(ast)).toHaveLength(nodeListCount + 1)
  })
})
