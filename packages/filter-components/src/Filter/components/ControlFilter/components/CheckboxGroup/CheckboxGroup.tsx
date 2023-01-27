/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import {
  CheckboxGroup as CheckboxGroupComponent,
  ProgressCircular,
} from '@looker/components'
import React from 'react'
import type { StringMultiSelectProps } from '../../../../types/string_select_props'

export const CheckboxGroup = ({
  validationMessage,
  inline,
  isLoading,
  onChange,
  options,
  value,
}: StringMultiSelectProps) =>
  isLoading ? (
    <ProgressCircular size="medium" />
  ) : (
    <CheckboxGroupComponent
      inline={inline}
      onChange={onChange}
      options={options}
      value={value}
      validationType={validationMessage?.type}
    />
  )
