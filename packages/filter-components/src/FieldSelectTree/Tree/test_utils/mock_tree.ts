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

import type { TreeModel } from '../types'

export const mockTreeData: TreeModel[] = [
  {
    value: 'Root1',
    id: '.Root1_0',
    isOpen: false,
    children: [
      {
        value: 'some section',
        id: '.Root1_0.some section_0',
        isOpen: false,
        children: [
          {
            value: 'a leaf node',
            id: '.Root1_0.some section_0.a leaf node_0',
            isOpen: false,
            payload: {
              data: 'some data',
            },
          },
          {
            value: 'another leaf node',
            id: '.Root1_0.some section_0.another leaf node_1',
            isOpen: false,
            payload: {
              data: 'more data',
            },
          },
        ],
      },
      {
        value: 'anotha one',
        id: '.Root1_0.anotha one_1',
        isOpen: false,
        children: [
          {
            value: 'child of anotha one',
            id: '.Root1_0.anotha one_1.child of anotha one_0',
            isOpen: false,
            payload: {
              data: 'hello',
            },
          },
        ],
      },
    ],
  },
  {
    value: 'Root2',
    id: '.Root2_1',
    isOpen: false,
    children: [
      {
        value: 'some section2',
        id: '.Root2_1.some section2_0',
        isOpen: false,
        children: [
          {
            value: 'a leaf node2',
            id: '.Root2_1.some section2_0.a leaf node2_0',
            isOpen: false,
            payload: {
              data: 'some data',
            },
          },
          {
            value: 'another leaf node2',
            id: '.Root2_1.some section2_0.another leaf node2_1',
            isOpen: false,
            payload: {
              data: 'more data2',
            },
          },
        ],
      },
      {
        value: 'anotha one2',
        id: '.Root2_1.anotha one2_1',
        isOpen: false,
        children: [
          {
            value: 'child of anotha one',
            id: '.Root2_1.anotha one2_1.child of anotha one_0',
            isOpen: false,
            payload: {
              data: 'hello',
            },
          },
        ],
      },
    ],
  },
]
