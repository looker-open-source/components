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

import { useEffect } from 'react'
import type { Looker40SDK, IDashboard, IError, IQuery } from '@looker/sdk'
import type { SDKResponse } from '@looker/sdk-rtl'
import memoize from 'lodash/memoize'
import useSWR from 'swr'
import { getErrorResponse } from '../utils'
import { DataState } from './useDataState'
import { useSDK } from './useSDK'

const fetchDashboard = memoize(async (requestId: number, sdk: Looker40SDK) => {
  const result = await sdk.dashboard(String(requestId), 'dashboard_elements')
  return result
})

/**
 * This hook fetches data from provided dashboard Id, and returns
 * the first query listed in `dashboard_elements` response.
 *
 * @param dashboardId a numeric dashboard Id
 * @returns the query ID associated with the first dashboard tile, and api state
 */

export const useQueryIdFromDashboard = (dashboardId?: number) => {
  const sdk = useSDK()
  const { getIdFromDashboard, setByDashboardId } = DataState.useContainer()

  /*
   * Check for stored value
   * -----------------------------------------------------------
   */

  const queryId = getIdFromDashboard(dashboardId)

  /*
   * Dispatch network request
   * -----------------------------------------------------------
   */

  const fetcher = async () => {
    if (dashboardId && !queryId) {
      return fetchDashboard(dashboardId, sdk)
    }

    return undefined
  }

  const { data: SWRData, isValidating } = useSWR<void | SDKResponse<
    IDashboard,
    IError
  >>(
    `useQueryIdFromDashboard-${dashboardId}`, // caution: argument string must be unique to this instance
    fetcher
  )

  /*
   * Publish SWR response to central data store
   * -----------------------------------------------------------
   */

  useEffect(() => {
    const firstTile = SWRData?.ok
      ? SWRData?.value?.dashboard_elements?.[0]?.query
      : undefined

    const { id, ...query } = firstTile || ({} as IQuery)

    if (dashboardId && id && Number(id) !== queryId) {
      setByDashboardId(dashboardId, Number(id), { metadata: query })
    }
  }, [SWRData, dashboardId, setByDashboardId, queryId])

  return {
    isOK: !!queryId || typeof dashboardId === 'undefined',
    isPending: isValidating,
    queryId,
    ...getErrorResponse(SWRData),
  }
}
