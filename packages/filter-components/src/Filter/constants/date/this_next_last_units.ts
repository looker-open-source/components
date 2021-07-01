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
import type { Option } from '../../types/option'
import { dateUnits, fiscalDateUnits } from './date_units'

/** returns the singular value from Option */
const singularizeLabel = (option: Option): Option => ({
  ...option,
  label: option.singular || option.label,
})

export const thisUnits = dateUnits.map(singularizeLabel)

export const nextLastUnits = thisUnits.filter(
  (option: Option) =>
    ['second', 'minute', 'hour', 'day'].indexOf(option.value as string) === -1
)

export const fiscalThisUnits = [...dateUnits, ...fiscalDateUnits].map(
  singularizeLabel
)

export const fiscalNextLastUnits = [...nextLastUnits, ...fiscalDateUnits].map(
  singularizeLabel
)
