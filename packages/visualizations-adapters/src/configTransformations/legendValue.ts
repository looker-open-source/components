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

import type { CPie } from '../adapters'
import type { ConfigHelper, LegendValues, RawApiConfigResponse } from '../types'

/**
 * Set the value that you want to appear in the legend.
 * Sets 'label' by default.
 */
export const legendValue: ConfigHelper<CPie> = ({ config, data, fields }) => {
  type AllKeys = RawApiConfigResponse['label_type'] & LegendValues & ''

  const LEGEND_VALUE: Record<AllKeys, LegendValues> = {
    '': 'label_percent',
    lab: 'label',
    label: 'label',
    labPer: 'label_percent',
    label_percent: 'label_percent',
    labVal: 'label_value',
    label_value: 'label_value',
    per: 'percent',
    percent: 'percent',
    val: 'value',
    value: 'value',
  }

  const { label_type, legend, ...restConfig } = config

  const legendValue =
    LEGEND_VALUE[((legend && legend.value) || label_type || '') as AllKeys]

  return {
    config: {
      legend:
        legend === false
          ? false
          : {
              ...legend,
              value: legendValue,
            },
      ...restConfig,
    },
    data,
    fields,
  }
}
