/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import React from 'react'

type AppContextValues = {
  localStorageGetItem?: (key: string) => Promise<string | null>
  localStorageSetItem?: (key: string, value: string) => void
}

export const AppContext = React.createContext<AppContextValues>(
  {} as AppContextValues
)
