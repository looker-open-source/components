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
import type { GrammarTestItem } from './grammar_test_utils'

// prettier-ignore
export const dateExpressionTestItems: GrammarTestItem = [
  { expression: 'this day', output: 'this day', describe: 'is this day' },
  { expression: '3 days', output: '3 day', describe: 'is in the last 3 days' },
  { expression: '3 days ago', output: '3 day', describe: 'is in the last 3 days' },
  { expression: '3 months ago for 2 days', output: '3 month ago for 2 day', describe: 'is 3 months ago for 2 days' },
  { expression: 'before 3 days ago', output: 'before 3 day ago', describe: 'is before 3 days ago' },
  { expression: 'before 2018-01-01 12:00:00', output: 'before 2018/01/01', describe: 'is before 2018/01/01' },
  { expression: 'after 2018-10-05', output: 'after 2018/10/05', describe: 'is on or after 2018/10/05' },
  { expression: '2018-05-18 12:00:00 to 2018-05-18 14:00:00', output: '2018/05/18 to 2018/05/18', describe: 'is from 2018/05/18 until 2018/05/18' },
  { expression: 'next week', output: 'next week', describe: 'is next week' },
  { expression: 'last week', output: 'last week', describe: 'is previous week' },
  { expression: 'not null', output: 'not null', describe: 'is not null'},
  { expression: 'null', output: 'null', describe: 'is null'},
  { expression: '2018-05-18', output: '2018/05/18', describe: 'is on 2018/05/18' },  { expression: '', output: '', describe: 'is any time' },
  { expression: '2018', output: '2018', describe: 'is in the year 2018'},
  { expression: '2018/01', output: '2018-01', describe: 'is in January 2018' },
  { expression: 'monday', output: 'monday', describe: 'is monday' },
  { expression: 'before 2 months from now', output: 'before 2 month from now', describe: 'is before 2 months from now' },
  { expression: 'after 2 weeks from now', output: 'after 2 week from now', describe: 'is on or after 2 weeks from now' },
  { expression: 'after 1 month ago', output: 'after 1 month ago', describe: 'is on or after 1 month ago' },
  { expression: 'this year to second', output: 'this year to second', describe: 'this year to second' },
  { expression: 'this year to day', output: 'this year to day', describe: 'this year to day' }
  
]
