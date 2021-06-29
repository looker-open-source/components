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
export type FilterExpressionType =
  | 'number'
  | 'string'
  | 'location'
  | 'date'
  | 'date_time'
  | 'tier'

// The following are the sub-types handled by each type of filter
// any other sub-types will be handled as "matches (advanced)"

export const dateFilterTypes = [
  'null',
  'anyvalue',
  'notnull',
  'past',
  'this',
  'next',
  'last',
  'year',
  'month',
  'before',
  'after',
  'range',
  'thisRange',
  'on',
  'relative',
  'user_attribute',
  'day',
] as const

export type DateFilterType = typeof dateFilterTypes[number]

export const numberFilterTypes = [
  '=',
  '>',
  '<',
  '>=',
  '<=',
  'between',
  'null',
  'user_attribute',
] as const

export type NumberFilterType = typeof numberFilterTypes[number]

export const stringFilterTypes = [
  'null',
  'contains',
  'match',
  'startsWith',
  'endsWith',
  'blank',
  'user_attribute',
] as const

export type StringFilterType = typeof stringFilterTypes[number]

export const tierFilterTypes = ['anyvalue', 'match', 'user_attribute'] as const

export type TierFilterType = typeof tierFilterTypes[number]

export const locationFilterTypes = [
  'location',
  'circle',
  'box',
  'anyvalue',
  'null',
  'notnull',
  'user_attribute',
] as const

export type LocationFilterType = typeof locationFilterTypes[number]
