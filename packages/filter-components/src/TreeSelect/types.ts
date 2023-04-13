/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import type { ReactNode } from 'react'

export interface TreeModel {
  label?: ReactNode
  hide?: boolean
  detail?: string
  isSecondary?: boolean
  value: string
  id?: string
  isOpen?: boolean
  isNotHighlightable?: boolean
  children?: TreeModel[]
  payload?: any
  disabled?: string
}
