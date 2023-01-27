

import React, { useState } from 'react';
import { useExplore } from '@looker/components-data';
import { createExploreViewsTree, findField } from '@looker/filter-components';
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
    explore
  } = useExplore(queryId);
  const tree = explore ? createExploreViewsTree(explore) : [];
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
    const filterField = findField(name, explore);
    if (filterField || name === '') {
      return React.createElement(Space, {
        key: `${name}${i}`
      }, React.createElement(IconButton, {
        icon: React.createElement(Close, null),
        label: "Delete filter",
        outline: true,
        onClick: () => handleDeleteFilter(name, i)
      }), React.createElement(FilterEntry, {
        tree: tree,
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