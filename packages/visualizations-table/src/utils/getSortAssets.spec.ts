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
import { getSortAssets } from './getSortAssets'
import {
  KeyboardArrowDown,
  KeyboardArrowUp,
  SwapVert,
} from '@styled-icons/material'

import identity from 'lodash/identity'

it('renders swap icon when sorting state is undefined', () => {
  const { SortIcon, sortText } = getSortAssets(identity)
  expect(SortIcon).toEqual(SwapVert)
  expect(sortText).toEqual('Shift + Click to sort additional columns')
})

it('renders arrow down icon when sorting state is descending', () => {
  const { SortIcon, sortText } = getSortAssets(identity, {
    id: 'orders.count',
    desc: true,
  })
  expect(SortIcon).toEqual(KeyboardArrowDown)
  expect(sortText).toEqual('Sort ascending')
})

it('renders arrow up icon when sorting state is ascending', () => {
  const { SortIcon, sortText } = getSortAssets(identity, {
    id: 'orders.count',
    desc: false,
  })
  expect(SortIcon).toEqual(KeyboardArrowUp)
  expect(sortText).toEqual('Sort descending')
})
