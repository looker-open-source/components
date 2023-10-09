/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import React, { useState, useMemo } from 'react';
import { Select } from '..';

export default function ShowCreate() {
  const [value, setValue] = useState<string>();
  const [searchTerm, setSearchTerm] = useState('');

  const newOptions = useMemo(() => {
    const options = [
      { value: 'Apples' },
      { value: 'Bananas' },
      { value: 'Oranges' },
      { value: 'Pineapples' },
      { value: 'Kiwis' },
    ];
    if (searchTerm === '') return options;
    return options.filter(option => {
      return option.value.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
    });
  }, [searchTerm]);

  function formatCreateLabel(inputValue: string) {
    return `Add new fruit: ${inputValue}`;
  }

  return (
    <Select
      maxWidth={400}
      options={newOptions}
      aria-label="Fruits"
      placeholder="Controlled, searchable, creatable"
      isFilterable
      value={value}
      onChange={setValue}
      onFilter={setSearchTerm}
      showCreate
      formatCreateLabel={formatCreateLabel}
    />
  );
}
