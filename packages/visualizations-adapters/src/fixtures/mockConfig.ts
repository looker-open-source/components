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

import type { CBar, CLine, CPie, CScatter, CTable } from '../adapters'

export const mockBarConfig: CBar = {
  type: 'bar',
  positioning: 'grouped',
  legend: { position: 'bottom' },
  series: [
    { color: '#ffcccc', visible: true },
    { color: '#00ffcc', visible: true },
  ],
  x_axis: [
    {
      reversed: false,
      label: 'Orders',
      values: true,
      gridlines: true,
    },
  ],
  y_axis: [
    {
      label: false,
      values: true,
      gridlines: true,
      range: ['auto', 'auto'],
    },
  ],
}

export const mockPieConfig: CPie = {
  type: 'pie',
  legend: { position: 'bottom', value: 'label', type: 'legend' },
  series: [{ color: '#fa8072' }],
}

export const mockLineConfig: CLine = {
  type: 'line',
  legend: { position: 'bottom' },
  series: [
    { color: '#ff0000', style: 'filled' },
    { color: '#00FF00', shape: 'diamond' },
  ],
  y_axis: [
    {
      range: ['auto', 'auto'],
    },
  ],
}

export const mockTableConfig: CTable = {
  type: 'table',
}

export const mockScatterConfig: CScatter = {
  type: 'scatter',
}
