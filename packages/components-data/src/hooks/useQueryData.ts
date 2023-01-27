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
import type { IQuery, IError } from '@looker/sdk'
import type { SDKResponse } from '@looker/sdk-rtl'
import {
  useNormalizedPivotLabels,
  buildPivotFields,
  tabularPivotResponse,
  tabularResponse,
  formatTotals,
} from '@looker/visualizations-adapters'
import type {
  Fields,
  SDKRecord,
  Totals,
  Pivots,
} from '@looker/visualizations-adapters'
import isEmpty from 'lodash/isEmpty'
import isEqual from 'lodash/isEqual'
import useSWR from 'swr'
import { getErrorResponse } from '../utils'
import { useSDK } from './useSDK'
import { DataState } from './useDataState'

type IQueryExtended = IQuery & {
  data: SDKRecord[]
  fields: Fields
  pivots: Pivots
  totals_data: Totals
}

type RunQueryReturnType = SDKResponse<IQueryExtended, IError>

/**
 * useQueryData fetches the query response (data, fields, etc) from a numeric query id
 * @param id numeric query id
 * @param agentTag used for internal telemetry
 * @returns normalized data, fields, totals, and async request state
 */

export const useQueryData = (id: number, agentTag?: string) => {
  const sdk = useSDK()
  const { getById, setById } = DataState.useContainer()

  /*
   * Check for stored values
   * -----------------------------------------------------------
   */

  const data = getById(id, 'data')
  const fields = getById(id, 'fields')
  const pivots = getById(id, 'pivots')
  const totals = getById(id, 'totals')

  /*
   * Dispatch network request
   * -----------------------------------------------------------
   */

  const fetcher = async () => {
    if (id > 0 && isEmpty(data)) {
      return (await sdk.run_query(
        {
          query_id: String(id),
          result_format: `json_detail`,
        },
        { agentTag }
      )) as unknown as Promise<RunQueryReturnType>
    }

    return undefined
  }

  const { data: SWRData, isValidating } = useSWR<void | RunQueryReturnType>(
    `useQueryData-${id}`, // caution: argument string must be unique to this instance
    fetcher,
    { revalidateOnFocus: false }
  )

  /*
   * Publish SWR response to central data store
   * -----------------------------------------------------------
   */

  useEffect(() => {
    const {
      data: rawData,
      fields: rawFields,
      pivots: rawPivots,
      totals_data: rawTotals,
    } = SWRData?.ok ? SWRData.value : ({} as IQueryExtended)

    if (id && !isEmpty(rawData) && !isEqual(rawData, data)) {
      setById(id, {
        data: rawData,
        ...(rawFields ? { fields: rawFields } : {}),
        ...(rawPivots ? { pivots: rawPivots } : {}),
        ...(rawTotals ? { totals: rawTotals } : {}),
      })
    }
  }, [id, SWRData, setById, data])

  /*
   * Transform and normalize data for use in visualizations
   * -----------------------------------------------------------
   */

  const normalizedPivots = useNormalizedPivotLabels(pivots)

  const normalizedFields =
    normalizedPivots && fields
      ? buildPivotFields({ fields, pivots: normalizedPivots })
      : fields

  const normalizedData =
    pivots && data && fields
      ? tabularPivotResponse({ data, fields, pivots })
      : tabularResponse(data || [])

  const normalizedTotals = totals ? formatTotals(totals) : undefined

  return {
    data: normalizedData,
    fields: normalizedFields,
    isOK: !!data,
    isPending: isValidating,
    pivots,
    totals: normalizedTotals,
    ...getErrorResponse(SWRData),
  }
}
