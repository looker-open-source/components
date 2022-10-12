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
import type { IWriteQuery, IQuery } from '@looker/sdk'
import type { ISDKSuccessResponse } from '@looker/sdk-rtl'
import useSWR from 'swr'
import { getErrorResponse, isSuccessResponse } from '../utils'
import { useSDK } from './useSDK'
import { DataState } from './useDataState'

/**
 * useCreateQuery creates a new query derived from the `newQuery` configuration.
 * This inserts a new query into the database and returns the ID
 *
 * @param newQuery Query configuration (including any additional filters or parameters)
 * @returns Query ID and async request state
 */

export const useCreateQuery = (newQuery?: Partial<IWriteQuery>) => {
  const sdk = useSDK()
  const { setById } = DataState.useContainer()

  const fetcher = async () => {
    if (newQuery) {
      return await sdk.create_query(newQuery)
    }

    return undefined
  }

  const { data: SWRData, isValidating } = useSWR(
    JSON.stringify(newQuery),
    fetcher,
    { revalidateOnFocus: false }
  )

  const { id: draftId, ...draftMetadata } =
    (SWRData as ISDKSuccessResponse<IQuery>)?.value || {}

  useEffect(() => {
    setById(Number(draftId), {
      metadata: draftMetadata,
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [draftId])

  return {
    isOK: isSuccessResponse(SWRData) || typeof newQuery === 'undefined',
    isPending: isValidating,
    queryId: draftId ? Number(draftId) : undefined,
    ...getErrorResponse(SWRData),
  }
}
