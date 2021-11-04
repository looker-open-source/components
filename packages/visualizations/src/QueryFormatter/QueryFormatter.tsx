/*

 MIT License

 Copyright (c) 2021 Looker Data Sciences, Inc.

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

import type { FC, ReactElement } from 'react'
import React, { useContext } from 'react'
import { Space, ProgressCircular, ComponentsProvider } from '@looker/components'
import { ThemeContext } from 'styled-components'
import type { CAll } from '@looker/visualizations-adapters'
import {
  tabularResponse,
  QueryContext,
  commonCartesianDefaults,
  normalizeChartTypes,
} from '@looker/visualizations-adapters'
import flow from 'lodash/flow'

export interface QueryFormatterProps {
  children: ReactElement
}

export const QueryFormatter: FC<QueryFormatterProps> = props => {
  const { children } = props

  const { ok, data = [], fields, config, loading } = useContext(QueryContext)

  const theme = useContext(ThemeContext)

  if (!theme) {
    // Recursively wrap QueryFormatter in ComponentsProvider to ensure that
    // custom vis can be rendered outside of Looker Components context
    // without breaking.
    return (
      <ComponentsProvider>
        <QueryFormatter {...props} />
      </ComponentsProvider>
    )
  }

  if (loading) {
    return (
      <Space justifyContent="center" p="small">
        <ProgressCircular />
      </Space>
    )
  }

  if (data && config && fields) {
    const configWithDefaults = flow([
      normalizeChartTypes,
      ...commonCartesianDefaults,
      ({ config }: { config: CAll }) => config, // final step, return config object
    ])({
      config,
      fields,
    })

    return React.cloneElement(children, {
      config: configWithDefaults,
      data: tabularResponse(data),
      fields,
      ok,
    })
  } else {
    return null
  }
}
