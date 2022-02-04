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
import { treeToList } from './tree_to_list'

describe('filter ast to list', () => {
  it('can convert an ast to array', () => {
    const root = { id: 1, type: '=', value: [1] }
    const list = treeToList(root)
    expect(list).toHaveLength(1)
    expect(list[0]).toEqual(root)
  })

  it('tree list only holds value nodes', () => {
    const root = {
      id: 1,
      type: ',',
      left: { id: 2, type: '=', vaue: [1] },
      right: { id: 3, type: '>', value: [5] },
    }
    const list = treeToList(root)
    expect(list).toHaveLength(2)
    expect(list[0]).toEqual(root.left)
    expect(list[1]).toEqual(root.right)
  })

  it('tree list is sorted by is value of nodes', () => {
    const root = {
      id: 1,
      type: ',',
      left: { id: 2, type: '=', vaue: [1], is: false },
      right: { id: 3, type: '>', value: [5], is: true },
    }
    const list = treeToList(root)
    expect(list).toHaveLength(2)
    expect(list[0]).toEqual(root.right)
    expect(list[1]).toEqual(root.left)
  })
})
