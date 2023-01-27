/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
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
