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
import type { FC, FormEvent, KeyboardEvent } from 'react'
import React, { useContext, useEffect, useState } from 'react'
import { hot } from 'react-hot-loader/root'
import {
  Button,
  Divider,
  FieldText,
  Header,
  Page,
  Paragraph,
  Space,
} from '@looker/components'
import { ExtensionContext } from '@looker/extension-sdk-react'
import { create_query, query_for_slug } from '@looker/sdk'
import type { ILookmlModelExploreField, IQuery, IWriteQuery } from '@looker/sdk'
import { Query, Visualization } from '@looker/visualizations'
import { Filtering } from './Filtering'

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

const VisFilterDemoInternal: FC = () => {
  const { core40SDK } = useContext(ExtensionContext)

  const [queryId, setQueryId] = useState('')
  const [draftQueryId, setDraftQueryId] = useState('')
  const handleChange = (e: FormEvent<HTMLInputElement>) => {
    setDraftQueryId(e.currentTarget.value)
  }

  const [queryDetails, setQueryDetails] = useState<IQuery>()
  const [filterField, setFilterField] = useState<ILookmlModelExploreField>()

  const submitQueryId = () => {
    setQueryId(draftQueryId)
    setFilterField(undefined)
  }
  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      submitQueryId()
    }
  }

  const submitFilter = (name: string, expression: string) => {
    if (!queryDetails) return
    // Create a new query from the previous one with updated filters
    const newQuery = createQueryRequest(queryDetails, { [name]: expression })
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
    <Page height="100%" p="large">
      <Header as="h4">Enter a query ID</Header>
      <Space alignItems="flex-end">
        <FieldText
          value={draftQueryId}
          onChange={handleChange}
          autoFocus
          onKeyDown={handleKeyDown}
        />
        <Button onClick={submitQueryId}>Run</Button>
      </Space>
      {queryDetails && (
        <Filtering
          model={queryDetails.model}
          explore={queryDetails.view}
          onSubmit={submitFilter}
          filterField={filterField}
          setFilterField={setFilterField}
        />
      )}
      {queryId && queryId !== draftQueryId && (
        <Paragraph mt="medium" fontSize="small" textAlign="right">
          <strong>Filtered Query ID:</strong> {queryId}
        </Paragraph>
      )}
      {queryId && <Divider my="medium" />}
      <Query query={queryId} sdk={core40SDK}>
        <Visualization />
      </Query>
    </Page>
  )
}

export const VisFilterDemo = hot(VisFilterDemoInternal)
