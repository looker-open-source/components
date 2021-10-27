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

import type { QueryContextProps } from '../Query'
import { mockBarConfig } from './mockConfig'
import { mockFields } from './mockFields'

export const mockQueryResult: QueryContextProps = {
  config: mockBarConfig,
  data: [
    {
      'orders.count': { rendered: '3,087', value: 3087 },
      'users.count': { rendered: '1,088', value: 1088 },
      'users.gender': { value: 'f' },
      'users.state': { value: 'California' },
    },
    {
      'orders.count': { rendered: '2,515', value: 2515 },
      'users.count': { rendered: '1,069', value: 1069 },
      'users.gender': { value: 'm' },
      'users.state': { value: 'California' },
    },
  ],
  fields: mockFields,
  ok: true,
  loading: false,
}

export const mockQueryResultWithNull: QueryContextProps = {
  config: mockBarConfig,
  data: [
    {
      'orders.count': { rendered: '3,087', value: 3087 },
      'users.count': { rendered: '1,088', value: 1088 },
      'users.gender': { value: 'm' },
      'users.state': { value: 'California' },
    },
    {
      'orders.count': { rendered: '3,087', value: 2087 },
      'users.count': { rendered: '1,088', value: 88 },
      'users.gender': { value: 'm' },
      'users.state': { value: 'California' },
    },
    {
      'orders.count': { rendered: '2,515', value: null },
      'users.count': { rendered: '1,069', value: null },
      'users.gender': { value: 'm' },
      'users.state': { value: 'California' },
    },
    {
      'orders.count': { rendered: '3,087', value: 3087 },
      'users.count': { rendered: '1,088', value: 88 },
      'users.gender': { value: 'm' },
      'users.state': { value: 'California' },
    },
    {
      'orders.count': { rendered: '2,515', value: 2515 },
      'users.count': { rendered: '1,069', value: 1069 },
      'users.gender': { value: 'm' },
      'users.state': { value: 'California' },
    },
  ],
  fields: mockFields,
  ok: true,
  loading: false,
}
