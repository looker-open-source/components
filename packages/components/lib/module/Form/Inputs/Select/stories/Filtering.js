

import React, { useState, useMemo } from 'react';
import { Select } from '..';
export default function Filtering() {
  const [value, setValue] = useState();
  const [searchTerm, setSearchTerm] = useState('');
  function handleChange(value) {
    setValue(value);
  }
  function handleFilter(term) {
    setSearchTerm(term);
  }
  const newOptions = useMemo(() => {
    const options = [{
      label: 'Apples',
      value: '1'
    }, {
      label: 'Bananas',
      value: '2'
    }, {
      label: 'Oranges',
      value: '3'
    }, {
      label: 'Pineapples',
      value: '4'
    }, {
      label: 'Kiwis',
      value: '5'
    }];
    if (searchTerm === '') return options;
    return options.filter(option => {
      return option.label.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
    });
  }, [searchTerm]);
  return React.createElement(Select, {
    maxWidth: 400,
    options: newOptions,
    "aria-label": "Fruits",
    placeholder: "Controlled, searchable, clearable",
    isClearable: true,
    isFilterable: true,
    value: value,
    onChange: handleChange,
    onFilter: handleFilter
  });
}
//# sourceMappingURL=Filtering.js.map