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
import type { Dispatch, FormEvent, SetStateAction } from 'react'
import React, { useState } from 'react'
import type {
  LegendPositions,
  CArea,
  CBar,
  CColumn,
  CScatter,
  CLine,
  CPie,
  CAll,
  CPieLegend,
  CartesianLegend,
} from '@looker/visualizations-adapters'
import { isNumeric } from '@looker/visualizations-adapters'
import { FieldSelect, FieldText } from '@looker/components'
import { LegendPie } from './LegendPie'

/**
 * A list of relevant charts that access the legend configuration
 */
type SupportedChartConfig = CPie | CLine | CArea | CBar | CColumn | CScatter

export type LegendProps = {
  config: SupportedChartConfig
  onConfigChange: Dispatch<SetStateAction<Partial<CAll>>>
}

const legendPositions: LegendPositions[] = ['left', 'right', 'top', 'bottom']
const renderLegendFor: Array<SupportedChartConfig['type']> = [
  'area',
  'bar',
  'column',
  'line',
  'pie',
  'scatter',
]

export const Legend = (props: LegendProps) => {
  const { config, onConfigChange } = props
  const [width, setWidth] = useState<string | undefined>()

  if (!renderLegendFor.includes(config.type)) {
    // Early return! Only render for supported charts
    return null
  }

  const { legend } = config
  const position = config.legend ? config.legend.position : 'none'

  const handlePositionChange = (draftPosition: string) => {
    if (draftPosition === 'none') {
      onConfigChange({
        ...config,
        legend: false,
      })
    } else {
      onConfigChange({
        ...config,
        legend: {
          ...(legend as CPieLegend),
          position: draftPosition as LegendPositions,
        },
      })
    }
  }

  const handleWidthChange = (e: FormEvent) => {
    const value = (e.target as HTMLInputElement).value
    onConfigChange({
      ...config,
      legend: {
        ...(legend as CartesianLegend),
        width: Number(isNumeric(value)) ? Number(value) : undefined,
      },
    })
    setWidth(value)
  }

  return (
    <>
      <FieldSelect
        label="Legend"
        options={['none', ...legendPositions].map(p => ({ value: p }))}
        value={position}
        onChange={handlePositionChange}
      />
      {(position === 'left' || position === 'right') && (
        <FieldText
          label="Legend Width"
          value={width}
          onChange={handleWidthChange}
        />
      )}
      {config.type === 'pie' && (
        <LegendPie
          config={props.config as CPie}
          onConfigChange={props.onConfigChange}
        />
      )}
    </>
  )
}
