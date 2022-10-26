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

export interface CheeseData {
  id: string
  disabled: boolean
  name: string
  status: string
  inventory: number
  color: string
  origin: string
  type?: string
  calories?: number
  fat?: number
  protein?: number
  calcium?: number
  description: string
}

/* eslint-disable sort-keys-fix/sort-keys-fix */
export const row = {
  id: 'gouda',
  disabled: false,
  name: 'Gouda',
  status: 'Available',
  inventory: 569,
  color: 'yellow',
  origin: 'Netherlands',
  type: 'semi-hard, artisan, brined, processed',
  calories: 101,
  fat: 8,
  protein: 7,
  calcium: 0.958,
  description: `Gouda is a mild-flavored, yellow cow's milk cheese originating from the Netherlands. It is one of the most popular cheeses worldwide. The name is used today as a general term for numerous similar cheeses produced in the traditional Dutch manner. `,
}

export const data: CheeseData[] = [
  row,
  {
    ...row,
    id: 'american',
    name: 'American',
    inventory: 0,
    origin: 'United States',
    type: 'semi-soft, processed',
    calories: undefined,
    fat: undefined,
    protein: undefined,
    calcium: undefined,
    status: 'Out of Stock',
    description: `Modern American cheese is a type of processed cheese made from cheddar, colby, or similar cheeses. It is mild with a creamy and salty flavor, has a medium-firm consistency, and has a low melting point. It can be yellow or white in color; yellow American cheese is seasoned and colored with annatto`,
  },
  {
    ...row,
    id: 'brie',
    name: 'Brie',
    inventory: 240,
    origin: 'France',
    type: undefined,
    calories: undefined,
    fat: 40,
    protein: undefined,
    calcium: undefined,
    status: 'Out of Stock',
    description: `Brie is a soft cow's-milk cheese named after Brie, the French region from which it originated. It is pale in color with a slight grayish tinge under a rind of white mould. The rind is typically eaten, with its flavor depending largely upon the ingredients used and its manufacturing environment.`,
  },
  {
    ...row,
    id: 'cheddar',
    name: 'Cheddar',
    inventory: 84,
    origin: 'England',
    type: 'hard, artisan, processed',
    calories: undefined,
    fat: 9,
    protein: undefined,
    calcium: undefined,
    status: 'Low Stock',
    description: `Cheddar cheese is a relatively hard, off-white, sometimes sharp-tasting, natural cheese. Originating in the English village of Cheddar in Somerset, cheeses of this style are now produced all over the world.`,
  },
  {
    ...row,
    id: 'provolone',
    name: 'Provolone',
    color: 'pale yellow',
    inventory: 781,
    origin: 'Italy',
    type: 'semi-hard, artisan',
    calories: undefined,
    fat: undefined,
    protein: undefined,
    calcium: undefined,
    description: `Provolone is an Italian cheese. It is an aged pasta filata cheese originating in Casilli near Vesuvius, where it is still produced in pear, sausage, or cone shapes 10 to 15 cm long. Provolone-type cheeses are also produced in other countries.`,
  },
]
