/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import type { ChangeEvent } from 'react'
import React from 'react'
import type { FilterParamProps } from '../../../../../../types/filter_param_props'
import { GroupInput } from '../../../GroupInput'

export const Year = ({ item: { id, year }, onChange }: FilterParamProps) => {
  const valueChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(id, { year: e.target.value })
  }

  return <GroupInput onChange={valueChange} value={year} placement="right" />
}
