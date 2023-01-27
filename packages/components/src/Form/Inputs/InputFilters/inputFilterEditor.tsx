/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import React from 'react'
import { CheckboxGroup, RadioGroup } from '../'
import type { InputFilterEditorRenderProp } from './types'

export const inputFilterEditor: InputFilterEditorRenderProp = ({
  closeEditor,
  filterOptions,
  onChange,
  value,
}) => {
  const { multiple = false } = filterOptions

  const options = filterOptions.options
    ? filterOptions.options.map(value => ({ label: value, value }))
    : []

  const handleChangeCheckbox = (newValues: string[]) =>
    onChange(newValues.sort().join(','))

  const handleChangeRadio = (newValue: string) => {
    onChange(newValue)
    closeEditor()
  }

  return multiple ? (
    <CheckboxGroup
      value={value ? value.split(',') : []}
      options={options}
      onChange={handleChangeCheckbox}
    />
  ) : (
    <RadioGroup value={value} options={options} onChange={handleChangeRadio} />
  )
}
