/*

 MIT License

 Copyright (c) 2020 Looker Data Sciences, Inc.

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

export const filters = [
  { field: 'role', options: ['admin', 'group-admin', 'user', 'pizza'] },
  {
    field: 'group',
    label: 'Group',
    options: ['Cheddar', 'Gouda', 'Swiss', 'Mozzarella'],
  },
  {
    field: 'name',
    label: 'Name',
    options: ['Name 1', 'Name 2', 'Name 3'],
  },
  { field: 'status', options: ['Failed', 'In-Progress', 'Success'] },
  {
    field: 'buildAt',
    label: 'Last Build Time',
    options: ['01-22-20', '02-13-20', '05-28-20'],
  },
]
