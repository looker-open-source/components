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
import { updateNode } from './update_node'

describe('update root', () => {
  it('updates root nodes properties', () => {
    const root = { id: 1, type: '=', value: [1] }
    const updateProps = { value: [2] }
    const ast = updateNode(root, 1, updateProps)
    expect(ast.value).toEqual(updateProps.value)
  })
})

describe('update root.left', () => {
  it('updates root.left properties', () => {
    const root = {
      id: 1,
      type: ',',
      left: { id: 2, type: '=', value: [1] },
      right: { id: 3, type: '>', value: [5] },
    }
    const updateProps = { type: '<' }
    const ast = updateNode(root, 2, updateProps)
    expect(ast.left!.type).toEqual(updateProps.type)
    expect(ast.right).toEqual(root.right)
  })
})

describe('update root.right', () => {
  it('updates root.right properties with a type', () => {
    const root = {
      id: 1,
      type: ',',
      left: { id: 2, type: '=', value: [1] },
      right: { id: 3, type: '>', value: [5] },
    }
    const updateProps = { type: '<' }
    const ast = updateNode(root, 3, updateProps)
    expect(ast.right!.type).toEqual(updateProps.type)
    expect(ast.left).toEqual(root.left)
  })

  it('updates root.right properties with a value', () => {
    const root = {
      id: 1,
      type: ',',
      left: { id: 2, type: '=', value: [1] },
      right: {
        id: 3,
        type: ',',
        left: { id: 4, type: '<', value: [5] },
        right: { id: 5, type: '>', value: [10] },
      },
    }
    const updateProps = { value: [10] }
    const ast = updateNode(root, 3, updateProps)
    expect(ast.right!.right!.value).toEqual(updateProps.value)
    expect(ast.left).toEqual(root.left)
    expect(ast.right!.left).toEqual(root.right.left)
  })
})

describe('updating invalid node id', () => {
  it('has no effect on root ast', () => {
    const root = {
      id: 1,
      type: ',',
      left: { id: 2, type: '=', value: [1] },
      right: { id: 3, type: '>', value: [5] },
    }
    const updateProps = { value: [10] }
    const ast = updateNode(root, 9, updateProps)
    expect(ast).toEqual(root)
  })
})
