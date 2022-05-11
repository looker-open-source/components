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
import type { FC, FormEvent, SetStateAction, Dispatch } from 'react'
import React from 'react'
import { FieldText, FieldSelect, Heading, Fieldset } from '@looker/components'
import { FieldInfo } from '../FieldInfo'
import type { CAll, SupportedChartTypes } from '@looker/visualizations-adapters'
import { SUPPORTED_CHART_TYPES } from '@looker/visualizations-adapters'
import {
  useVisConfig,
  useQueryId,
  useQueryIdFromDashboard,
} from '@looker/components-data'
import { Legend } from '../Legend'
import { RenderNullValues } from '../RenderNullValues'
import { Tooltips } from '../Tooltips'
import { Positioning } from '../Positioning'
import { TruncateText } from '../TruncateText'
import { StyledCard } from '../StyledCard'

interface EmbedEditorProps {
  width?: string
  setWidth: Dispatch<SetStateAction<string | undefined>>
  height?: string
  setHeight: Dispatch<SetStateAction<string | undefined>>
  config: Partial<CAll>
  onConfigChange: Dispatch<SetStateAction<Partial<CAll>>>
  query?: string | number
  dashboard?: number
}

/** EmbedEditor is used to modify settings unrelated to vis config  */

export const EmbedEditor: FC<EmbedEditorProps> = ({
  width,
  height,
  setWidth,
  setHeight,
  config: configOverrides,
  onConfigChange,
  query,
  dashboard,
}) => {
  const handleWidthChange = (e: FormEvent) => {
    const value = (e.target as HTMLInputElement).value
    setWidth(value)
  }
  const handleHeightChange = (e: FormEvent) => {
    const value = (e.target as HTMLInputElement).value
    setHeight(value)
  }

  const { queryId: dashboardQueryId } = useQueryIdFromDashboard(dashboard)
  const { queryId } = useQueryId(query || dashboardQueryId)
  const { visConfig } = useVisConfig(queryId, configOverrides)

  return (
    <StyledCard>
      <Heading as="h4">1. Settings</Heading>
      {/* Select a new chart type from SupportedChartTypes */}
      <FieldSelect
        name="type"
        label="Chart Type"
        onChange={t => {
          onConfigChange({ type: t as keyof SupportedChartTypes })
        }}
        value={visConfig.type}
        options={[
          ...Object.values(SUPPORTED_CHART_TYPES).map(t => ({ value: t })),
        ]}
      />
      <Fieldset inline>
        <FieldText
          label="Width"
          value={width}
          onChange={handleWidthChange}
          detail={
            <FieldInfo
              content={
                "'auto' spans available width. Otherwise accepts a number to set pixel value."
              }
            />
          }
        />
        <FieldText
          label="Height"
          value={height}
          onChange={handleHeightChange}
          detail={
            <FieldInfo
              content={
                "'auto' falls back to default value hard-coded in the charts. Otherwise accepts a number to set pixel value."
              }
            />
          }
        />
      </Fieldset>
      <Legend config={visConfig} onConfigChange={onConfigChange} />
      <Fieldset inline>
        <Tooltips config={visConfig} onConfigChange={onConfigChange} />
        <RenderNullValues config={visConfig} onConfigChange={onConfigChange} />
      </Fieldset>
      <Fieldset inline>
        <Positioning config={visConfig} onConfigChange={onConfigChange} />
        <TruncateText config={visConfig} onConfigChange={onConfigChange} />
      </Fieldset>
    </StyledCard>
  )
}
