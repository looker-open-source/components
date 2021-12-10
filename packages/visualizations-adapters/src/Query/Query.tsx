/*

 MIT License

 Copyright (c) 2021 Looker Data Sciences, Inc.

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

import type { FC, ReactNode } from 'react'
import React, { useEffect, useState, useReducer, useCallback } from 'react'
import values from 'lodash/values'
import get from 'lodash/get'
import type { IError, Looker40SDK } from '@looker/sdk'
import type { ISDKErrorResponse, ISDKSuccessResponse } from '@looker/sdk-rtl'
import { isNumeric } from '../utils'
import { QueryContext } from './QueryContext'
import type { SDKRecord, CAll, Fields, Pivots, Totals } from '../types'

interface QueryProps {
  sdk: Looker40SDK
  children: ReactNode
  query?: number | string
  /* Accept user defined config options to overwrite API response */
  config?: Partial<CAll>
}

type AsyncRequestNames = 'fetchQueryId' | 'fetchVisConfig' | 'fetchQueryResult'
type AsyncRequestMetadata = {
  loading: boolean
  responseOk: boolean
  runCount: number
}

type AsyncReducerAction =
  | {
      type: 'reset'
    }
  | {
      type: 'update'
      name: AsyncRequestNames
      value: Partial<AsyncRequestMetadata>
    }

type AsyncReducerState = Record<AsyncRequestNames, AsyncRequestMetadata>

const initialAsyncState: AsyncReducerState = {
  fetchQueryId: { loading: false, responseOk: true, runCount: 0 },
  fetchQueryResult: { loading: false, responseOk: true, runCount: 0 },
  fetchVisConfig: { loading: false, responseOk: true, runCount: 0 },
}

function asyncStateReducer(
  state: typeof initialAsyncState,
  action: AsyncReducerAction
): AsyncReducerState {
  switch (action.type) {
    case 'reset':
      return initialAsyncState
    case 'update': {
      const { value, name } = action
      const { runCount, ...currentState } = state[name]
      return {
        ...state,
        [name]: { ...currentState, runCount: runCount + 1, ...value },
      }
    }
  }
}

type DataReducerState = {
  queryId: null | number
  data: null | SDKRecord
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  visConfig: null | Record<string, any>
  fields: null | Fields
  pivots: null | Pivots
  shareUrl: null | string
  totals: null | Totals
}

type DataReducerAction =
  | {
      type: 'reset'
    }
  | {
      type: 'update'
      value:
        | { queryId: number }
        | { data: SDKRecord }
        | { visConfig: Partial<CAll> }
        | { fields: Fields }
        | { pivots: Pivots }
        | { shareUrl: string }
        | { totals: Totals }
    }

const initialDataState: DataReducerState = {
  queryId: null,
  data: null,
  visConfig: null,
  fields: null,
  pivots: null,
  shareUrl: null,
  totals: null,
}

function dataStateReducer(
  state: typeof initialDataState,
  action: DataReducerAction
): DataReducerState {
  switch (action.type) {
    case 'reset':
      return initialDataState
    case 'update':
      return { ...state, ...action.value }
  }
}

export const Query: FC<QueryProps> = ({
  query,
  children,
  sdk,
  config: configOverrides,
}) => {
  const [error, setError] = useState<IError>()

  const [dataState, dispatchDataReducer] = useReducer(
    dataStateReducer,
    initialDataState
  )

  const [asyncState, dispatchAsyncReducer] = useReducer(
    asyncStateReducer,
    initialAsyncState
  )

  const {
    data,
    fields,
    pivots,
    totals,
    visConfig,
    shareUrl,
    queryId,
  } = dataState

  // They passed in a query ID instead of query Slug. No need to request this from the server:
  if (isNumeric(query) && !queryId) {
    dispatchDataReducer({ type: 'update', value: { queryId: Number(query) } })
  }

  // derived accumulative state from all the various requests:
  const isLoading = values(asyncState).some(v => v.loading === true)
  const isEveryResponseOk = values(asyncState).every(v => v.responseOk === true)

  const isDataShapeValid = Boolean(fields?.measures?.length)

  const isDataValid = isEveryResponseOk && data?.length && isDataShapeValid

  // reset reducer state when query prop changes
  useEffect(() => {
    dispatchAsyncReducer({ type: 'reset' })
    dispatchDataReducer({ type: 'reset' })
  }, [query, sdk])

  // asyncLifecycle DRYs up common request workflow:
  // 1. set loading state to true
  // 2. dispatch fetch request
  // 2a. catch error
  // 3. set loading state to false
  const asyncLifecycle = useCallback(
    async (name: AsyncRequestNames, request: () => void) => {
      // don't run if previous request is still pending
      if (
        asyncState[name].loading !== true &&
        asyncState[name].runCount === 0 &&
        isEveryResponseOk
      ) {
        dispatchAsyncReducer({ type: 'update', name, value: { loading: true } })
        try {
          await request()
        } catch (error) {
          if (!(error instanceof Error)) throw error
          dispatchAsyncReducer({
            type: 'update',
            name,
            value: { responseOk: false },
          })
          setError({
            ...error,
            documentation_url: 'https://docs.looker.com',
            message: `${name}: ${error.message}`,
          })
        }
        dispatchAsyncReducer({
          type: 'update',
          name,
          value: { loading: false },
        })
      }
    },
    [dispatchAsyncReducer, setError, asyncState, isEveryResponseOk]
  )

  useEffect(() => {
    const fetchQueryId = async (slug: string) => {
      const result = await sdk.query_for_slug(slug, 'id, vis_config, share_url')

      if (result.ok === false) {
        dispatchAsyncReducer({
          type: 'update',
          name: 'fetchQueryId',
          value: { responseOk: false },
        })
      }

      if ('value' in result) {
        const value = result.value
        if ('vis_config' in value) {
          dispatchDataReducer({
            type: 'update',
            value: { visConfig: value.vis_config as CAll },
          })
        }
        if ('id' in value) {
          dispatchDataReducer({
            type: 'update',
            value: { queryId: Number(value.id) },
          })
        }
        if ('share_url' in value) {
          dispatchDataReducer({
            type: 'update',
            value: { shareUrl: String(value.share_url) },
          })
        }
      } else {
        // render error state
        setError({
          ...error,
          ...(result as ISDKErrorResponse<IError>).error,
        })
      }
    }

    if (query && !queryId) {
      // assume user passed query slug instead of query id. fetch numeric ID and config from slug:
      asyncLifecycle('fetchQueryId', () => fetchQueryId(query as string))
    }
  }, [query, error, asyncLifecycle, queryId, sdk])

  // get full query response
  useEffect(() => {
    const fetchQueryResult = async (id: number) => {
      const queryArgs = {
        query_id: id,
        result_format: 'json_detail',
      }

      const result = await sdk.run_query(queryArgs)

      dispatchAsyncReducer({
        type: 'update',
        name: 'fetchQueryResult',
        value: { responseOk: result.ok },
      })

      if (result.ok === false && result.error) {
        // add query args to result for debugging purposes
        result.error = { ...result.error, ...queryArgs }
        setError((result as ISDKErrorResponse<IError>).error)
      } else if (result.ok === true && result.value) {
        const {
          data,
          fields,
          pivots,
          totals_data,
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } = (result as ISDKSuccessResponse<any>).value

        dispatchDataReducer({
          type: 'update',
          value: { data, fields, pivots, totals: totals_data },
        })
      }
    }

    const fetchVisConfig = async (id: number) => {
      const config = await sdk.query(id, 'vis_config, share_url')

      const visConfig = get(config, 'value.vis_config')
      const shareUrl = get(config, 'value.share_url')

      if (visConfig) {
        dispatchDataReducer({ type: 'update', value: { visConfig } })
      } else {
        dispatchAsyncReducer({
          type: 'update',
          name: 'fetchVisConfig',
          value: { responseOk: false },
        })
      }

      if (shareUrl) {
        dispatchDataReducer({ type: 'update', value: { shareUrl } })
      }
    }

    if (!!queryId && !data) {
      asyncLifecycle('fetchQueryResult', () =>
        fetchQueryResult(queryId as number)
      )
    }

    if (!!queryId && !visConfig) {
      asyncLifecycle('fetchVisConfig', () => fetchVisConfig(queryId as number))
    }
  }, [queryId, visConfig, data, asyncLifecycle, sdk])

  return (
    <QueryContext.Provider
      value={{
        config: { ...visConfig, ...configOverrides },
        error,
        ok: isEveryResponseOk,
        loading: isLoading,
        ...(isDataValid && { data, fields, pivots, shareUrl, totals }),
      }}
    >
      {children}
    </QueryContext.Provider>
  )
}
