/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import React from 'react'
import type { IAPIMethods } from '@looker/sdk-rtl'
import { FilterCollection } from '../FilterCollection'
import { DashboardFilter } from '../../DashboardFilter'

export default function Suggestions() {
  // From dashboard API
  const dashboardFilters = [
    {
      dimension: 'users.state',
      field: {
        suggestable: true,
        suggest_dimension: 'users.state',
        suggest_explore: 'users',
      },
      model: 'testmodel',
      name: 'State',
      title: 'State',
      type: 'field_filter',
      ui_config: { type: 'radio_buttons' },
    },
    {
      dimension: 'users.city',
      field: {
        suggestable: true,
        suggest_dimension: 'users.city',
        suggest_explore: 'users',
      },
      model: 'testmodel',
      name: 'City',
      title: 'City',
      type: 'field_filter',
      ui_config: { type: 'radio_buttons' },
      listens_to_filters: ['State'],
    },
  ]

  const states = ['Alaska', 'Hawaii']
  const citiesAlaska = ['Anchorage', 'Juneau']
  const citiesHawaii = ['Honolulu', 'Kona']
  // Mock SDK instance for fetching suggested values
  const sdkMock = {
    ok: (value: any) => value,
    get: (uri: string, params: { [key: string]: any }) => {
      let suggestions: string[] = []
      if (uri.includes('users.state')) {
        suggestions = states
      } else {
        if (params.filters?.['users.state'] === 'Alaska') {
          suggestions = citiesAlaska
        } else if (params.filters?.['users.state'] === 'Hawaii') {
          suggestions = citiesHawaii
        } else {
          suggestions = [...citiesAlaska, ...citiesHawaii]
        }
      }
      return {
        suggestions,
      }
    },
  } as unknown as IAPIMethods

  return (
    <FilterCollection sdk={sdkMock}>
      {dashboardFilters.map(filter => (
        <DashboardFilter
          filter={filter}
          key={filter.name}
          onChange={() => {
            // update filter state for your application
          }}
        />
      ))}
    </FilterCollection>
  )
}
