import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";

let _ = t => t,
    _t;

const _excluded = ["autoResize", "autoFocus", "changeOnSelect", "clearOnClose", "defaultValue", "disabled", "hideSearchIcon", "clearIconLabel", "indicator", "isClearable", "isLoading", "listLayout", "name", "noOptionsLabel", "onChange", "onSelectOption", "options", "placeholder", "readOnly", "summary", "value", "windowing"];
import React, { forwardRef, useState } from 'react';
import styled from 'styled-components';
import { Search } from '@styled-icons/material-outlined/Search';
import { useControlWarn } from '../../../utils';
import { Combobox, ComboboxInput, ComboboxList } from '../Combobox';
import { SelectOptions } from '../Select';
import { omitAriaAndValidationProps, pickAriaAndValidationProps } from '../ariaProps';
import { getMatchingOption } from '../Select/utils/options';
import { useShouldWindowOptions } from '../Select/utils/useWindowedOptions';
import { useFlatOptions } from '../Select/utils/useFlatOptions';
const InputSearchLayout = forwardRef((_ref, ref) => {
  let {
    autoResize,
    autoFocus,
    changeOnSelect = true,
    clearOnClose = !changeOnSelect,
    defaultValue,
    disabled,
    hideSearchIcon,
    clearIconLabel,
    indicator,
    isClearable = true,
    isLoading,
    listLayout,
    name,
    noOptionsLabel,
    onChange,
    onSelectOption,
    options,
    placeholder,
    readOnly,
    summary,
    value: controlledValue,
    windowing: windowingProp
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  const isControlled = useControlWarn({
    controllingProps: ['value'],
    isControlledCheck: () => controlledValue !== undefined,
    name: 'InputSearch'
  });
  const [value, setValue] = useState(defaultValue || '');
  const valueToUse = isControlled ? controlledValue : value;
  const {
    flatOptions,
    navigationOptions
  } = useFlatOptions(options);
  const matchingOption = getMatchingOption(valueToUse, navigationOptions);
  const optionValue = matchingOption || {
    value: ''
  };

  function updateValue(newValue) {
    if (onChange) {
      onChange(newValue);
    }

    if (!isControlled) {
      setValue(newValue);
    }
  }

  function handleChange(option) {
    onSelectOption && onSelectOption(option);

    if (changeOnSelect) {
      updateValue((option === null || option === void 0 ? void 0 : option.value) || '');
    }
  }

  function handleInputChange(e) {
    updateValue(e.currentTarget.value);
  }

  function handleClose() {
    if (clearOnClose) {
      updateValue('');
    }
  }

  const ariaProps = pickAriaAndValidationProps(props);
  const windowing = useShouldWindowOptions(flatOptions, windowingProp);
  return React.createElement(Combobox, _extends({
    value: optionValue,
    onChange: handleChange,
    onClose: handleClose,
    openOnClick: false,
    width: autoResize ? 'auto' : '100%',
    display: autoResize ? 'inline-flex' : undefined
  }, omitAriaAndValidationProps(props), {
    role: props.role
  }), React.createElement(ComboboxInput, _extends({}, ariaProps, {
    autoComplete: false,
    autoFocus: autoFocus,
    autoResize: autoResize,
    disabled: disabled,
    freeInput: true,
    iconBefore: hideSearchIcon ? undefined : React.createElement(Search, {
      "data-testid": "search-icon"
    }),
    clearIconLabel: clearIconLabel,
    name: name,
    isClearable: isClearable,
    onChange: handleInputChange,
    placeholder: placeholder,
    readOnly: readOnly,
    ref: ref,
    summary: summary,
    validationType: props.validationType,
    value: valueToUse
  })), !disabled && ((options === null || options === void 0 ? void 0 : options.length) || noOptionsLabel) && React.createElement(ComboboxList, _extends({
    persistSelection: true,
    windowing: windowing,
    indicator: indicator,
    width: autoResize ? 'auto' : undefined,
    "aria-busy": isLoading
  }, ariaProps, listLayout), React.createElement(SelectOptions, {
    flatOptions: flatOptions,
    navigationOptions: navigationOptions,
    windowing: windowing,
    isFilterable: true,
    noOptionsLabel: noOptionsLabel,
    isLoading: isLoading
  })));
});
InputSearchLayout.displayName = 'InputSearch';
export const InputSearch = styled(InputSearchLayout).withConfig({
  displayName: "InputSearch",
  componentId: "sc-c2e1s0-0"
})(_t || (_t = _``));
//# sourceMappingURL=InputSearch.js.map