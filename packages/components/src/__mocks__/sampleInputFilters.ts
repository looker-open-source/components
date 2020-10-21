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
  {
    field: 'group',
    label: 'Group',
    options: ['Cheddar', 'Gouda', 'Swiss', 'Mozzarella'],
  },
  {
    field: 'last-successful-build',
    label: 'Last Successful Build',
    options: [
      '1-22-20 33:33:33',
      '2-11-20 44:44:44',
      '3-33-20 55:55:55',
      '4-05-20 11:11:11',
    ],
  },
  {
    field: 'model',
    label: 'Model',
    options: ['model_uno', 'model_dos', 'model_tres', 'model_cuatro'],
  },
  {
    field: 'persistance-type',
    label: 'Persistance Type',
    multiple: true,
    options: [
      'datagroup_trigger',
      'datagroup_trigger1',
      'datagroup_trigger2',
      'datagroup_trigger4',
      'datagroup_trigger5',
      'datagroup_trigger6',
      'datagroup_trigger7',
      'datagroup_trigger8',
    ],
  },
  {
    field: 'PDT Name',
    multiple: true,
    options: [
      'my_great_pdt_name',
      'my_other_great_pdt_name',
      'my_other_great_pdt_name2',
      'my_other_great_pdt_name3',
    ],
  },
  { field: 'role', options: ['admin', 'group-admin', 'user', 'pizza'] },
  { field: 'status', options: ['Failed', 'Success'] },
]
