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

import { ActionListColumns } from '../ActionList'

/* eslint-disable sort-keys-fix/sort-keys-fix */
export const row = {
  disabled: false,
  error: undefined,
  name: 'Gouda',
  color: 'yellow',
  inventory: 569,
  origin: 'Netherlands',
  type: 'semi-hard, artisan, brined, processed',
  fat: 31,
  calcium: 0.958,
  status: 'Available',
  description: `Gouda, or "How-da" as the locals say, is a Dutch cheese named after the city of Gouda in the Netherlands. If truth be told, it is one of the most popular cheeses in the world, accounting for 50 to 60% of the world's cheese consumption. It is a semi-hard cheese celebrated for its rich, unique flavour and smooth texture. The original cheese markets in Gouda is one of the last standing commercial cheese markets in the Netherlands. Since the name is not protected, it has become a generic classification for all cheeses produced and sold under the name Gouda.`,
}

export const data = [
  row,
  {
    ...row,
    error: {
      link: 'https://google.com',
      message: 'Out of Stock',
    },
    name: 'American',
    inventory: 0,
    origin: 'United States',
    type: 'semi-soft, processed',
    fat: undefined,
    calcium: undefined,
    status: 'Out of Stock',
    description: `American cheese is processed cheese made from a blend of milk, milk fats and solids, with other fats and whey protein concentrate. At first, it was made from a mixture of cheeses, more often than not Colby and Cheddar. Since blended cheeses are no longer used, it cannot be legally called “cheese” and has to be labelled as “processed cheese”, “cheese product“, etc. Sometimes, instead of the word cheese, it is called "American slices" or "American singles". Under the U.S. Code of Federal Regulations, American cheese is a type of pasteurized processed cheese.`,
  },
  {
    ...row,
    name: 'Cheddar',
    inventory: 84,
    origin: 'England',
    type: 'hard, artisan, processed',
    fat: 9,
    calcium: undefined,
    status: 'Low Stock',
    description: `Cheddar cheese, the most widely purchased and eaten cheese in the world is always made from cow's milk. It is a hard and natural cheese that has a slightly crumbly texture if properly cured and if it is too young, the texture is smooth. It gets a sharper taste as it matures, over a period of time between 9 to 24 months. Shaped like a drum, 15 inches in diameter, Cheddar cheese is natural rind bound in cloth while its colour generally ranges from white to pale yellow. However, some Cheddars may have a manually added yellow-orange color.`,
  },
  {
    ...row,
    name: 'Provolone',
    color: 'pale yellow',
    inventory: 781,
    origin: 'Italy',
    type: 'semi-hard, artisan',
    fat: undefined,
    calcium: undefined,
    description: `Provolone is an Italian cheese made from cow’s milk whose origins lie in Southern Italy. Today, the major production of Provolone takes place in Po valley region, particularly Lombardy and Veneto. Both Provolone Valpadana and Provolone del Monaco are granted DOP designation by the European Union to ensure that cheese is produced under strict supervision using specific methods to guarantee supreme quality.`,
  },
]

export const columns: ActionListColumns = [
  {
    id: 'name',
    title: 'Name',
    type: 'string',
  },
  {
    id: 'inventory',
    title: 'Inventory',
    type: 'number',
  },
  {
    id: 'status',
    title: 'Status',
    type: 'string',
  },
  {
    id: 'color',
    title: 'Color',
    type: 'string',
  },
  {
    id: 'description',
    title: 'Description',
    type: 'string',
  },
  {
    id: 'origin',
    title: 'Origin',
    type: 'string',
  },
  {
    id: 'fat',
    title: 'Fat content',
    type: 'number',
  },
  {
    id: 'calcium',
    title: 'Calcium',
    type: 'number',
  },
]

export const filters = [
  { field: 'role', value: 'admin' },
  { field: 'group', label: 'Group', value: 'pizza-lovers' },
  { field: 'name', label: 'Name' },
  { field: 'status' },
  { field: 'model' },
  { field: 'trigger' },
  { field: 'buildAt', label: 'Last Build Time' },
]

export const columnsList = ['Name', 'Inventory', 'Origins', 'Calcium']
