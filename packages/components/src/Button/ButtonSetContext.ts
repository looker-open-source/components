/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import type { MouseEvent } from 'react'
import { createContext } from 'react'

export type ButtonSetCallback<TValue extends string | string[] = string[]> = (
  option: TValue,
  event?: MouseEvent<HTMLButtonElement>
) => void

export interface ButtonSetContextProps<
  TValue extends string | string[] = string[]
> {
  disabled?: boolean
  value?: TValue
  onItemClick?: (event: MouseEvent<HTMLButtonElement>) => void
}

const buttonSetContext: ButtonSetContextProps = {}

export const ButtonSetContext = createContext(buttonSetContext)
