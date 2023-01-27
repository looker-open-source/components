/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import type { RefObject } from 'react'

export type ElementOrRef<E extends HTMLElement = HTMLElement> =
  | E
  | null
  | undefined
  | RefObject<E>

export function getCurrentNode<E extends HTMLElement = HTMLElement>(
  elementOrRefObject: ElementOrRef<E>
): E | null {
  if (!elementOrRefObject) return null
  return (elementOrRefObject as E).addEventListener
    ? (elementOrRefObject as E)
    : (elementOrRefObject as RefObject<E>).current
}
