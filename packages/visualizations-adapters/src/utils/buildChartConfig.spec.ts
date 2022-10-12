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

import { buildChartConfig } from './buildChartConfig'
import { mockFields, mockData } from '../__mocks__'

describe('buildChartConfig', () => {
  it('normalizes chart type strings', () => {
    const lineConfig = buildChartConfig({
      config: { type: 'looker_line' },
    })

    expect(lineConfig.type).toEqual('line')

    const barConfig = buildChartConfig({
      config: { type: 'looker_bar' },
    })

    expect(barConfig.type).toEqual('bar')

    const scatterConfig = buildChartConfig({
      config: { type: 'looker_scatter' },
    })

    expect(scatterConfig.type).toEqual('scatter')
  })

  it('removes unsupported config values from final output', () => {
    const config = buildChartConfig({
      config: { defaults_version: 2 },
    })

    expect(config.defaults_version).toEqual(undefined)
  })

  it('passes through deeply nested user overrides', () => {
    const config = buildChartConfig({
      config: {
        type: 'line',
        series: { 'orders.count': { color: '#FF5733', label: 'TEST LABEL' } },
      },
      data: mockData,
      fields: mockFields,
    })

    expect(config.series['orders.count']).toEqual({
      color: '#FF5733',
      label: 'TEST LABEL',
      line_width: 3,
      shape: 'circle',
      style: 'filled',
      value_format: '0,0.[00]',
      visible: true,
    })
  })

  it('sets bar default values', () => {
    const config = buildChartConfig({
      config: { type: 'bar' },
      data: mockData,
      fields: mockFields,
    })

    expect(config.positioning).toEqual('grouped')
  })
})
