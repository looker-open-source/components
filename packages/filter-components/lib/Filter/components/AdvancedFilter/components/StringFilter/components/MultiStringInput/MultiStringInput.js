import _extends from "@babel/runtime/helpers/extends";
import _defineProperty from "@babel/runtime/helpers/defineProperty";

let _ = t => t,
    _t;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

import { InputChips, InputText, SelectMulti } from '@looker/components';
import isArray from 'lodash/isArray';
import React, { useMemo } from 'react';
import styled from 'styled-components';
import { inputPlacementStyle, multiInputWidth } from '../../../../../../utils/filter_styles';
import { createOptions } from '../../../../../../utils/option_utils';
import { useOptionFiltering } from '../../../../../../utils/use_option_filtering';
import { usePlaceholder } from '../../../../../../utils/use_placeholder';
export const MultiStringInputLayout = ({
  className,
  onChange,
  onInputChange,
  isLoading,
  item,
  disableCreate,
  suggestions,
  enumerations,
  validationMessage,
  id,
  width: _width = multiInputWidth,
  height,
  showDropDownMenu: _showDropDownMenu = true
}) => {
  const values = isArray(item.value) ? item.value : [];
  const options = useMemo(() => {
    return suggestions ? createOptions(suggestions) : enumerations || [];
  }, [suggestions, enumerations]);
  const {
    debouncedFilterTerm,
    filteredOptions,
    noOptionsLabel,
    onFilter
  } = useOptionFiltering({
    excludeValues: true,
    onInputChange,
    options,
    value: item.value
  });

  const handleChange = newValues => {
    onChange === null || onChange === void 0 ? void 0 : onChange(item.id, {
      value: newValues
    });
  };

  const placeholderProps = usePlaceholder(item.value, validationMessage);

  const commonProps = _objectSpread(_objectSpread({}, placeholderProps), {}, {
    className,
    height,
    id,
    maxHeight: 145,
    onChange: handleChange,
    noErrorIcon: true,
    validationType: validationMessage === null || validationMessage === void 0 ? void 0 : validationMessage.type,
    values,
    width: _width
  });

  const noSuggestions = debouncedFilterTerm === '' && !suggestions && !enumerations;

  if (noSuggestions || _showDropDownMenu === false) {
    return React.createElement(InputChips, commonProps);
  }

  return React.createElement(SelectMulti, _extends({}, commonProps, {
    options: filteredOptions,
    isFilterable: true,
    onFilter: onFilter,
    freeInput: !disableCreate,
    noOptionsLabel: noOptionsLabel,
    indicator: false,
    closeOnSelect: true,
    isLoading: isLoading
  }));
};
export const MultiStringInput = styled(MultiStringInputLayout).withConfig({
  displayName: "MultiStringInput",
  componentId: "sc-18howej-0"
})(_t || (_t = _`
  ${0}
  ${0} {
    ${0}
  }
`), inputPlacementStyle, InputText, inputPlacementStyle);
//# sourceMappingURL=MultiStringInput.js.map