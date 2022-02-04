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

import type { CArea, CLine } from '../adapters'
import type { ConfigHelper, RawApiConfigResponse } from '../types'

/**
 * Convert 'stacking' prop to 'positioning' and set Area chart default value
 */
export const linePositioning: ConfigHelper<CArea | CLine> = ({
  config,
  data,
  fields,
}) => {
  type AllKeys = RawApiConfigResponse['stacking'] | 'default'

  const { positioning, stacking, ...restConfig } = config

  const currentPositioning = positioning || stacking || ''

  const GROUP_MODES: Record<AllKeys, CArea['positioning']> = {
    default: 'overlay',
    grouped: 'overlay',
    normal: 'stacked',
    overlay: 'overlay',
    percent: 'percent',
    stacked: 'stacked',
  }

  return {
    config: {
      ...restConfig,
      positioning:
        GROUP_MODES[currentPositioning as AllKeys] || GROUP_MODES.default,
    },
    data,
    fields,
  }
}
