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

import type { IDashboardFilter } from '@looker/sdk'
import type { IAPIMethods } from '@looker/sdk-rtl'
import type { ReactNode, Reducer } from 'react'
import React, { createContext, useCallback, useReducer } from 'react'

type FilterWithExpression = {
  filter: IDashboardFilter
  expression?: string
}

export interface FilterCollectionAction {
  type: 'UPDATE_EXPRESSION' | 'REMOVE_FILTER'
  payload: FilterWithExpression
}

export type FilterMap = { [key: string]: FilterWithExpression }

export type FilterCollectionState = {
  filterMap: FilterMap
}

const getFilterMap = (filterMap: FilterMap, payload: FilterWithExpression) => {
  const { filter, expression } = payload
  if (expression) {
    const newKeyValue = filter.title ? { [filter.title]: payload } : {}
    return { ...filterMap, ...newKeyValue }
  }
  if (filter.title) {
    const { [filter.title]: _filterToRemove, ...rest } = filterMap
    return rest
  }
  return filterMap
}

const reducer: Reducer<FilterCollectionState, FilterCollectionAction> = (
  state,
  action
) => {
  switch (action.type) {
    case 'UPDATE_EXPRESSION':
    case 'REMOVE_FILTER':
      return {
        ...state,
        filterMap: getFilterMap(state.filterMap, action.payload),
      }
    default:
      throw new Error()
  }
}

export type FilterContextProps = {
  state: FilterCollectionState
  updateExpression: (filter: IDashboardFilter, expression: string) => void
  removeFilter: (filter: IDashboardFilter) => void
  sdk?: IAPIMethods
}

// eslint-disable-next-line @typescript-eslint/no-empty-function
const noop = () => {}

const initialState: FilterCollectionState = { filterMap: {} }

const initialContext: FilterContextProps = {
  removeFilter: noop,
  state: initialState,
  updateExpression: noop,
}
export const FilterContext = createContext(initialContext)

export type FilterCollectionProps = {
  children: ReactNode | ReactNode[]
  /**
   * An initialized Looker SDK instance
   */
  sdk?: IAPIMethods
}
/**
 * FilterCollection's primary purpose is to manage a filter map
 * object, with filter metadata objects as keys and current
 * selected expressions as values.
 *
 * This allows filters with `listens_to_filters` to pull the relevant
 * expressions out when performing a linked filter suggestion query.
 *
 * The initialized Looker SDK instance can also be stored here
 * to be used for fetching suggestions.
 */
export const FilterCollection = ({ children, sdk }: FilterCollectionProps) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const updateExpression = useCallback(
    (filter: IDashboardFilter, expression: string) => {
      dispatch({ type: 'UPDATE_EXPRESSION', payload: { filter, expression } })
    },
    []
  )
  const removeFilter = useCallback((filter: IDashboardFilter) => {
    dispatch({ type: 'REMOVE_FILTER', payload: { filter } })
  }, [])
  return (
    <FilterContext.Provider
      value={{ removeFilter, state, sdk, updateExpression }}
    >
      {children}
    </FilterContext.Provider>
  )
}
