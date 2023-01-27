/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import React, { createContext } from 'react'
import { TrapStackProvider } from '../TrapStack'
import type {
  TrapStackContextProps,
  TrapStackProviderProps,
} from '../TrapStack'
import { activateFocusTrap } from './utils'
import type { FocusTrapOptions } from './types'

export const FocusTrapContext = createContext<
  TrapStackContextProps<FocusTrapOptions>
>({})
FocusTrapContext.displayName = 'FocusTrapContext'

export const FocusTrapProvider = <O = unknown,>(
  props: Omit<TrapStackProviderProps<O>, 'activate' | 'context'>
) => (
  <TrapStackProvider
    activate={activateFocusTrap}
    context={FocusTrapContext}
    {...props}
  />
)
