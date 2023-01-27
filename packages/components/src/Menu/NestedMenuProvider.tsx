/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import React, { createContext, useCallback, useContext } from 'react'
import type { ReactNode } from 'react'
import type { UseDelayedStateReturn } from '../utils'
import { useDelayedState } from '../utils'

export type CloseParentMenuProps = {
  closeParentMenu?: () => void
}

export type NestedMenuContextProps = UseDelayedStateReturn<string> &
  CloseParentMenuProps

const nestedMenuContext: NestedMenuContextProps = {
  change: () => undefined,
  delayChange: () => undefined,
  value: '',
  waitChange: () => undefined,
}

export const NestedMenuContext = createContext(nestedMenuContext)

// Stores the id for the current nestedMenu to prevent them
// from competing with each other (e.g. from hover vs arrow key)
export const NestedMenuProvider = ({
  children,
  closeParentMenu,
}: CloseParentMenuProps & { children?: ReactNode }) => {
  const delayedStateProps = useDelayedState<string>('')
  const { closeParentMenu: closeGrandparentMenu } =
    useContext(NestedMenuContext)

  const wrappedCloseParentMenu = useCallback(() => {
    // Close the grandparent menu, if there is one
    closeGrandparentMenu?.()
    closeParentMenu?.()
  }, [closeGrandparentMenu, closeParentMenu])

  return (
    <NestedMenuContext.Provider
      value={{ ...delayedStateProps, closeParentMenu: wrappedCloseParentMenu }}
    >
      {children}
    </NestedMenuContext.Provider>
  )
}
