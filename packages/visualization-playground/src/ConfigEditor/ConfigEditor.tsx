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
import type { FC, Dispatch, SetStateAction } from 'react'
import React from 'react'
import type { CAll, QueryProps } from '@looker/visualizations'
import {
  useVisConfig,
  useQueryId,
  useQueryData,
  useQueryIdFromDashboard,
} from '@looker/components-data'
import { Series } from '../Series'
import { XAxis, YAxis } from '../axes'
import { Heading, Tabs2, Tab2 } from '@looker/components'
import { StyledCard } from '../StyledCard'

type ConfigEditorProps = {
  config: Partial<CAll>
  onConfigChange: Dispatch<SetStateAction<Partial<CAll>>>
} & Pick<QueryProps, 'dashboard' | 'query'>

export const ConfigEditor: FC<ConfigEditorProps> = ({
  config: configOverrides,
  onConfigChange,
  query,
  dashboard,
}) => {
  const { queryId: dashboardQueryId } = useQueryIdFromDashboard(dashboard)
  const { queryId } = useQueryId(query || dashboardQueryId)
  const { visConfig } = useVisConfig(queryId, configOverrides)

  const { fields = { measures: [], dimensions: [] } } = useQueryData(queryId)

  return (
    <StyledCard>
      <Heading as="h4">2. Customize</Heading>
      <Tabs2 distributed>
        <Tab2 id="series" label="Series" p="0">
          <Series
            config={visConfig}
            fields={fields}
            onConfigChange={onConfigChange}
          />
        </Tab2>
        <Tab2 id="axis" label="Axis">
          <XAxis config={visConfig} onConfigChange={onConfigChange} />
          <YAxis config={visConfig} onConfigChange={onConfigChange} />
        </Tab2>
      </Tabs2>
    </StyledCard>
  )
}
