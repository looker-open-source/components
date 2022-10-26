import _extends from "@babel/runtime/helpers/extends";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
const _excluded = ["item", "filterType", "onChange", "onAdd", "showAdd", "showMatchesAdvanced", "validationMessage", "userAttributes", "field"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

import { convertTypeToMatchesAdvancedOption, isDateTime, sanitizeDate } from '@looker/filter-expressions';
import React from 'react';
import { useDateFilterOptions } from '../../utils/get_date_filter_options';
import { GroupSelect } from '../GroupSelect';
import { dateFilterTypeToFilter } from './utils/date_filter_type_to_filter';
import { newDateItem } from './utils/new_date_item';
import { useFilterOptions } from '../../utils';
import { ItemLayout } from '../ItemLayout';
export const DateFilter = _ref => {
  let {
    item,
    filterType,
    onChange,
    onAdd,
    showAdd,
    showMatchesAdvanced,
    validationMessage,
    userAttributes,
    field
  } = _ref,
      rest = _objectWithoutProperties(_ref, _excluded);

  const typeChange = value => onChange(item.id, sanitizeDate(_objectSpread(_objectSpread({}, item), {}, {
    type: value
  })));

  const isParameter = !!(field !== null && field !== void 0 && field.parameter);
  const dateFilterOptions = useDateFilterOptions(isParameter);
  const type = convertTypeToMatchesAdvancedOption(item);

  if (type === 'matchesAdvanced') {
    showMatchesAdvanced = true;
    showAdd = false;
  }

  const options = useFilterOptions(dateFilterOptions, !isParameter && showMatchesAdvanced);

  const handleOnAdd = () => onAdd(newDateItem(item), true);

  const FilterComponent = dateFilterTypeToFilter(item.type);
  return React.createElement(ItemLayout, _extends({
    item: item,
    showAdd: showAdd,
    onAdd: handleOnAdd
  }, rest), React.createElement(GroupSelect, {
    value: type,
    options: options,
    onChange: typeChange,
    validationType: validationMessage === null || validationMessage === void 0 ? void 0 : validationMessage.type,
    placement: ['null', 'notnull', 'anyvalue'].includes(item.type) ? undefined : 'left'
  }), React.createElement(FilterComponent, {
    item: item,
    onChange: onChange,
    borderRadiusLeft: 0,
    userAttributes: userAttributes,
    showTime: isDateTime(filterType),
    validationMessage: validationMessage,
    filterType: filterType,
    field: field,
    placement: "right"
  }));
};
//# sourceMappingURL=DateFilter.js.map