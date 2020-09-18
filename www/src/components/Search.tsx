/*

 MIT License

 Copyright (c) 2020 Looker Data Sciences, Inc.

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

import { trackCustomEvent } from 'gatsby-plugin-google-analytics'
import startCase from 'lodash/startCase'
import React, { useEffect, useState } from 'react'
import { graphql, navigate, useStaticQuery } from 'gatsby'
import { useFlexSearch } from 'react-use-flexsearch'
import { IconNames, InputSearch, SelectOptionObject } from '@looker/components'

export const Search = () => {
  const data = useStaticQuery(
    graphql`
      query SearchIndexQuery {
        localSearchPages {
          index
          store
        }
      }
    `
  )

  return (
    <SearchField
      index={data.localSearchPages.index}
      store={data.localSearchPages.store}
    />
  )
}

interface FauxSearchProps {
  index: any
  store: any
}

const iconMap: { [key: string]: IconNames } = {
  Components: 'Code',
  Develop: 'CircleInfoOutline',
  Foundations: 'Validate',
  Utilities: 'Code',
}

interface Result {
  id: string
  slug: string
  title: string
}

const SearchField = ({ index, store }: FauxSearchProps) => {
  const [query, setQuery] = useState('')
  const results: Result[] = useFlexSearch(query, index, store)

  useEffect(() => {
    const t = window.setTimeout(() => {
      if (query) {
        const noResults = results.length === 0 ? '-no-results' : ''
        trackCustomEvent({
          action: `input${noResults}`,
          category: 'Search',
          label: query,
        })
      }
    }, 500)
    return () => {
      window.clearTimeout(t)
    }
  }, [query, results])

  const selectOption = (option?: SelectOptionObject) => {
    const gotoPage = () => option && navigate(option.value)

    if (window.ga) {
      trackCustomEvent({
        action: 'select',
        category: 'Search',
        // Need to wait for the event tracking to complete or timeout before navigating away
        hitCallback: gotoPage,
        label: option.label,
      })
    } else {
      gotoPage()
    }
  }

  const options = results.map(({ slug, title }) => {
    const pageType = startCase(slug.split('/')[0])
    return {
      detail: pageType,
      icon: iconMap[pageType] || 'FileBlank',
      label: title,
      value: `/${slug}`,
    }
  })

  return (
    <InputSearch
      alignSelf="center"
      placeholder="Search @looker/components"
      value={query}
      onChange={setQuery}
      options={options}
      changeOnSelect={false}
      onSelectOption={selectOption}
      indicator={false}
    />
  )
}
