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
import type { GrammarTestItem } from '.'

const parameterField = {
  has_allowed_values: true,
  parameter: true,
  enumerations: [
    {
      label: 'first item',
      value: 'first item',
    },
    {
      label: 'sub_region',
      value: 'sub^_region',
    },
  ],
}

export const tierGrammarTestItems: GrammarTestItem = [
  {
    expression: '20 to 29',
    describe: 'is 20 to 29',
    type: 'match',
    output: '20 to 29',
  },

  // can parse an escaped parameter field expression
  {
    expression: 'sub^_region',
    describe: 'is sub_region',
    type: 'match',
    output: 'sub^_region',
    // add parameter field to match value with enumeration options
    field: parameterField,
  },
]
