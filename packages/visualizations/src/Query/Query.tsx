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

import type { FC, ComponentType } from 'react'
import React, { Children } from 'react'
import flow from 'lodash/flow'
import {
  useQueryId,
  useVisConfig,
  useQueryData,
  useQueryIdFromDashboard,
} from '@looker/components-data'
import type { CAll } from '@looker/visualizations-adapters'
import { ProgressCircular, Space } from '@looker/components'
import {
  buildTrackingTag,
  sortByDateTime,
  nullValueZero,
  xAxisReversed,
  i18Noop,
} from '@looker/visualizations-adapters'

export type QueryProps = {
  /* Accept user defined config options to overwrite API response */
  config?: Partial<CAll>
  LoadingIndicator?: ComponentType
} & (
  | /* Restricted prop combo: use EITHER a dashboard or query, but not both */
  {
      dashboard?: never
      query?: string | number
    }
  | {
      dashboard?: number
      query?: never
    }
)

export const Query: FC<QueryProps> = ({
  query,
  dashboard,
  children,
  config: configProp,
  LoadingIndicator,
}) => {
  if (dashboard && query) {
    // eslint-disable-next-line no-console
    console.warn(
      i18Noop(
        'Error: Query component received both `dashboard` and `query` props. The `dashboard` prop will be ignored.'
      )
    )
  }

  const {
    queryId: dashboardQueryId,
    isPending: isDashboardPending,
    isOK: isDashboardOK,
  } = useQueryIdFromDashboard(dashboard)

  const {
    queryId,
    isPending: isQueryIdPending,
    isOK: isQueryIdOK,
  } = useQueryId(query || dashboardQueryId)

  const {
    visConfig,
    isPending: isVisConfigPending,
    isOK: isVisConfigOK,
  } = useVisConfig(queryId, configProp)

  const {
    data,
    fields,
    totals,
    isPending: isQueryDataPending,
    isOK: isQueryDataOK,
  } = useQueryData(queryId, buildTrackingTag(visConfig.type))

  // derived accumulative state from all the various requests:
  const isLoading = [
    isDashboardPending,
    isQueryIdPending,
    isVisConfigPending,
    isQueryDataPending,
  ].some(Boolean)

  const isEveryResponseOk = [
    isDashboardOK,
    isQueryIdOK,
    isVisConfigOK,
    isQueryDataOK,
  ].every(responseOk => responseOk === true)

  if (isLoading) {
    return (
      <Space justifyContent="center" p="small">
        {LoadingIndicator ? <LoadingIndicator /> : <ProgressCircular />}
      </Space>
    )
  }

  const isDataValid = Boolean(
    isEveryResponseOk && data?.length && fields?.dimensions
  )

  if (!isDataValid) {
    return null
  }

  const dataTransformations = [sortByDateTime, nullValueZero, xAxisReversed]

  const { data: transformedData } = flow(dataTransformations)({
    data,
    config: visConfig,
    fields,
  })

  /*
   * Pass normalized values down to children
   */

  if (Children.count(children) >= 1) {
    return (
      <>
        {Children.map(children, child => {
          return React.isValidElement(child)
            ? React.cloneElement(child, {
                config: visConfig,
                data: transformedData,
                fields,
                loading: isLoading,
                ok: isEveryResponseOk,
                totals,
              })
            : child
        })}
      </>
    )
  } else {
    // eslint-disable-next-line no-console
    console.warn(
      i18Noop('Warning: No children passed to Query component. Rendering null.')
    )
    return null
  }
}
