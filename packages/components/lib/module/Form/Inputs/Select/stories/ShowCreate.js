

import React, { useState, useMemo } from 'react';
import { Select } from '..';
export default function ShowCreate() {
  const [value, setValue] = useState();
  const [searchTerm, setSearchTerm] = useState('');
  const newOptions = useMemo(() => {
    const options = [{
      value: 'Apples'
    }, {
      value: 'Bananas'
    }, {
      value: 'Oranges'
    }, {
      value: 'Pineapples'
    }, {
      value: 'Kiwis'
    }];
    if (searchTerm === '') return options;
    return options.filter(option => {
      return option.value.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
    });
  }, [searchTerm]);
  function formatCreateLabel(inputValue) {
    return `Add new fruit: ${inputValue}`;
  }
  return React.createElement(Select, {
    maxWidth: 400,
    options: newOptions,
    "aria-label": "Fruits",
    placeholder: "Controlled, searchable, creatable",
    isFilterable: true,
    value: value,
    onChange: setValue,
    onFilter: setSearchTerm,
    showCreate: true,
    formatCreateLabel: formatCreateLabel
  });
}
//# sourceMappingURL=ShowCreate.js.map