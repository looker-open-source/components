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
import React from 'react'
import type { Dispatch, SetStateAction } from 'react'
import type {
  CAll,
  CArea,
  CBar,
  CColumn,
  CLine,
  CScatter,
  LinearPositions,
  BarPositions,
} from '@looker/visualizations-adapters'
import { FieldSelect } from '@looker/components'

/**
 * A list of relevant charts that access this configuration
 */
type SupportedChartConfig = CBar | CColumn | CArea | CLine | CScatter

const renderFor: Array<SupportedChartConfig['type']> = ['area', 'bar', 'column']

const barPositions: BarPositions[] = ['grouped', 'stacked', 'percent']
const linePositions: LinearPositions[] = ['overlay', 'stacked', 'percent']

export type PositioningProps = {
  config: SupportedChartConfig
  onConfigChange: Dispatch<SetStateAction<Partial<CAll>>>
}

export const Positioning = (props: PositioningProps) => {
  const { config, onConfigChange } = props
  if (!renderFor.includes(config.type)) {
    // Early return! Only render for supported charts
    return null
  }

  const handleChange = (newPosition: string) => {
    const draft = { ...config, positioning: newPosition }
    onConfigChange(draft as SupportedChartConfig)
  }

  const positions =
    config.type === 'bar' || config.type === 'column'
      ? barPositions
      : linePositions

  return (
    <FieldSelect
      label="Positioning"
      value={config.positioning}
      onChange={handleChange}
      options={positions.map(p => ({ value: p }))}
    />
  )
}
