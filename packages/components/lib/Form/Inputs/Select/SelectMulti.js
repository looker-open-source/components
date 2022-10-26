import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";

let _ = t => t,
    _t;

const _excluded = ["autoFocus", "closeOnSelect", "defaultValues", "disabled", "formatCreateLabel", "freeInput", "chipIconLabel", "clearIconLabel", "indicator", "isFilterable", "isLoading", "listLayout", "noOptionsLabel", "onChange", "onDuplicate", "onFilter", "onValidationFail", "noErrorIcon", "options", "placeholder", "removeOnBackspace", "showCreate", "formatInputValue", "validate", "values", "windowing"];
import React, { forwardRef } from 'react';
import styled from 'styled-components';
import { omitAriaAndValidationProps, pickAriaAndValidationProps } from '../ariaProps';
import { ComboboxMulti, ComboboxMultiInput, ComboboxMultiList } from '../Combobox';
import { SelectOptions } from './SelectOptions';
import { getOptions } from './utils/options';
import { useFlatOptions } from './utils/useFlatOptions';
import { useShouldWindowOptions } from './utils/useWindowedOptions';
const SelectMultiComponent = forwardRef((_ref, ref) => {
  let {
    autoFocus,
    closeOnSelect = false,
    defaultValues,
    disabled,
    formatCreateLabel,
    freeInput = false,
    chipIconLabel,
    clearIconLabel,
    indicator,
    isFilterable = false,
    isLoading,
    listLayout,
    noOptionsLabel,
    onChange,
    onDuplicate,
    onFilter,
    onValidationFail,
    noErrorIcon,
    options,
    placeholder,
    removeOnBackspace = true,
    showCreate = false,
    formatInputValue,
    validate,
    values,
    windowing: windowingProp
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  const {
    flatOptions,
    navigationOptions
  } = useFlatOptions(options);
  const optionValues = getOptions(values, navigationOptions);
  const defaultOptionValues = getOptions(defaultValues, navigationOptions);

  function handleChange(options = []) {
    const newValues = options && options.map(option => option.value);
    onChange && onChange(newValues);
  }

  function handleInputChange(value) {
    onFilter === null || onFilter === void 0 ? void 0 : onFilter(value);
  }

  const ariaProps = pickAriaAndValidationProps(props);
  const windowing = useShouldWindowOptions(flatOptions, windowingProp);
  return React.createElement(ComboboxMulti, _extends({}, omitAriaAndValidationProps(props), {
    values: optionValues,
    defaultValues: defaultOptionValues,
    onChange: handleChange
  }), React.createElement(ComboboxMultiInput, _extends({}, ariaProps, {
    disabled: disabled,
    autoFocus: autoFocus,
    placeholder: placeholder,
    chipIconLabel: chipIconLabel,
    clearIconLabel: clearIconLabel,
    removeOnBackspace: removeOnBackspace,
    validationType: props.validationType,
    autoComplete: false,
    inputReadOnly: !isFilterable && !freeInput,
    onInputChange: handleInputChange,
    selectOnClick: isFilterable,
    freeInput: freeInput,
    validate: validate,
    formatInputValue: formatInputValue,
    noErrorIcon: noErrorIcon,
    onValidationFail: onValidationFail,
    onDuplicate: onDuplicate,
    ref: ref
  })), !disabled && React.createElement(ComboboxMultiList, _extends({
    persistSelection: true,
    closeOnSelect: closeOnSelect,
    windowing: windowing,
    indicator: indicator,
    "aria-busy": isLoading
  }, ariaProps, listLayout), React.createElement(SelectOptions, {
    isMulti: true,
    flatOptions: flatOptions,
    navigationOptions: navigationOptions,
    windowing: windowing,
    isFilterable: isFilterable,
    noOptionsLabel: noOptionsLabel,
    showCreate: showCreate,
    formatCreateLabel: formatCreateLabel,
    isLoading: isLoading
  })));
});
SelectMultiComponent.displayName = 'SelectMultiComponent';
export const SelectMulti = styled(SelectMultiComponent).withConfig({
  displayName: "SelectMulti",
  componentId: "sc-176rl8-0"
})(_t || (_t = _``));
//# sourceMappingURL=SelectMulti.js.map