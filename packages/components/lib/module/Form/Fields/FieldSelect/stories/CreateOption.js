

import React, { useState, useMemo } from 'react';
import { FieldSelect } from '../../FieldSelect';
import { options } from '../../../Inputs/Select/stories/options';
export default function CreateOption() {
  const [filterTerm, setFilterTerm] = useState('');
  const newOptions = useMemo(() => {
    return options.filter(option => option.label.toLowerCase().indexOf(filterTerm.toLowerCase()) > -1);
  }, [filterTerm]);
  const formatCreateLabel = inputValue => {
    return `Create a fruit: ${inputValue}`;
  };
  return React.createElement(FieldSelect, {
    label: "showCreate & formatCreateLabel",
    options: newOptions,
    isFilterable: true,
    onFilter: setFilterTerm,
    showCreate: true,
    formatCreateLabel: formatCreateLabel,
    width: 300
  });
}
//# sourceMappingURL=CreateOption.js.map