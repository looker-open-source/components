/*

 MIT License

 Copyright (c) 2020 Looker Data Sciences, Inc.

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

import noop from 'lodash/noop'
import React, { Context, FC, useRef, useMemo } from 'react'
import { Trap, TrapStackContextProps, TrapMap } from './types'
import { getActiveTrap } from './utils'

export interface TrapStackProviderProps {
  activate: (trap: Trap) => () => void
  context: Context<TrapStackContextProps>
}

/**
 * Manages "trap" behavior (e.g. scroll lock & focus trap)
 * in a stack of elements (e.g. layered Dialogs & Popovers)
 */
export const TrapStackProvider: FC<TrapStackProviderProps> = ({
  activate,
  context,
  children,
}) => {
  // Stores all available trap elements
  // (map of ids to elements that have traps)
  const registeredTrapsRef = useRef<TrapMap>({})
  // Stores the current trap (element) where scrolling is allowed
  // null if no trap is active
  const activeTrapRef = useRef<HTMLElement | null>(null)
  // Stores the callback to remove the trap behavior
  const deactivateRef = useRef<() => void>(noop)

  // Create the context value
  const value = useMemo(() => {
    const getTrap = (id?: string): Trap | null => {
      const registeredTraps = registeredTrapsRef.current
      return id ? registeredTraps[id] || null : getActiveTrap(registeredTraps)
    }

    const enableCurrentTrap = () => {
      const newTrap = getTrap()
      if (newTrap !== activeTrapRef.current) {
        // Disable the existing trap and update the activeTrapRef
        // (whether there's a new trap or not)
        activeTrapRef.current = newTrap?.element || null
        deactivateRef.current()
        // If there's a new trap, activate it and
        // save the deactivate function that is returned
        if (newTrap) {
          deactivateRef.current = activate(newTrap)
        }
      }
    }

    const disableCurrentTrap = () => {
      deactivateRef.current()
      deactivateRef.current = noop
      activeTrapRef.current = null
    }

    const addTrap = (id: string, trap: Trap) => {
      registeredTrapsRef.current[id] = trap
      enableCurrentTrap()
    }

    const removeTrap = (id: string) => {
      const existingTrap = getTrap(id)
      if (existingTrap) {
        const registeredTraps = registeredTrapsRef.current
        delete registeredTraps[id]
        enableCurrentTrap()
      }
    }

    return {
      activeTrapRef,
      addTrap,
      disableCurrentTrap,
      enableCurrentTrap,
      getTrap,
      removeTrap,
    }
  }, [activate])

  return <context.Provider value={value}>{children}</context.Provider>
}
