/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import type { FormEvent } from 'react'
import React, { useState } from 'react'
import { InputFilters } from '..'
import type { InputFiltersProps, FieldFilter } from '../'
import { InputText } from '../../'
import type { InputFilterEditorRenderProp } from '../types'

const EditorComponent: InputFilterEditorRenderProp = ({
  closeEditor,
  onChange,
  value = '',
}) => {
  const handleChange = (event: FormEvent<HTMLInputElement>) => {
    onChange(event.currentTarget.value)
  }
  return (
    <InputText
      data-autofocus="true"
      value={value}
      onChange={handleChange}
      onBlur={closeEditor}
    />
  )
}

const customFilters: FieldFilter[] = [
  {
    editor: EditorComponent,
    field: 'important',
    label: 'Important',
  },
]

export default function CustomFilter({
  filters: filtersProp = customFilters,
  ...args
}: InputFiltersProps) {
  const [controlledFilters, setControlledFilters] = useState(filtersProp)

  return (
    <InputFilters
      {...args}
      filters={controlledFilters}
      onChange={setControlledFilters}
    />
  )
}
