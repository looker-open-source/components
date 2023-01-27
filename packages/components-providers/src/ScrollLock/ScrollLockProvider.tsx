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
import { activateScrollLock } from './utils'

export const ScrollLockContext = createContext<TrapStackContextProps>({})
ScrollLockContext.displayName = 'ScrollLockContext'

export const ScrollLockProvider = <O = unknown,>(
  props: Omit<TrapStackProviderProps<O>, 'activate' | 'context'>
) => (
  <TrapStackProvider
    activate={activateScrollLock}
    context={ScrollLockContext}
    {...props}
  />
)
