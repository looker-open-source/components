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

import type { Pivots } from '../types';

export const mockPivots: Pivots = [
  {
    key: 'cancelled',
    data: {
      'orders.status': 'cancelled',
    },
    is_total: false,
    labels: { 'orders.status': 'cancelled' },
    label: 'Cancelled',
  },
  {
    key: 'complete',
    data: {
      'orders.status': 'complete',
    },
    is_total: false,
    labels: {
      'orders.status': 'complete',
    },
    label: 'Complete',
  },
  {
    key: 'pending',
    data: {
      'orders.status': 'pending',
    },
    is_total: false,
    labels: {
      'orders.status': 'pending',
    },
    label: 'Pending',
  },
];

export const mockPivotGender: Pivots = [
  {
    key: 'f',
    data: {
      'users.gender': 'f',
    },
    sort_values: {
      'users.gender': 'f',
    },
    labels: {
      'users.gender': 'f',
    },
    is_total: false,
    metadata: {
      'users.gender': {
        value: 'f',
      },
    },
  },
  {
    key: 'm',
    data: {
      'users.gender': 'm',
    },
    sort_values: {
      'users.gender': 'm',
    },
    labels: {
      'users.gender': 'm',
    },
    is_total: false,
    metadata: {
      'users.gender': {
        value: 'm',
      },
    },
  },
  {
    key: 'male',
    data: {
      'users.gender': 'male',
    },
    sort_values: {
      'users.gender': 'male',
    },
    labels: {
      'users.gender': 'male',
    },
    is_total: false,
    metadata: {
      'users.gender': {
        value: 'male',
      },
    },
  },
];
