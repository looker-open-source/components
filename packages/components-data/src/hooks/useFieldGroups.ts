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
import type {
  Looker40SDK,
  IError,
  ILookmlModelExplore,
  ILookmlModelExploreField,
} from '@looker/sdk'
import type { SDKResponse } from '@looker/sdk-rtl'
import isEmpty from 'lodash/isEmpty'
import isEqual from 'lodash/isEqual'
import memoize from 'lodash/memoize'
import useSWR from 'swr'
import { useSDK, useQueryMetadata, DataState } from '.'

const fetchModelExplore = memoize(
  async (model: string, explore: string, sdk: Looker40SDK) => {
    const result = await sdk.lookml_model_explore(model, explore, 'fields')
    return result
  }
)

type FieldGroups = {
  [group: string]: ILookmlModelExploreField[]
}

// Group the fields by view name, for easier browsing
const groupFields = (fields: ILookmlModelExploreField[] | undefined) => {
  if (!fields) return {}
  return fields.reduce((acc: FieldGroups, dimension) => {
    const { view } = dimension
    if (!view) return acc
    if (!acc[view]) {
      acc[view] = []
    }
    acc[view].push(dimension)
    return acc
  }, {})
}

/**
 * A shared hook for fetching the Field Groups associated with query ID.
 * Used for rendering filter options.
 *
 * @param id a numeric query id
 * @returns field groups and api state
 */

export const useFieldGroups = (id: number) => {
  const sdk = useSDK()
  const { setModelExplore, getModelExplore } = DataState.useContainer()

  /*
   * Check for stored values
   * -----------------------------------------------------------
   */
  const {
    metadata: { model, view },
  } = useQueryMetadata(id)
  const allModelFields = getModelExplore(model, view)

  /*
   * Dispatch network request
   * -----------------------------------------------------------
   */

  const fetcher = async () => {
    if (id > 0 && model && view && isEmpty(allModelFields)) {
      return fetchModelExplore(model, view, sdk)
    }

    return undefined
  }

  const { data: SWRData, isValidating, error } = useSWR<void | SDKResponse<
    ILookmlModelExplore,
    IError
  >>(
    `useFieldGroups-${model}-${view}`, // caution: argument string must be unique to this instance
    fetcher
  )

  /*
   * Publish SWR response to central data store
   * -----------------------------------------------------------
   */

  useEffect(() => {
    const { fields: draftModelFields } = SWRData?.ok
      ? SWRData?.value
      : ({} as ILookmlModelExplore)

    if (
      id &&
      model &&
      view &&
      draftModelFields &&
      !isEqual(draftModelFields, allModelFields)
    ) {
      setModelExplore(model, view, draftModelFields)
    }
  }, [id, SWRData, allModelFields, model, setModelExplore, view])

  /*
   * Group dimension fields for easier use in filters
   * -----------------------------------------------------------
   */

  const fieldGroups = allModelFields?.dimensions
    ? groupFields(allModelFields?.dimensions)
    : {}

  return {
    fieldGroups,
    isOK: !error,
    isPending: isValidating,
    ...(error ? { error } : {}),
  }
}
