import _extends from "@babel/runtime/helpers/extends";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
const _excluded = ["item", "filterType", "onChange", "validationMessage", "userAttributes", "showMatchesAdvanced"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

import { convertOptionToType, convertTypeToOption, sanitizeNumber } from '@looker/filter-expressions';
import React from 'react';
import { useTranslation } from '../../../../../utils';
import { ItemLayout } from '../ItemLayout';
import { GroupSelect } from '../GroupSelect';
import { numberFilterTypeToFilter } from './utils/number_filter_type_to_filter';
import { useNumberFilterOptions, useFilterOptions } from '../../utils';
export const NumberFilter = _ref => {
  var _rest$field, _item$value;

  let {
    item,
    filterType,
    onChange,
    validationMessage,
    userAttributes,
    showMatchesAdvanced
  } = _ref,
      rest = _objectWithoutProperties(_ref, _excluded);

  const isParameter = !!((_rest$field = rest.field) !== null && _rest$field !== void 0 && _rest$field.parameter);
  const numberFilterOptions = useNumberFilterOptions(isParameter);
  const options = useFilterOptions(numberFilterOptions, !isParameter && showMatchesAdvanced);

  const typeChange = value => onChange(item.id, sanitizeNumber(_objectSpread(_objectSpread({}, item), convertOptionToType(String(value)))));

  const FilterComponent = numberFilterTypeToFilter(item.type, !!rest.allowMultipleOptions, isParameter);
  const selectValue = convertTypeToOption(item);
  const validationText = validationMessage === null || validationMessage === void 0 ? void 0 : validationMessage.message;
  const {
    t
  } = useTranslation('NumberFilter');
  const placeholder = validationText || (!(item !== null && item !== void 0 && (_item$value = item.value) !== null && _item$value !== void 0 && _item$value.length) || item.value.length === 0 ? t('any value') : '');
  return React.createElement(ItemLayout, _extends({
    item: item
  }, rest), React.createElement(GroupSelect, {
    value: selectValue,
    options: options,
    onChange: typeChange,
    validationType: validationMessage === null || validationMessage === void 0 ? void 0 : validationMessage.type,
    placement: item.type === 'null' ? undefined : 'left'
  }), React.createElement(FilterComponent, {
    item: item,
    onChange: onChange,
    validationMessage: validationMessage,
    placement: "right",
    userAttributes: userAttributes,
    filterType: filterType,
    placeholder: placeholder
  }));
};
//# sourceMappingURL=NumberFilter.js.map