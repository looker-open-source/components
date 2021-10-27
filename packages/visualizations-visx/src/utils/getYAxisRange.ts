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

import type { ContinuousDomain, ContinuousInput } from '@visx/scale'
import type { GetDataRangeProps } from '@looker/visualizations-adapters'
import { getDataRange } from '@looker/visualizations-adapters'

/**
 * Returns a 2-tuple where the first element is the y-axis min
 * and the second element is the y-axis max
 */
export const getYAxisRange = ({
  config,
  data,
  fields,
}: GetDataRangeProps): ContinuousDomain => {
  const [configMin = 'auto', configMax = 'auto'] =
    config?.y_axis?.[0]?.range || []

  const [dataMin, dataMax] = getDataRange({ config, data, fields })

  const min: ContinuousInput =
    configMin === 'auto' ? Math.min(0, Math.floor(dataMin)) : Number(configMin)
  const max: ContinuousInput =
    configMax === 'auto' ? Math.max(0, Math.ceil(dataMax)) : Number(configMax)

  return [min, max]
}
