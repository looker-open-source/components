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

import type { ComponentType, ReactNode } from 'react'
import React, { Children } from 'react'
import { useTheme } from 'styled-components'
import flow from 'lodash/flow'
import {
  useQueryId,
  useVisConfig,
  useQueryData,
  useQueryIdFromDashboard,
} from '@looker/components-data'
import type { CAll } from '@looker/visualizations-adapters'
import { ProgressCircular, Space, ComponentsProvider } from '@looker/components'
import { useTranslation } from '../utils'
import {
  ErrorBoundary,
  buildTrackingTag,
  sortByDateTime,
  nullValueZero,
  xAxisReversed,
} from '@looker/visualizations-adapters'
import { QueryError } from '../QueryError'

export type QueryProps = {
  /* Accept user defined config options to overwrite API response */
  config?: Partial<CAll>
  LoadingIndicator?: ComponentType
  children?: ReactNode
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

const QueryInternal = ({
  query,
  dashboard,
  children,
  config: configProp,
  LoadingIndicator,
}: QueryProps) => {
  const { t } = useTranslation('Query')

  if (dashboard && query) {
    // eslint-disable-next-line no-console
    console.warn(t('Query component received both dashboard and query props'))
  }

  const {
    queryId: dashboardQueryId,
    isPending: isDashboardPending,
    isOK: isDashboardOK,
    error: dashboardError,
  } = useQueryIdFromDashboard(dashboard)

  const {
    queryId,
    isPending: isQueryIdPending,
    isOK: isQueryIdOK,
    error: queryIdError,
  } = useQueryId(query || dashboardQueryId)

  const {
    visConfig,
    isPending: isVisConfigPending,
    isOK: isVisConfigOK,
    error: visConfigError,
  } = useVisConfig(queryId, configProp)

  const {
    data,
    fields,
    pivots,
    totals,
    isPending: isQueryDataPending,
    isOK: isQueryDataOK,
    error: queryDataError,
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

  if (!query && !dashboard) {
    // no query to render!
    return null
  }

  if (isLoading) {
    return (
      <Space justify="center" p="small">
        {LoadingIndicator ? <LoadingIndicator /> : <ProgressCircular />}
      </Space>
    )
  }

  if (!isEveryResponseOk) {
    return (
      <QueryError
        message={
          visConfigError?.message ||
          queryIdError?.message ||
          dashboardError?.message ||
          queryDataError?.message
        }
      />
    )
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
                pivots,
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
    console.warn(t('No children passed to Query component'))
    return null
  }
}

export const Query = (props: QueryProps) => {
  const theme = useTheme()

  if (!theme) {
    // Recursively wrap Query in ComponentsProvider to ensure that
    // i18n and theme values can be accessed outside Looker context.
    return (
      <ComponentsProvider>
        <Query {...props} />
      </ComponentsProvider>
    )
  }

  return (
    <ErrorBoundary>
      <QueryInternal {...props} />
    </ErrorBoundary>
  )
}
