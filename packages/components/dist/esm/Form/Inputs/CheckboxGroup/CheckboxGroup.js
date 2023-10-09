let _ = t => t,
  _t;
const _excluded = ["autoFocus", "disabled", "inline", "name", "options", "defaultValue", "value", "onChange", "validationType"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
import xor from 'lodash/xor';
import React, { forwardRef, useCallback, useRef } from 'react';
import styled from 'styled-components';
import { useID } from '../../../utils';
import { Fieldset } from '../../../Fieldset';
import { FieldCheckbox } from '../../Fields/FieldCheckbox';
import { inputHeight } from '../height';
function getCheckedProps(optionValue, value, defaultValue) {
  const key = value ? 'checked' : 'defaultChecked';
  const valueToUse = value || defaultValue || [];
  return {
    [key]: valueToUse.includes(optionValue)
  };
}
const CheckboxGroupLayout = forwardRef((_ref, ref) => {
  let {
      autoFocus,
      disabled,
      inline,
      name: propsName,
      options,
      defaultValue = [],
      value,
      onChange,
      validationType
    } = _ref,
    rest = _objectWithoutProperties(_ref, _excluded);
  const name = useID(propsName);
  const uncontrolledValueRef = useRef(defaultValue);
  const getChangeHandler = useCallback(optionValue => {
    return onChange ? () => {
      const oldValue = value || uncontrolledValueRef.current;
      const newValue = xor(oldValue, [optionValue]);
      onChange(newValue);
      uncontrolledValueRef.current = newValue;
    } : undefined;
  }, [onChange, value]);
  const checkboxes = options.map((option, index) => {
    const checkedProps = getCheckedProps(option.value, value, defaultValue);
    const autoFocusProps = index === 0 && autoFocus ? {
      autoFocus
    } : {};
    const handleChange = getChangeHandler(option.value);
    return React.createElement(FieldCheckbox, _extends({
      onChange: handleChange,
      disabled: option.disabled || disabled,
      key: option.value,
      label: option.label,
      detail: option.detail,
      name: name,
      validationType: validationType,
      value: option.value
    }, checkedProps, autoFocusProps));
  });
  return React.createElement(Fieldset, _extends({
    "data-testid": "checkbox-list",
    inline: inline,
    wrap: inline,
    gap: !inline ? 'u1' : undefined,
    width: inline ? 'auto' : undefined,
    ref: ref
  }, rest), checkboxes);
});
CheckboxGroupLayout.displayName = 'CheckboxGroupLayout';
export const CheckboxGroup = styled(CheckboxGroupLayout).withConfig({
  displayName: "CheckboxGroup",
  componentId: "sc-ojzo2z-0"
})(_t || (_t = _`
  ${0} {
    ${0}
  }
`), FieldCheckbox, ({
  inline
}) => inline ? `line-height: ${inputHeight};` : '');
//# sourceMappingURL=CheckboxGroup.js.map