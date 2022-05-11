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
import type { ConfigHelper } from '../types'

/**
 * Set legend type to either be 'legend' or 'labels'.
 * Sets 'legend' by default.
 */
export const legendType: ConfigHelper<CPie> = ({ config, data, fields }) => {
  const { value_labels, legend, ...restConfig } = config

  const LEGEND_TYPE = (legend && legend.type) || value_labels || 'legend'

  return {
    config: {
      legend:
        legend === false
          ? false
          : {
              ...legend,
              type: LEGEND_TYPE,
            },
      ...restConfig,
    },
    data,
    fields,
  }
}
