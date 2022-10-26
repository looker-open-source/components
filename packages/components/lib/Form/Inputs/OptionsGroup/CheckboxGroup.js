import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";

let _ = t => t,
    _t;

const _excluded = ["autoFocus", "disabled", "inline", "name", "options", "defaultValue", "value", "onChange", "validationType"];
import xor from 'lodash/xor';
import React, { forwardRef, useCallback, useRef } from 'react';
import styled from 'styled-components';
import { useID } from '../../../utils';
import { Fieldset } from '../../Fieldset';
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
  componentId: "sc-kl6hc5-0"
})(_t || (_t = _`
  ${0} {
    ${0}
  }
`), FieldCheckbox, ({
  inline
}) => inline ? `line-height: ${inputHeight};` : '');
//# sourceMappingURL=CheckboxGroup.js.map