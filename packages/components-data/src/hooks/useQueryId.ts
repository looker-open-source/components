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

import { useEffect, useMemo } from 'react'
import { isNumeric } from '@looker/visualizations-adapters'
import type { IQuery, IError } from '@looker/sdk'
import type { SDKResponse, ISDKSuccessResponse } from '@looker/sdk-rtl'
import useSWR from 'swr'
import { getErrorResponse } from '../utils'
import { useSDK } from './useSDK'
import { DataState } from './useDataState'

/**
 * useQueryId is a hook for getting the numeric query id from a string slug
 * @param slugOrId can be either a string slug or numeric id
 * @returns the numeric id associated with the query and async request state
 */
export const useQueryId = (slugOrId: string | number = '') => {
  const sdk = useSDK()
  const { getIdFromSlug, setBySlug, getById } = DataState.useContainer()

  /*
   * Check for stored value
   * -----------------------------------------------------------
   */

  const querySlug = slugOrId.toString()
  const queryId = getIdFromSlug(querySlug)
  const cachedQuery = useMemo(
    () => getById(queryId, 'metadata') || ({} as IQuery),
    [getById, queryId]
  )

  /*
   * Dispatch network request
   * -----------------------------------------------------------
   */

  const fetcher = async () => {
    if (isNumeric(querySlug)) {
      // Already have numeric Id; skip network request
      return Promise.resolve({
        ok: true,
        value: { id: querySlug },
      }) as unknown as Promise<ISDKSuccessResponse<IQuery>>
    } else if (querySlug && !queryId) {
      return await sdk.query_for_slug(querySlug)
    }

    return undefined
  }

  const { data: SWRData, isValidating } = useSWR<void | SDKResponse<
    IQuery,
    IError
  >>(
    `useQueryId-${querySlug}`, // caution: argument string must be unique to this instance
    fetcher,
    { revalidateOnFocus: false }
  )

  /*
   * Publish SWR response to central data store
   * -----------------------------------------------------------
   */

  useEffect(() => {
    const { id, ...SWRValue } = SWRData?.ok ? SWRData.value : ({} as IQuery)

    const draftQuery = { ...cachedQuery, ...SWRValue }

    if (id && Number(id) !== queryId) {
      setBySlug(querySlug, Number(id), { metadata: draftQuery })
    }
  }, [SWRData, queryId, querySlug, setBySlug, cachedQuery])

  return {
    isOK: !!queryId,
    isPending: isValidating,
    queryId,
    ...getErrorResponse(SWRData),
  }
}
