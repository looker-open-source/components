import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
const _excluded = ["item", "filterType", "enumerations", "field", "userAttributes", "onChange", "showMatchesAdvanced", "validationMessage"];
import { convertOptionToType, convertTypeToOption } from '@looker/filter-expressions';
import React from 'react';
import { GroupSelect } from '../GroupSelect';
import { tierFilterTypeToFilter } from './utils/tier_filter_type_to_filter';
import { useParamFilterOptions, useTierFilterOptions, useFilterOptions } from '../../utils';
import { ItemLayout } from '../ItemLayout';
import { createEnumeration } from '../../../../utils';
export const TierFilter = _ref => {
  let {
    item,
    filterType,
    enumerations,
    field,
    userAttributes,
    onChange,
    showMatchesAdvanced,
    validationMessage
  } = _ref,
      rest = _objectWithoutProperties(_ref, _excluded);

  const typeChange = value => onChange(item.id, convertOptionToType(String(value)));

  const selectValue = convertTypeToOption(item);
  const isParamFilter = field ? field.category === 'parameter' : false;
  const unescapeEnumerationValues = (field === null || field === void 0 ? void 0 : field.has_allowed_values) && isParamFilter;
  const unescapedEnumerations = enumerations === null || enumerations === void 0 ? void 0 : enumerations.map(createEnumeration(unescapeEnumerationValues));
  const FilterComponent = tierFilterTypeToFilter(item.type, isParamFilter, rest.allowMultipleOptions);
  const isValueSet = item.value && item.value.length > 0;
  const isValueInEnumeration = unescapedEnumerations === null || unescapedEnumerations === void 0 ? void 0 : unescapedEnumerations.some(e => {
    var _item$value;

    return (_item$value = item.value) === null || _item$value === void 0 ? void 0 : _item$value.includes(e.value);
  });

  if (isParamFilter && unescapedEnumerations !== null && unescapedEnumerations !== void 0 && unescapedEnumerations.length && isValueSet && !isValueInEnumeration) {
    item.value = [String(unescapedEnumerations[0].value)];
  }

  const paramFilterOptions = useParamFilterOptions();
  const tierFilterOptions = useTierFilterOptions();
  const options = useFilterOptions(isParamFilter ? paramFilterOptions : tierFilterOptions, isParamFilter ? false : showMatchesAdvanced);
  return React.createElement(ItemLayout, _extends({
    item: item
  }, rest), React.createElement(GroupSelect, {
    value: selectValue,
    options: options,
    onChange: typeChange,
    validationType: validationMessage === null || validationMessage === void 0 ? void 0 : validationMessage.type,
    placement: item.type === 'anyvalue' ? undefined : 'left'
  }), React.createElement(FilterComponent, {
    item: item,
    onChange: onChange,
    borderRadiusLeft: 0,
    disableCreate: true,
    validationMessage: validationMessage,
    enumerations: unescapedEnumerations,
    userAttributes: userAttributes,
    filterType: filterType,
    placement: "right"
  }));
};
//# sourceMappingURL=TierFilter.js.map