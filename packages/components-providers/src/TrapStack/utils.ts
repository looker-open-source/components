/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import type { TrapMap } from './types'

export const getActiveTrap = <O = unknown>(trapMap: TrapMap<O>) => {
  // Sort the traps according to their element's dom position and return the last
  // which we assume to be stacked on top since all components using Portal
  // share a single zIndexFloor and use dom order to determine stacking
  const traps = Object.values(trapMap)
  if (traps.length === 0) return

  const sortedTraps = traps.sort((trapA, trapB) => {
    const relationship = trapA.element.compareDocumentPosition(trapB.element)
    return relationship > 3 ? 1 : -1
  })
  return sortedTraps[0]
}
