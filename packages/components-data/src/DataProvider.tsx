/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import React from 'react'
import type { ReactNode } from 'react'
import type { Looker40SDK } from '@looker/sdk'
import { DataState } from './hooks'
import { SDKContext } from './SDKContext'

type DataProviderProps = {
  sdk: Looker40SDK
  children?: ReactNode
}

export const DataProvider = ({ children, sdk }: DataProviderProps) => {
  return (
    <SDKContext.Provider value={sdk}>
      <DataState.Provider>{children}</DataState.Provider>
    </SDKContext.Provider>
  )
}
