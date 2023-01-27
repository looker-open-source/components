/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import { useEffect } from 'react'
import type { IDashboard, IError, IQuery } from '@looker/sdk'
import type { SDKResponse } from '@looker/sdk-rtl'
import useSWR from 'swr'
import { getErrorResponse } from '../utils'
import { DataState } from './useDataState'
import { useSDK } from './useSDK'

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
      return await sdk.dashboard(String(dashboardId), 'dashboard_elements')
    }

    return undefined
  }

  const { data: SWRData, isValidating } = useSWR<void | SDKResponse<
    IDashboard,
    IError
  >>(
    `useQueryIdFromDashboard-${dashboardId}`, // caution: argument string must be unique to this instance
    fetcher,
    { revalidateOnFocus: false }
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
