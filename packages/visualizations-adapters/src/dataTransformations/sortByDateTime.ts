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

import type { ConfigHelper, CAll } from '../types'
import sortBy from 'lodash/sortBy'

/**
 * Data transformation enforces chronological order on the dataset
 * when dealing with a timeframe-based dataset with a single dimension.
 */

export const sortByDateTime: ConfigHelper<CAll> = ({
  data,
  fields,
  config,
}) => {
  const dimension = fields.dimensions[0]
  const draftData = Array.from(data)
  const isTimeframeDataset =
    fields?.dimensions?.length === 1 && dimension.is_timeframe

  return {
    data: isTimeframeDataset
      ? sortBy(draftData, [(d) => new Date(d[dimension.name])])
      : draftData,
    fields,
    config,
  }
}
