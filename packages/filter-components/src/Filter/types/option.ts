/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
export interface Option {
  value: string
  label: string
  [key: string]: any
}

export interface OptionsGroup {
  first?: boolean
  last?: boolean
  hasBorder?: boolean
  label?: string
  options: Option[]
}
