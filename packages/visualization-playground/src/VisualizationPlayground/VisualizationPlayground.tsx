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
import React, { useContext, useState, useEffect, useCallback } from 'react'
import type { CAll, QueryProps } from '@looker/visualizations'
import {
  Query,
  Visualization,
  isNumeric,
  mockSDK,
} from '@looker/visualizations'
import { DataProvider } from '@looker/components-data'
import {
  Box2,
  Tab2,
  Tabs2,
  Aside,
  Section,
  ExtendComponentsThemeProvider,
  Page,
  theme,
} from '@looker/components'
import styled, { ThemeContext } from 'styled-components'
import type { Looker40SDK } from '@looker/sdk'
import { i18nInit } from '@looker/filter-components'
import { useLocalStorage } from '../utils'
import { EmbedEditor } from '../EmbedEditor'
import { ConfigEditor } from '../ConfigEditor'
import type { OnQueryInputArgs, InputTypes } from '../QueryInput'
import { QueryInput } from '../QueryInput'
import { Filtering } from '../Filtering'
import { CodeEditor } from '../CodeEditor'
import { CodeToggle } from '../CodeToggle'

i18nInit()

type TabIDs = 'live' | 'mock'

export type VisualizationPlaygroundProps = {
  sdk?: Looker40SDK
}

type QueryPropArgs = {
  /* Fetch either query or dashboard response */
  fetchBy?: InputTypes
  /* string slug or numeric id */
  queryIdentifier?: string | number
  /* numeric dashboard id */
  dashboardId?: number
  /* Live or Mock sdk views */
  tabId?: TabIDs
}

/*
 * A small utility function to control whether we will fetch
 * live or mock data, and whether we will render a query or
 * dashboard response
 */
export const setQueryProps = ({
  fetchBy,
  queryIdentifier,
  dashboardId,
  tabId,
}: QueryPropArgs): Partial<QueryProps> => {
  if (tabId === 'live') {
    return fetchBy === 'dashboard'
      ? { dashboard: dashboardId }
      : { query: queryIdentifier }
  } else {
    return { query: 'mock-query-slug' }
  }
}

export const VisualizationPlayground = ({
  sdk,
}: VisualizationPlaygroundProps) => {
  const [storedTabId, setStoredTabId] = useLocalStorage<TabIDs>(
    'sdkTabId',
    sdk ? 'live' : 'mock'
  )
  const [queryIdentifier, setQueryIdentifier] = useState<
    string | number | undefined
  >('')
  const [dashboardId, setDashboardId] = useState<number>()
  const [fetchBy, setFetchBy] = useState<InputTypes>()
  const [configOverrides, setConfigOverrides] = useState<Partial<CAll>>({})
  const [width, setWidth] = useState<string | undefined>()
  const [height, setHeight] = useState<string | undefined>()
  const [codeToggled, setCodeToggled] = useState<boolean>(false)

  const handleQueryInputChange = useCallback(
    ({ type, value }: OnQueryInputArgs) => {
      setFetchBy(type)
      if (type === 'query') {
        setQueryIdentifier(value)
      } else if (type === 'dashboard') {
        setDashboardId(isNumeric(value) ? Number(value) : undefined)
      }
    },
    []
  )

  useEffect(() => {
    // clear config overrides when changing query inputs
    setConfigOverrides({})
  }, [storedTabId, fetchBy, dashboardId, queryIdentifier])

  const { colors } = useContext(ThemeContext)

  const queryProps: Partial<QueryProps> = setQueryProps({
    fetchBy,
    queryIdentifier,
    dashboardId,
    tabId: storedTabId,
  })

  return (
    <DataProvider
      sdk={
        storedTabId === 'live' && sdk
          ? sdk
          : ((mockSDK as unknown) as Looker40SDK)
      }
    >
      <ExtendComponentsThemeProvider
        themeCustomizations={{
          colors: {
            background: colors.ui5,
            key: '#609FF2', // from figma mock
            pageBackground: colors.ui5,
            text: colors.background,
          },
        }}
      >
        <PageLayout fixed hasAside p="medium" borderRadius="large">
          <Aside backgroundColor="background" width="25rem">
            <EmbedEditor
              width={width}
              setWidth={setWidth}
              height={height}
              setHeight={setHeight}
              config={configOverrides}
              onConfigChange={setConfigOverrides}
              {...queryProps}
            />
            <ConfigEditor
              config={configOverrides}
              onConfigChange={setConfigOverrides}
              {...queryProps}
            />
          </Aside>
          <ExtendComponentsThemeProvider
            themeCustomizations={{
              colors: {
                background: colors.background,
                text: colors.text,
              },
            }}
          >
            <Section
              main
              px="large"
              py="medium"
              bg={`${theme.colors.background}`}
              borderRadius="medium"
            >
              <CodeToggle
                codeToggled={codeToggled}
                setCodeToggled={setCodeToggled}
                config={configOverrides}
                {...queryProps}
              />

              {codeToggled ? (
                <CodeEditor config={configOverrides} {...queryProps} />
              ) : (
                <Tabs2<TabIDs>
                  tabId={storedTabId as TabIDs}
                  onTabChange={setStoredTabId}
                >
                  <Tab2
                    id="live"
                    label="Live SDK"
                    disabled={typeof sdk === 'undefined'}
                  >
                    <Box2 my="small">
                      <QueryInput
                        onChange={handleQueryInputChange}
                        dashboardId={dashboardId}
                        queryId={queryIdentifier}
                        fetchBy={fetchBy}
                        setFetchBy={setFetchBy}
                        {...queryProps}
                      />
                    </Box2>
                    <Filtering
                      setQueryIdentifier={setQueryIdentifier}
                      setFetchBy={setFetchBy}
                      {...queryProps}
                    />
                    <Query config={configOverrides} {...queryProps}>
                      <Visualization
                        width={isNumeric(width) ? Number(width) : undefined}
                        height={isNumeric(height) ? Number(height) : undefined}
                      />
                    </Query>
                  </Tab2>
                  <Tab2 id="mock" label="Mock Data">
                    <Query query="mock-query-id" config={configOverrides}>
                      <Visualization
                        width={isNumeric(width) ? Number(width) : undefined}
                        height={isNumeric(height) ? Number(height) : undefined}
                      />
                    </Query>
                  </Tab2>
                </Tabs2>
              )}
            </Section>
          </ExtendComponentsThemeProvider>
        </PageLayout>
      </ExtendComponentsThemeProvider>
    </DataProvider>
  )
}

const PageLayout = styled(Page)`
  gap: ${theme.space.medium};
`
