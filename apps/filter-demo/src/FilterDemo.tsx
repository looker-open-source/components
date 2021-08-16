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

import type { FC } from 'react'
import React, { useContext, useEffect, useState } from 'react'
import { hot } from 'react-hot-loader/root'
import {
  MessageBar,
  Header,
  Heading,
  Page,
  Space,
  SpaceVertical,
  Spinner,
} from '@looker/components'
import type { DashboardEvent, LookerEmbedDashboard } from '@looker/embed-sdk'
import { ExtensionContext } from '@looker/extension-sdk-react'
import { i18nInit } from '@looker/filter-components'
import type { IDashboard } from '@looker/sdk'
import { useLocation, useHistory } from 'react-router-dom'
import { DashboardList } from './DashboardList'
import { DashboardEmbed } from './DashboardEmbed'
import { FilterList } from './FilterList'

const i18nPromise = i18nInit()

const FilterDemoInternal: FC = () => {
  const [loadingDashboards, setLoadingDashboards] = useState(false)
  const [dashboards, setDashboards] = useState<IDashboard[]>([])
  const [selectedDashboardId, setSelectedDashboardId] = useState<string>()
  const [currentDashboard, setCurrentDashboard] = useState<IDashboard>()
  const [errorMessage, setErrorMessage] = useState('')
  // Used to update and get current filter values
  const [embedDashboard, setEmbedDashboard] = useState<LookerEmbedDashboard>()

  const { core40SDK } = useContext(ExtensionContext)

  useEffect(() => {
    setLoadingDashboards(true)
    setErrorMessage('')
    const loadDashboards = async () => {
      try {
        const result = await core40SDK.ok(core40SDK.all_dashboards())
        // Take up to the first 10 dashboards
        setDashboards(
          result
            .slice(0, 99)
            .sort(({ title: aTitle = '' }, { title: bTitle = '' }) =>
              aTitle.localeCompare(bTitle)
            )
        )
        setLoadingDashboards(false)
      } catch (error) {
        setDashboards([])
        setLoadingDashboards(false)
        setErrorMessage('Error loading dashboards')
      }
    }
    loadDashboards()
  }, [core40SDK])

  const { pathname } = useLocation()
  const history = useHistory()
  useEffect(() => {
    if (dashboards && dashboards.length > 0) {
      // Get the dashboard ID from the location
      const path: string[] = pathname.split('/')
      let id: string | undefined
      if (path.length > 1 && path[1] !== '') {
        id = path[1]
      }
      if (!id) {
        history.replace('/' + dashboards[0].id)
      } else {
        if (id !== selectedDashboardId) {
          setSelectedDashboardId(id)
        }
      }
    }
  }, [dashboards, history, pathname, selectedDashboardId])

  useEffect(() => {
    const dashboard = (dashboards || []).find(
      (d) => d.id === selectedDashboardId
    )
    const loadDashboard = async (id: string) => {
      const result = await core40SDK.ok(core40SDK.dashboard(id))
      setCurrentDashboard(result)
    }
    // If no matching Dashboard then return
    if (selectedDashboardId && dashboard === undefined) {
      setSelectedDashboardId(undefined)
      setCurrentDashboard(undefined)
      setErrorMessage('Unable to load dashboard.')
    } else {
      setCurrentDashboard(dashboard)
      setErrorMessage('')
      if (selectedDashboardId) {
        loadDashboard(selectedDashboardId)
      }
    }
  }, [core40SDK, dashboards, selectedDashboardId])

  const onDashboardSelected = (id: string) => {
    if (!currentDashboard || currentDashboard.id !== id) {
      // Update the id in the URL. This will trigger the useEffects
      // which will load the dashboard
      history.push('/' + id)
    }
  }

  // Track the state of the embed dashboard run button and filter values
  const [needsUpdate, setNeedsUpdate] = useState(false)
  const [filterValues, setFilterValues] = useState<{ [key: string]: string }>(
    {}
  )

  // Handles events from embed dashboard
  const updateFilters = (event: DashboardEvent) => {
    setNeedsUpdate(event.type === 'dashboard:filters:changed')
    setFilterValues(event.dashboard.dashboard_filters)
  }

  const [ready, setReady] = useState(false)
  useEffect(() => {
    i18nPromise.then(() => {
      setReady(true)
    })
  }, [])

  if (!ready) return <Spinner />

  const horizontal = window.innerWidth > 768
  const HeaderSpace = horizontal ? Space : SpaceVertical

  return (
    <Page height="100%">
      {errorMessage && (
        <MessageBar intent="critical">{errorMessage}</MessageBar>
      )}
      <Header
        py="large"
        px={['medium', 'medium', 'large', 'large', 'xxxlarge', 'xxxlarge']}
      >
        <HeaderSpace between>
          <Space>
            <Heading>@looker/filter-components Demo</Heading>
          </Space>
          <Space justify={horizontal ? 'end' : undefined} align="end">
            <DashboardList
              dashboards={dashboards}
              loading={loadingDashboards}
              selectDashboard={onDashboardSelected}
              current={currentDashboard?.id}
            />
            <FilterList
              filters={currentDashboard?.dashboard_filters}
              embedDashboard={embedDashboard}
              needsUpdate={needsUpdate}
              filterValues={filterValues}
            />
          </Space>
        </HeaderSpace>
      </Header>
      {currentDashboard?.id && (
        <DashboardEmbed
          dashboardId={currentDashboard.id}
          setEmbedDashboard={setEmbedDashboard}
          updateFilters={updateFilters}
        />
      )}
    </Page>
  )
}

export const FilterDemo = hot(FilterDemoInternal)
