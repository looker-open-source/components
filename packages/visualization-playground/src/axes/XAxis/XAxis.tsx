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
import type { Dispatch, SetStateAction } from 'react'
import React from 'react'
import { Fieldset } from '@looker/components'
import type {
  CArea,
  CBar,
  CColumn,
  CLine,
  CScatter,
  CAll,
  XAxisConfig,
} from '@looker/visualizations'
import { Core } from '../Core'

/**
 * A list of relevant charts that access this configuration
 */
type SupportedChartConfig = CArea | CBar | CColumn | CLine | CScatter

const renderFor: Array<SupportedChartConfig['type']> = [
  'area',
  'bar',
  'column',
  'line',
  'scatter',
]

export type XAxisProps = {
  config: SupportedChartConfig
  onConfigChange: Dispatch<SetStateAction<Partial<CAll>>>
}

export const XAxis = (props: XAxisProps) => {
  const {
    config,
    config: { x_axis = [] },
    onConfigChange,
  } = props

  if (!renderFor.includes(config.type)) {
    // Early return! Only render for supported charts
    return null
  }

  const handleConfigChange = (axisIndex: number, axis: XAxisConfig) => {
    const draftAxis = [...x_axis]
    draftAxis[axisIndex] = axis
    onConfigChange({ ...config, x_axis: [...draftAxis] })
  }

  return (
    <Fieldset legend="X-Axis" defaultOpen accordion>
      <Core axisConfig={x_axis} onAxisChange={handleConfigChange} />
    </Fieldset>
  )
}
