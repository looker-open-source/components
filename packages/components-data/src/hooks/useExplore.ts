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
import type { IError, ILookmlModelExplore } from '@looker/sdk'
import type { SDKResponse } from '@looker/sdk-rtl'
import isEmpty from 'lodash/isEmpty'
import isEqual from 'lodash/isEqual'
import useSWR from 'swr'
import { getErrorResponse } from '../utils'
import { useSDK, useQueryMetadata, DataState } from '.'

/**
 * A shared hook for fetching the Field Groups associated with query ID.
 * Used for rendering filter options.
 *
 * @param id a numeric query id
 * @returns field groups and api state
 */

export const useExplore = (id: number) => {
  const sdk = useSDK()
  const { setModelExplore, getModelExplore } = DataState.useContainer()

  /*
   * Check for stored values
   * -----------------------------------------------------------
   */
  const {
    metadata: { model, view },
  } = useQueryMetadata(id)
  const explore = getModelExplore(model, view)

  /*
   * Dispatch network request
   * -----------------------------------------------------------
   */

  const fetcher = async () => {
    if (id > 0 && model && view && isEmpty(explore)) {
      return await sdk.lookml_model_explore(model, view)
    }

    return undefined
  }

  const { data: SWRData, isValidating } = useSWR<void | SDKResponse<
    ILookmlModelExplore,
    IError
  >>(
    `useExplore-${model}-${view}`, // caution: argument string must be unique to this instance
    fetcher,
    { revalidateOnFocus: false }
  )

  /*
   * Publish SWR response to central data store
   * -----------------------------------------------------------
   */

  useEffect(() => {
    const draftExplore: ILookmlModelExplore =
      (SWRData?.ok && SWRData.value) || {}

    if (
      id &&
      model &&
      view &&
      !isEmpty(draftExplore) &&
      !isEqual(draftExplore, explore)
    ) {
      setModelExplore(model, view, draftExplore)
    }
  }, [id, SWRData, explore, model, setModelExplore, view])

  return {
    explore,
    isOK: !!explore,
    isPending: isValidating,
    ...getErrorResponse(SWRData),
  }
}
