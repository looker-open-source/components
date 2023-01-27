/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import React from 'react'
import type { ReactNode } from 'react'
import { SWRConfig } from 'swr'
import { ComponentsProvider } from '@looker/components'
import type { Looker40SDK } from '@looker/sdk'
import { SDKContext } from '../SDKContext'
import type { DataStore } from '../hooks'
import { DataState } from '../hooks'
import { mockSDKWithListeners } from '.'

type ContextWrapperProps = {
  initialState?: DataStore
  children?: ReactNode
}

export const ContextWrapper = ({
  children,
  initialState,
}: ContextWrapperProps) => {
  return (
    <ComponentsProvider>
      <SWRConfig value={{ provider: () => new Map() }}>
        <SDKContext.Provider value={mockSDKWithListeners as Looker40SDK}>
          <DataState.Provider initialState={initialState}>
            {children}
          </DataState.Provider>
        </SDKContext.Provider>
      </SWRConfig>
    </ComponentsProvider>
  )
}
