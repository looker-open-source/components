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

/* eslint-disable camelcase */
import type { FC, FormEvent } from 'react'
import React, { useContext, useEffect, useState } from 'react'
import { hot } from 'react-hot-loader/root'
import {
  Button,
  FieldText,
  Page,
  Paragraph,
  Space,
  SpaceVertical,
} from '@looker/components'
import { ExtensionContext } from '@looker/extension-sdk-react'
import { i18nInit, Filter } from '@looker/filter-components'
import type { FilterChangeProps } from '@looker/filter-components'
import { create_query, query_for_slug } from '@looker/sdk'
import type { IQuery, IWriteQuery } from '@looker/sdk'
import { Query, Visualization } from '@looker/visualizations'

i18nInit()

const createQueryRequest = (
  { client_id, filters, ...query }: IQuery,
  newFilters: { [key: string]: string }
) => {
  const result: Partial<IWriteQuery> = {
    ...query,
    filters: { ...filters, ...newFilters },
  }
  return result
}

// Hardcoding the filter field here for demo purposes
const filterField = 'orders.created_date'

const VisFilterDemoInternal: FC = () => {
  const { core40SDK } = useContext(ExtensionContext)

  const [queryId, setQueryId] = useState('')
  const [draftQueryId, setDraftQueryId] = useState('')
  const handleChange = (e: FormEvent<HTMLInputElement>) => {
    setDraftQueryId(e.currentTarget.value)
  }

  const [queryDetails, setQueryDetails] = useState<IQuery>()

  const [filterExpression, setFilterExpression] = useState('7 day')
  const handleFilterChange = ({ expression }: FilterChangeProps) => {
    setFilterExpression(expression)
  }

  const submitQueryId = () => {
    setQueryId(draftQueryId)
  }

  const submitFilter = () => {
    if (!queryDetails) return
    // Create a new query from the previous one with updated filters
    const newQuery = createQueryRequest(queryDetails, {
      [filterField]: filterExpression,
    })
    const getQueryDetails = async () => {
      const result = await core40SDK.ok(create_query(core40SDK, newQuery))
      setQueryDetails(result)
      result.client_id && setQueryId(result.client_id)
    }
    getQueryDetails()
  }

  useEffect(() => {
    // Get details about the query based on query ID
    // to be used in create_query along with filters
    if (
      queryId !== '' &&
      (!queryDetails || queryId !== queryDetails.client_id)
    ) {
      const getQueryDetails = async () => {
        const result = await core40SDK.ok(query_for_slug(core40SDK, queryId))
        setQueryDetails(result)
      }
      getQueryDetails()
    }
  }, [queryId, core40SDK, queryDetails])

  return (
    <Page>
      <SpaceVertical width="50%" minWidth={400}>
        <Space>
          <FieldText
            label="Enter Query ID"
            value={draftQueryId}
            onChange={handleChange}
          />
          <Button onClick={submitQueryId}>Send</Button>
        </Space>
        {queryDetails && (
          <>
            <Space>
              <Filter
                name={filterField}
                expressionType="date"
                config={{ type: 'relative_timeframes' }}
                expression={filterExpression}
                onChange={handleFilterChange}
              />
              <Button onClick={submitFilter}>Filter</Button>
            </Space>
            <Paragraph>Query ID: {queryId}</Paragraph>
          </>
        )}
      </SpaceVertical>
      <Space height={800}>
        <Query query={queryId} sdk={core40SDK}>
          <Visualization />
        </Query>
      </Space>
    </Page>
  )
}

export const VisFilterDemo = hot(VisFilterDemoInternal)
