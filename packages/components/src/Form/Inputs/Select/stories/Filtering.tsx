/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import React, { useState, useMemo } from 'react'
import { Select } from '..'

export default function Filtering() {
  const [value, setValue] = useState<string>()
  const [searchTerm, setSearchTerm] = useState('')

  function handleChange(value: string) {
    setValue(value)
  }
  function handleFilter(term: string) {
    setSearchTerm(term)
  }

  const newOptions = useMemo(() => {
    const options = [
      { label: 'Apples', value: '1' },
      { label: 'Bananas', value: '2' },
      { label: 'Oranges', value: '3' },
      { label: 'Pineapples', value: '4' },
      { label: 'Kiwis', value: '5' },
    ]
    if (searchTerm === '') return options
    return options.filter(option => {
      return option.label.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1
    })
  }, [searchTerm])

  return (
    <Select
      maxWidth={400}
      options={newOptions}
      aria-label="Fruits"
      placeholder="Controlled, searchable, clearable"
      isClearable
      isFilterable
      value={value}
      onChange={handleChange}
      onFilter={handleFilter}
    />
  )
}
