import _extends from "@babel/runtime/helpers/extends";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
const _excluded = ["item", "filterType", "onInputChange", "suggestions", "userAttributes", "isLoading", "onChange", "showMatchesAdvanced", "validationMessage"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

import { convertOptionToType, convertTypeToOption, sanitizeString } from '@looker/filter-expressions';
import React from 'react';
import { GroupSelect } from '../GroupSelect';
import { stringFilterTypeToFilter } from './utils/string_filter_type_to_filter';
import { useStringFilterOptions, useFilterOptions } from '../../utils';
import { ItemLayout } from '../ItemLayout';
const typesUsingSuggestions = ['match', 'contains', 'startsWith', 'endsWith'];
export const StringFilter = _ref => {
  var _rest$field;

  let {
    item,
    filterType,
    onInputChange,
    suggestions,
    userAttributes,
    isLoading,
    onChange,
    showMatchesAdvanced,
    validationMessage
  } = _ref,
      rest = _objectWithoutProperties(_ref, _excluded);

  const isParameter = (_rest$field = rest.field) === null || _rest$field === void 0 ? void 0 : _rest$field.parameter;
  const stringFilterOptions = useStringFilterOptions(isParameter);
  const options = useFilterOptions(stringFilterOptions, !isParameter && showMatchesAdvanced);

  const typeChange = value => onChange(item.id, sanitizeString(_objectSpread(_objectSpread({}, item), convertOptionToType(String(value))), userAttributes));

  const FilterComponent = stringFilterTypeToFilter(item.type, isParameter, rest.allowMultipleOptions);
  const selectValue = convertTypeToOption(item);
  return React.createElement(ItemLayout, _extends({
    item: item
  }, rest), React.createElement(GroupSelect, {
    value: selectValue,
    options: options,
    onChange: typeChange,
    validationType: validationMessage === null || validationMessage === void 0 ? void 0 : validationMessage.type,
    placement: ['blank', 'null'].includes(item.type) ? undefined : 'left'
  }), React.createElement(FilterComponent, {
    item: item,
    onInputChange: onInputChange,
    onChange: onChange,
    validationMessage: validationMessage,
    suggestions: typesUsingSuggestions.includes(item.type) ? suggestions : undefined,
    placement: "right",
    userAttributes: userAttributes,
    filterType: filterType,
    isLoading: isLoading
  }));
};
//# sourceMappingURL=StringFilter.js.map