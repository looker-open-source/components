/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import { ButtonToggle, ProgressCircular } from '@looker/components'
import React from 'react'
import type { StringSingleSelectProps } from '../../../../types/string_select_props'

export const ButtonToggles = ({
  isLoading,
  onChange,
  options,
  value,
}: StringSingleSelectProps) =>
  isLoading ? (
    <ProgressCircular size="medium" />
  ) : (
    <ButtonToggle onChange={onChange} options={options} value={value} />
  )
