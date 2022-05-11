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
import type { Dispatch, SetStateAction, FormEvent } from 'react'
import type {
  CAll,
  CLine,
  CArea,
  CScatter,
  CSparkline,
} from '@looker/visualizations-adapters'
import { FieldCheckbox } from '@looker/components'

/**
 * A list of relevant charts that access this configuration
 */
type SupportedChartConfig = CLine | CArea | CScatter | CSparkline

type RenderNullValuesProps = {
  config: SupportedChartConfig
  onConfigChange: Dispatch<SetStateAction<Partial<CAll>>>
}

const renderFor: Array<SupportedChartConfig['type']> = [
  'area',
  'line',
  'scatter',
  'sparkline',
]

export const RenderNullValues = (props: RenderNullValuesProps) => {
  const { config, onConfigChange } = props
  const { render_null_values } = config

  if (!renderFor.includes(config.type)) {
    // Early return! Only render for supported charts
    return null
  }

  const handleChange = (e: FormEvent) => {
    const { checked } = e.target as HTMLInputElement
    const draft = { ...config, render_null_values: checked }
    onConfigChange(draft)
  }

  return (
    <FieldCheckbox
      label="Render Null Values"
      checked={render_null_values}
      onChange={handleChange}
    />
  )
}
