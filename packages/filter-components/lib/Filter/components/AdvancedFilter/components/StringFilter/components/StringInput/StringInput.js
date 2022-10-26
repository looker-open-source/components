import _extends from "@babel/runtime/helpers/extends";
import _defineProperty from "@babel/runtime/helpers/defineProperty";

let _ = t => t,
    _t;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

import { InputText, InputSearch } from '@looker/components';
import isArray from 'lodash/isArray';
import React, { useMemo } from 'react';
import styled from 'styled-components';
import { inputPlacementStyle, multiInputWidth } from '../../../../../../utils/filter_styles';
import { createOptions } from '../../../../../../utils/option_utils';
import { useOptionFiltering } from '../../../../../../utils/use_option_filtering';
import { usePlaceholder } from '../../../../../../utils/use_placeholder';
export const StringInputLayout = ({
  className,
  onChange,
  onInputChange,
  isLoading,
  item,
  suggestions,
  enumerations,
  validationMessage,
  id,
  width: _width = multiInputWidth,
  height
}) => {
  const options = useMemo(() => {
    return suggestions ? createOptions(suggestions) : enumerations || [];
  }, [suggestions, enumerations]);
  const {
    filteredOptions,
    noOptionsLabel,
    onFilter
  } = useOptionFiltering({
    excludeValues: true,
    onInputChange,
    options,
    value: item.value
  });

  const handleChange = newValue => {
    onFilter(newValue || '');
    onChange === null || onChange === void 0 ? void 0 : onChange(item.id, {
      value: [newValue]
    });
  };

  const comboboxInputRef = React.useRef(null);

  const handleKeyDown = event => {
    if (event.key === 'Enter') {
      var _comboboxInputRef$cur;

      event.preventDefault();
      comboboxInputRef === null || comboboxInputRef === void 0 ? void 0 : (_comboboxInputRef$cur = comboboxInputRef.current) === null || _comboboxInputRef$cur === void 0 ? void 0 : _comboboxInputRef$cur.click();
    }
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
    width: _width
  });

  const value = isArray(item.value) && item.value.length ? item.value[0] : item.value;
  return React.createElement(InputSearch, _extends({}, commonProps, {
    options: filteredOptions,
    noOptionsLabel: noOptionsLabel,
    indicator: false,
    isLoading: isLoading,
    value: value,
    onKeyDown: handleKeyDown,
    isClearable: true,
    ref: comboboxInputRef,
    hideSearchIcon: true,
    openOnClick: true
  }));
};
export const StringInput = styled(StringInputLayout).withConfig({
  displayName: "StringInput",
  componentId: "sc-feqdof-0"
})(_t || (_t = _`
  ${0}
  ${0} {
    ${0}
  }
`), inputPlacementStyle, InputText, inputPlacementStyle);
//# sourceMappingURL=StringInput.js.map