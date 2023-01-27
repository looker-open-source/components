/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import type { ValidationMessageProps } from '@looker/components'
import type { Option } from '../types/option'

interface StringSelectProps<V extends string | string[]> {
  inline?: boolean
  value: V
  options: Option[]
  onChange: (value: V) => void
  onInputChange?: (value: string) => void
  validationMessage?: ValidationMessageProps
  isLoading?: boolean
  max?: number
}

export type StringMultiSelectProps = StringSelectProps<string[]>

export interface StringSingleSelectProps extends StringSelectProps<string> {
  anyOption?: boolean
}
