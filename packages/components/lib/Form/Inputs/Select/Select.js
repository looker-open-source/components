import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";

let _ = t => t,
    _t;

const _excluded = ["options", "disabled", "autoFocus", "isFilterable", "isClearable", "placeholder", "name", "onFilter", "onChange", "value", "defaultValue", "noOptionsLabel", "indicator", "listLayout", "autoResize", "windowing", "showCreate", "formatCreateLabel", "isLoading", "noErrorIcon"];
import React, { forwardRef } from 'react';
import styled from 'styled-components';
import { omitAriaAndValidationProps, pickAriaAndValidationProps } from '../ariaProps';
import { Combobox, ComboboxInput, ComboboxList } from '../Combobox';
import { SelectOptions } from './SelectOptions';
import { SelectInputIcon } from './SelectInputIcon';
import { getOption, getFirstOption } from './utils/options';
import { useFlatOptions } from './utils/useFlatOptions';
import { useShouldWindowOptions } from './utils/useWindowedOptions';
const SelectComponent = forwardRef((_ref, ref) => {
  let {
    options,
    disabled,
    autoFocus,
    isFilterable,
    isClearable,
    placeholder,
    name,
    onFilter,
    onChange,
    value,
    defaultValue,
    noOptionsLabel,
    indicator,
    listLayout,
    autoResize,
    windowing: windowingProp,
    showCreate = false,
    formatCreateLabel,
    isLoading,
    noErrorIcon
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  const {
    flatOptions,
    navigationOptions
  } = useFlatOptions(options);
  const optionValue = getOption(value, navigationOptions);
  const nullDefault = (isClearable || placeholder) && !defaultValue;
  const defaultOptionValue = nullDefault ? undefined : getOption(defaultValue, navigationOptions) || options && getFirstOption(options);

  function handleChange(option) {
    const newValue = option ? option.value : '';
    onChange && onChange(newValue);
    onFilter && onFilter('');
  }

  function handleInputChange(e) {
    onFilter && onFilter(e.currentTarget.value);
  }

  function handleClose() {
    onFilter && onFilter('');
  }

  const ariaProps = pickAriaAndValidationProps(props);
  const windowing = useShouldWindowOptions(flatOptions, windowingProp);
  return React.createElement(Combobox, _extends({
    value: optionValue,
    defaultValue: defaultOptionValue,
    onChange: handleChange,
    onClose: handleClose,
    width: autoResize ? 'auto' : '100%',
    display: autoResize ? 'inline-flex' : undefined,
    wrapperAriaLabel: props.wrapperAriaLabel
  }, omitAriaAndValidationProps(props)), React.createElement(ComboboxInput, _extends({}, ariaProps, {
    before: React.createElement(SelectInputIcon, {
      options: navigationOptions
    }),
    disabled: disabled,
    autoFocus: autoFocus,
    placeholder: placeholder,
    name: name,
    noErrorIcon: noErrorIcon,
    validationType: props.validationType,
    isClearable: isClearable,
    autoComplete: false,
    autoResize: autoResize,
    inputReadOnly: !isFilterable,
    onChange: handleInputChange,
    selectOnClick: isFilterable,
    ref: ref
  })), !disabled && React.createElement(ComboboxList, _extends({
    persistSelection: true,
    windowing: windowing,
    indicator: indicator,
    width: autoResize ? 'auto' : undefined,
    "aria-busy": isLoading
  }, ariaProps, listLayout), React.createElement(SelectOptions, {
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
SelectComponent.displayName = 'SelectComponent';
export const Select = styled(SelectComponent).withConfig({
  displayName: "Select",
  componentId: "sc-1grg5v4-0"
})(_t || (_t = _``));
//# sourceMappingURL=Select.js.map