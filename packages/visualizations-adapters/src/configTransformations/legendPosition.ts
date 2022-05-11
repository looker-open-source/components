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

import type {
  ConfigHelper,
  CommonCartesianProperties,
  LegendPositions,
} from '../types'

/**
 * Combine `legend_position` and `hide_legend` into a single `legend` object.
 */
export const legendPosition: ConfigHelper<CommonCartesianProperties> = ({
  config,
  data,
  fields,
}) => {
  type DefaultApiResponse = 'left' | 'center' | 'right'
  type AllKeys = DefaultApiResponse & LegendPositions & ''

  const { hide_legend, legend_position, legend, ...restConfig } = config

  // Pie charts render legend to the right by default. All other cartesian charts
  // render the legend below.
  const DEFAULT_POSITION = config.type === 'pie' ? 'right' : 'bottom'

  const LEGEND_POSITION: Record<AllKeys, LegendPositions> = {
    '': DEFAULT_POSITION,
    bottom: 'bottom',
    center: DEFAULT_POSITION,
    left: 'left',
    right: 'right',
    top: 'top',
  }

  const positionValue =
    LEGEND_POSITION[
      ((legend && legend.position) || legend_position || '') as AllKeys
    ]

  return {
    config: {
      ...restConfig,
      legend:
        hide_legend === true || legend === false
          ? false
          : {
              ...legend,
              position: positionValue,
            },
    },
    data,
    fields,
  }
}
