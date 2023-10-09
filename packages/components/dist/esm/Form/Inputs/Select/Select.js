let _ = t => t,
  _t;
const _excluded = ["options", "disabled", "autoFocus", "isFilterable", "isClearable", "placeholder", "name", "onFilter", "onChange", "value", "defaultValue", "noOptionsLabel", "indicator", "listLayout", "autoResize", "windowing", "showCreate", "formatCreateLabel", "isLoading", "noErrorIcon"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
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
    onFilter && onFilter(e.target.value);
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