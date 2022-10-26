import React, { useState } from 'react';
import { useFieldGroups } from '@looker/components-data';
import { Space, IconButton, ButtonOutline } from '@looker/components';
import { Close } from '@styled-icons/material/Close';
import { Add } from '@styled-icons/material/Add';
import { FilterEntry } from '../FilterEntry';
export const ActiveFilters = ({
  filters,
  queryId,
  onRemoveFilter,
  onUpdateFilter
}) => {
  const {
    fieldGroups
  } = useFieldGroups(queryId);
  const [filterEntries, setFilterEntries] = useState(Object.entries(filters || {}));

  const handleCreateFilter = () => {
    setFilterEntries([...filterEntries, ['', '']]);
  };

  const handleDeleteFilter = (name, i) => {
    const draftFilterEntries = [...filterEntries];
    draftFilterEntries.splice(i, 1);
    setFilterEntries(draftFilterEntries);
    onRemoveFilter(name);
  };

  return React.createElement(React.Fragment, null, filterEntries.map(([name, value], i) => {
    const filterView = name.split('.')[0];
    const fieldGroup = fieldGroups[filterView];
    const filterField = fieldGroup === null || fieldGroup === void 0 ? void 0 : fieldGroup.find(g => g.name === name);

    if (filterField || name === '') {
      return React.createElement(Space, {
        key: `${name}${i}`
      }, React.createElement(IconButton, {
        icon: React.createElement(Close, null),
        label: "Delete filter",
        outline: true,
        onClick: () => handleDeleteFilter(name, i)
      }), React.createElement(FilterEntry, {
        queryId: queryId,
        filterExpression: value,
        filterField: filterField,
        onUpdateFilter: onUpdateFilter
      }));
    }

    return null;
  }), React.createElement(ButtonOutline, {
    iconBefore: React.createElement(Add, null),
    onClick: handleCreateFilter,
    type: "button"
  }, "Create Filter"));
};
//# sourceMappingURL=ActiveFilters.js.map