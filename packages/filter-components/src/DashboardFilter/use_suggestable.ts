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
import { useEffectDeepEquals } from '@looker/components'
import type { IDashboardFilter, ILookmlModelExploreField } from '@looker/sdk'
import type { IAPIMethods } from '@looker/sdk-rtl'
import { model_fieldname_suggestions } from '@looker/sdk'
import { useContext, useMemo, useState } from 'react'
import { useTranslation } from '../utils'
import type { FilterProps } from '../Filter/types/filter_props'
import type { FilterMap } from '../FilterCollection'
import { FilterContext } from '../FilterCollection'

export interface UseSuggestableProps {
  /**
   * A dashboard filter as defined in @looker/sdk
   */
  filter: IDashboardFilter
  /**
   * An initialized Looker SDK instance
   */
  sdk?: IAPIMethods
}

const shouldFetchSuggestions = (field?: ILookmlModelExploreField) => {
  return field?.suggestable && !field?.enumerations && !field?.suggestions
}

/**
 * Returns the correct prop & value for suggestions, enumerations, or none
 */
const getOptionsProps = (
  field: ILookmlModelExploreField | undefined,
  fetchedSuggestions: string[]
) => {
  if (shouldFetchSuggestions(field)) {
    return { suggestions: fetchedSuggestions }
  }
  const { enumerations, suggestions } = field || {}
  if (enumerations) {
    return { enumerations } as FilterProps
  }
  if (suggestions) {
    return { suggestions }
  }
  return {}
}

/**
 * Should create a filter map that looks something like this:
 * {
 *  users.state: "California,Georgia,New%20York"
 * }
 */
const getLinkedFilterMap = (
  filterMap: FilterMap,
  listensToFilters?: string[] | null
) => {
  if (!listensToFilters || listensToFilters.length === 0) return undefined

  // filterMap is undefined, which is probably why we're not getting the results we need from this reduce call
  return listensToFilters.reduce((acc: { [key: string]: string }, title) => {
    if (filterMap[title]) {
      const { filter, expression } = filterMap[title]
      if (filter.dimension && expression) {
        acc[filter.dimension] = encodeURIComponent(expression)
      }
    }
    return acc
  }, {})
}

/**
 * Accepts a dashboard filter and an SDK 4.0 instance,
 * determines if and what type of options the filter's field supports,
 * calls the API to fetch suggestions if applicable,
 * and returns the necessary props
 */
export const useSuggestable = ({
  filter,
  sdk: propsSdk,
}: UseSuggestableProps) => {
  const { state, sdk = propsSdk } = useContext(FilterContext)
  const filterMap = state.filterMap

  const field = filter.field as ILookmlModelExploreField | undefined

  const [searchTerm, setSearchTerm] = useState('')
  const [errorMessage, setErrorMessage] = useState('')
  const [isLoading, setLoading] = useState(false)
  const [fetchedSuggestions, setSuggestions] = useState<string[]>([])

  const { t } = useTranslation('use_suggestable')
  // needed to apply translation to here to prevent infinte loop
  // caused by listening for t in useEffect, more info in issues below
  // https://github.com/i18next/react-i18next/issues/1228
  // https://github.com/i18next/react-i18next/issues/1391
  const translatedErrorMessage = t('Error loading suggestions')
  const { listens_to_filters } = filter

  // Make this a string for deep comparison in the deps array below
  const linkedFilterMap = useMemo(
    () => getLinkedFilterMap(filterMap, listens_to_filters),
    [filterMap, listens_to_filters]
  )

  // linkedFilterMap is empty for linked filters, and undefined for non-linked filters
  useEffectDeepEquals(() => {
    const loadSuggestions = async () => {
      // Only need to fetch suggestions if they're not included on the field
      if (sdk && shouldFetchSuggestions(field)) {
        setLoading(true)
        const params = {
          field_name: field?.suggest_dimension || '',
          model_name: filter.model || '',
          term: searchTerm,
          view_name: field?.suggest_explore || field?.view || '',
          filters: linkedFilterMap,
        }

        try {
          const result = await sdk.ok(model_fieldname_suggestions(sdk, params))

          setLoading(false)
          setSuggestions(result.suggestions || [])
        } catch (error) {
          setLoading(false)
          setErrorMessage(translatedErrorMessage)
        }
      }
    }
    loadSuggestions()
  }, [
    filter.model,
    field,
    searchTerm,
    sdk,
    linkedFilterMap || {},
    translatedErrorMessage,
  ])

  return {
    errorMessage,
    suggestableProps: {
      isLoading,
      onInputChange: setSearchTerm,
      ...getOptionsProps(field, fetchedSuggestions),
    },
  }
}
