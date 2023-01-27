/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import React, { useState, useMemo } from 'react'
import { FieldSelect } from '../../FieldSelect'
import { options } from '../../../Inputs/Select/stories/options'

export default function CreateOption() {
  const [filterTerm, setFilterTerm] = useState('')
  const newOptions = useMemo(() => {
    return options.filter(
      option =>
        option.label.toLowerCase().indexOf(filterTerm.toLowerCase()) > -1
    )
  }, [filterTerm])
  const formatCreateLabel = (inputValue: string) => {
    return `Create a fruit: ${inputValue}`
  }

  return (
    <FieldSelect
      label="showCreate &amp; formatCreateLabel"
      options={newOptions}
      isFilterable
      onFilter={setFilterTerm}
      showCreate
      formatCreateLabel={formatCreateLabel}
      width={300}
    />
  )
}
