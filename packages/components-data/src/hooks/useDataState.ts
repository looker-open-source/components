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

import { useReducer } from 'react'
import type { Reducer } from 'react'
import { createContainer } from 'unstated-next'
import type { ILookmlModelExplore, IQuery } from '@looker/sdk'
import type {
  SDKRecord,
  Fields,
  Totals,
  Pivots,
} from '@looker/visualizations-adapters'
import set from 'lodash/set'

type QueryAttributes = {
  data: SDKRecord[]
  metadata: IQuery
  fields: Fields
  totals: Totals
  pivots: Pivots
}

export type DataStore = {
  dashboardIdMap: Record<number, number> // { DashboardID: QueryID }
  slugIdMap: Record<string, number> // { Slug: QueryID }
  byId: Record<number, Partial<QueryAttributes>>
  modelExplore: Record<string, Record<string, ILookmlModelExplore>> // { thelook: { orders: {... } }
}

type UpdateByDashboardID = {
  type: 'update_by_dashboard_id'
  payload: {
    dashboardId: number
    id: number
    queryInfo: Partial<QueryAttributes>
  }
}

type UpdateBySlug = {
  type: 'update_by_slug'
  payload: { slug: string; id: number; queryInfo: Partial<QueryAttributes> }
}

type UpdateByID = {
  type: 'update_by_id'
  payload: { id: number; queryInfo: Partial<QueryAttributes> }
}

type UpdateModelView = {
  type: 'update_model_view'
  payload: {
    model: string
    view: string
    explore: ILookmlModelExplore
  }
}

type DataActionsByID = UpdateBySlug | UpdateByID | UpdateByDashboardID

type AllDataActions = DataActionsByID | UpdateModelView

const setModelExplore = (
  state: DataStore,
  action: UpdateModelView
): DataStore['modelExplore'] => {
  const { model, view, explore } = action.payload
  const draftModelExplore = { ...state.modelExplore }
  set(draftModelExplore, [model, view], explore)

  return draftModelExplore
}

const setById = (
  state: DataStore,
  action: DataActionsByID
): DataStore['byId'] => {
  const {
    payload: { id, queryInfo },
  } = action

  return {
    ...state.byId,
    [id]: {
      ...state.byId[id],
      ...queryInfo,
    },
  }
}

const reducer: Reducer<DataStore, AllDataActions> = (state, action) => {
  switch (action.type) {
    case 'update_by_slug':
      return {
        ...state,
        byId: setById(state, action),
        slugIdMap: {
          ...state.slugIdMap,
          [action.payload.slug]: action.payload.id,
        },
      }

    case 'update_by_id':
      return {
        ...state,
        byId: setById(state, action),
      }

    case 'update_by_dashboard_id':
      return {
        ...state,
        byId: setById(state, action),
        dashboardIdMap: {
          ...state.dashboardIdMap,
          [action.payload.dashboardId]: action.payload.id,
        },
      }

    case 'update_model_view':
      return {
        ...state,
        modelExplore: setModelExplore(state, action),
      }

    default:
      return state
  }
}

const defaultInitialState: DataStore = {
  byId: {},
  dashboardIdMap: {},
  modelExplore: {},
  slugIdMap: {},
}

/*
 * This hook stores the data primitives used in the rest of the system.
 */
const useDataState = (initialState = defaultInitialState) => {
  const [{ dashboardIdMap, slugIdMap, byId, modelExplore }, dispatch] =
    useReducer(reducer, initialState)

  const getIdFromDashboard = (dashboardId?: number) =>
    dashboardId && dashboardIdMap[dashboardId]

  const getIdFromSlug = (slug: string) => slugIdMap[slug]

  const getById = <K extends keyof QueryAttributes>(
    id: number,
    key: K
  ): Partial<QueryAttributes>[K] => byId[id]?.[key]

  const setById = (id: number, queryInfo: Partial<QueryAttributes>) =>
    dispatch({ payload: { id, queryInfo }, type: 'update_by_id' })

  const setBySlug = (
    slug: string,
    id: number,
    queryInfo: Partial<QueryAttributes>
  ) => dispatch({ payload: { id, queryInfo, slug }, type: 'update_by_slug' })

  const setByDashboardId = (
    dashboardId: number,
    queryId: number,
    queryInfo: Partial<QueryAttributes>
  ) => {
    dispatch({
      payload: { dashboardId, id: queryId, queryInfo },
      type: 'update_by_dashboard_id',
    })
  }

  const setModelExplore = (
    model: string,
    view: string,
    explore: ILookmlModelExplore
  ) =>
    dispatch({ payload: { explore, model, view }, type: 'update_model_view' })

  const getModelExplore = (model?: string, view?: string) =>
    model && view ? modelExplore[model]?.[view] : undefined

  return {
    getById,
    getIdFromDashboard,
    getIdFromSlug,
    getModelExplore,
    setByDashboardId,
    setById,
    setBySlug,
    setModelExplore,
  }
}

export const DataState = createContainer(useDataState)
