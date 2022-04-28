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
  LegendTypes,
  LegendValues,
  CPie,
  CAll,
  CPieLegend,
} from '@looker/visualizations-adapters'

import { FieldSelect, Fieldset } from '@looker/components'

export type LegendProps = {
  config: CPie
  onConfigChange: Dispatch<SetStateAction<Partial<CAll>>>
}

const legendTypes: LegendTypes[] = ['legend', 'labels']
const legendValues: LegendValues[] = [
  'label',
  'label_percent',
  'label_value',
  'percent',
  'value',
]

export const LegendPie = ({ onConfigChange, config }: LegendProps) => {
  const { legend } = config

  if (!legend) return null

  const handleTypeChange = (newType: string) => {
    const draft: CPie = {
      ...(config as CPie),
      legend: {
        ...(legend as CPieLegend),
        type: newType as LegendTypes,
      },
    }
    onConfigChange(draft)
  }

  const handleValuesChange = (newVal: string) => {
    const draft: CPie = {
      ...(config as CPie),
      legend: {
        ...(legend as CPieLegend),
        value: newVal as LegendValues,
      },
    }
    onConfigChange(draft)
  }

  return (
    <Fieldset legend="Legend Options" accordion defaultOpen>
      {Object.prototype.hasOwnProperty.call(legend, 'type') && (
        <FieldSelect
          label="Legend Type"
          options={legendTypes.map(t => ({ value: t }))}
          value={(legend as CPieLegend).type}
          onChange={handleTypeChange}
        />
      )}
      {Object.prototype.hasOwnProperty.call(legend, 'value') && (
        <FieldSelect
          label="Legend Values"
          options={legendValues.map(v => ({ value: v }))}
          value={(legend as CPieLegend).value}
          onChange={handleValuesChange}
        />
      )}
    </Fieldset>
  )
}
