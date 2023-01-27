import _extends from "@babel/runtime/helpers/extends";

import React, { useState, useEffect } from 'react';
import { useSDK } from '@looker/components-data';
import { ButtonOutline, Popover, Space } from '@looker/components';
import { Filter, getExpressionTypeFromField, useSuggestable } from '@looker/filter-components';
import { FieldSelector } from '../FieldSelector';
const getSelectFilterLabel = field => {
  if (field !== null && field !== void 0 && field.name) {
    return field.name.replace('.', ' > ').replace(/_/g, ' ');
  }
  return 'Select a field';
};
export const FilterEntry = ({
  onUpdateFilter,
  tree,
  filterField: filterFieldProp,
  filterExpression: filterExpressionProp = ''
}) => {
  const sdk = useSDK();
  const [filterField, setFilterField] = useState(filterFieldProp);
  const [filterExpression, setFilterExpression] = useState(filterExpressionProp);
  const handleFilterChange = ({
    expression
  }) => {
    if (setFilterExpression) {
      setFilterExpression(expression);
    }
  };
  useEffect(() => {
    if (filterField !== null && filterField !== void 0 && filterField.name) {
      onUpdateFilter(filterField === null || filterField === void 0 ? void 0 : filterField.name, filterExpression);
    }
  }, [filterField, filterExpression, onUpdateFilter]);
  const {
    suggestableProps
  } = useSuggestable({
    filter: {
      field: filterField,
      model: filterField === null || filterField === void 0 ? void 0 : filterField.project_name
    },
    sdk
  });
  return React.createElement(Space, {
    align: "start"
  }, React.createElement(Popover, {
    placement: "bottom-start",
    content: React.createElement(FieldSelector, {
      tree: tree,
      current: filterField,
      onChange: setFilterField
    })
  }, React.createElement(ButtonOutline, {
    color: "neutral"
  }, getSelectFilterLabel(filterField))), (filterField === null || filterField === void 0 ? void 0 : filterField.name) && React.createElement(Filter, _extends({
    name: filterField === null || filterField === void 0 ? void 0 : filterField.name,
    expressionType: getExpressionTypeFromField(filterField),
    expression: filterExpression,
    onChange: handleFilterChange
  }, suggestableProps)));
};
//# sourceMappingURL=FilterEntry.js.map