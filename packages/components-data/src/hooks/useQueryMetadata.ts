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
import type { IQuery, IError } from '@looker/sdk'
import type { SDKResponse } from '@looker/sdk-rtl'
import isEmpty from 'lodash/isEmpty'
import isEqual from 'lodash/isEqual'
import useSWR from 'swr'
import { getErrorResponse, isSuccessResponse } from '../utils'
import { useSDK } from './useSDK'
import { DataState } from './useDataState'

/**
 * A shared hook for fetching query metadata, including config (untransformed and
 * unmodified from the SDK), model, and view data.
 *
 * Use `useVisConfig` instead if you require normalized and transformed config object.
 *
 * @param id a numeric query id
 * @returns metadata object and api state
 */

export const useQueryMetadata = (id: number) => {
  const sdk = useSDK()
  const { getById, setById } = DataState.useContainer()

  /*
   * Check for stored values
   * -----------------------------------------------------------
   */

  const metadata = useMemo(
    () => getById(id, 'metadata') || ({} as IQuery),
    [id, getById]
  )

  /*
   * Dispatch network request
   * -----------------------------------------------------------
   */

  const fetcher = async () => {
    if (
      id > 0 &&
      (isEmpty(metadata.vis_config) || !metadata.model || !metadata.view)
    ) {
      return await sdk.query(String(id))
    }

    return undefined
  }

  const { data: SWRData, isValidating } = useSWR<void | SDKResponse<
    IQuery,
    IError
  >>(
    `useQueryMetadata-${id}`, // caution: argument string must be unique to this instance
    fetcher,
    { revalidateOnFocus: false }
  )

  /*
   * Publish SWR response to central data store
   * -----------------------------------------------------------
   */

  useEffect(() => {
    const SWRValue = isSuccessResponse(SWRData) ? SWRData.value : ({} as IQuery)

    const {
      vis_config: draftConfig,
      model: draftModel,
      view: draftView,
    } = SWRValue

    if (
      id &&
      ((!isEmpty(draftConfig) && !isEqual(metadata.vis_config, draftConfig)) ||
        (draftModel && draftModel !== metadata.model) ||
        (draftView && draftView !== metadata.view))
    ) {
      const draftQuery = { ...metadata, ...SWRValue }

      setById(id, { metadata: draftQuery })
    }
  }, [id, SWRData, metadata, setById])

  return {
    isOK: !!metadata,
    isPending: isValidating,
    metadata,
    ...getErrorResponse(SWRData),
  }
}
