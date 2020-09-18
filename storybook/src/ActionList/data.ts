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

import { ActionListColumns } from '@looker/components'

export const available = [
  { field: 'Name' },
  { field: 'Status' },
  { field: 'Source' },
  { field: 'Trigger' },
  { field: 'buildAt', label: 'Last Build Time' },
]

export const filters = [
  { field: 'role', value: 'admin' },
  { field: 'group', value: 'pizza-lovers' },
]

export const row = {
  disabled: false,
  error: undefined,
  lastSuccessfulBuild: '1-22-20 33:33:33',
  longPdtName: 'LR$B2DS91230SL_something_something_dark_side',
  model: 'model_uno',
  pdtName: 'my_great_pdt_name',
  persistanceType: 'datagroup_trigger',
  status: 'Success',
}

export const data = [
  row,
  {
    ...row,
    error: {
      link: 'https://google.com',
      message: 'Build Error',
    },
    longPdtName: 'LR$A4YAL15807AQ2_something_something_evil',
    pdtName: 'my_other_great_pdt_name',
    status: 'Failed',
  },
  {
    ...row,
    pdtName: 'my_other_great_pdt_name2',
  },
  {
    ...row,
    pdtName: 'my_other_great_pdt_name3',
  },
]

export const columns: ActionListColumns = [
  {
    id: 'pdt_name',
    primaryKey: true,
    title: 'PDT Name',
    type: 'string',
    widthPercent: 27,
  },
  {
    id: 'status',
    title: 'Status',
    type: 'string',
    widthPercent: 13,
  },
  {
    id: 'model',
    title: 'Model',
    type: 'string',
    widthPercent: 20,
  },
  {
    id: 'persistance_type',
    title: 'Persistance Type',
    type: 'string',
    widthPercent: 20,
  },
  {
    id: 'last_successful_build',
    title: 'Last Successful Build',
    type: 'string',
    widthPercent: 20,
  },
]
