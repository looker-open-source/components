import _defineProperty from "@babel/runtime/helpers/defineProperty";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

import React from 'react';
import { addNode, removeNode, treeToList } from '@looker/filter-expressions';
import { typeToComponent } from '../../utils/type_to_component';
import { SpaceVertical } from '@looker/components';

const getShowOperator = (length, index) => {
  if (index > 0) return true;
  if (length > 1) return 'spacer';
  return false;
};

export const AdvancedFilter = ({
  ast,
  updateAST,
  name,
  onInputChange,
  changeFilter,
  suggestions,
  enumerations,
  isLinked,
  expressionType,
  userAttributes,
  field,
  inline,
  validationMessage,
  isLoading,
  allowMultipleValues
}) => {
  const onAdd = (filterItem, keepValue) => {
    if (ast) {
      const newItem = keepValue ? filterItem : _objectSpread(_objectSpread({}, filterItem), {}, {
        value: []
      });
      updateAST(addNode(ast, newItem));
    }
  };

  const onRemove = id => {
    if (ast) {
      updateAST(removeNode(ast, id));
    }
  };

  const FilterComponent = typeToComponent(expressionType);
  if (!FilterComponent) return null;
  const items = treeToList(ast);
  const lastItemIndex = items.length - 1;
  const filterList = items.map((item, itemIndex) => {
    const key = `${name}-${item.id}`;
    const isMatchesAdvanced = item.type === 'matchesAdvanced';
    const showAdd = itemIndex === lastItemIndex && !isMatchesAdvanced && !(field !== null && field !== void 0 && field.parameter) && Boolean(allowMultipleValues);
    const showRemove = lastItemIndex > 0 && !isMatchesAdvanced;
    return React.createElement(FilterComponent, {
      key: key,
      name: name,
      filterType: expressionType,
      isLinked: isLinked,
      suggestions: suggestions,
      enumerations: enumerations,
      item: item,
      isLoading: isLoading,
      onChange: changeFilter,
      onInputChange: onInputChange,
      onAdd: onAdd,
      onRemove: onRemove,
      showAdd: showAdd,
      showName: itemIndex === 0,
      showRemove: showRemove,
      showOperator: getShowOperator(items.length, itemIndex),
      userAttributes: userAttributes,
      showMatchesAdvanced: items.length === 1,
      field: field,
      inline: inline,
      validationMessage: validationMessage,
      allowMultipleOptions: Boolean(allowMultipleValues)
    });
  });
  return React.createElement(SpaceVertical, null, filterList);
};
//# sourceMappingURL=AdvancedFilter.js.map