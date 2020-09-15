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

import React, { ChangeEvent, useState } from 'react'
import { graphql, Link, useStaticQuery } from 'gatsby'
import { useFlexSearch } from 'react-use-flexsearch'
import { List, InputSearch } from '@looker/components'
import styled from 'styled-components'

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

const SearchField = ({ index, store }: FauxSearchProps) => {
  const [query, setQuery] = useState('')
  const results = useFlexSearch(query, index, store)

  const search = (event: ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.currentTarget.value
    setQuery(inputValue)
  }

  const resultList = (
    <List>
      {results.map((page) => (
        <li key={page.id}>
          <Link to={'/' + page.slug}>{page.title}</Link>
        </li>
      ))}
    </List>
  )

  return (
    <RelativeDiv>
      <InputSearch type="text" value={query} onChange={search} />
      {results.length ? <BadOverlay>{resultList}</BadOverlay> : null}
    </RelativeDiv>
  )
}

/**
 * @TODO - Good-god delete these please!
 */
const RelativeDiv = styled.div`
  align-items: center;
  display: flex;
  position: relative;
`

const BadOverlay = styled.div`
  background: ${({ theme }) => theme.colors.background};
  position: absolute;
  top: 2.5rem;
`
