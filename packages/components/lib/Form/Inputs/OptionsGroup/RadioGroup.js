import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";

let _ = t => t,
    _t;

const _excluded = ["autoFocus", "defaultValue", "disabled", "inline", "name", "onChange", "options", "validationType", "value"];
import React, { forwardRef, useCallback } from 'react';
import styled from 'styled-components';
import { useID } from '../../../utils';
import { Fieldset } from '../../Fieldset';
import { FieldRadio } from '../../Fields/FieldRadio';
import { inputHeight } from '../height';

function getCheckedProps(optionValue, isControlled, value, defaultValue) {
  const key = isControlled ? 'checked' : 'defaultChecked';
  const valueToUse = isControlled ? value : defaultValue;
  return {
    [key]: valueToUse === optionValue
  };
}

const RadioGroupLayout = forwardRef((_ref, ref) => {
  let {
    autoFocus,
    defaultValue,
    disabled,
    inline,
    name: propsName,
    onChange,
    options,
    validationType,
    value
  } = _ref,
      rest = _objectWithoutProperties(_ref, _excluded);

  const name = useID(propsName);
  const isControlled = onChange !== undefined && defaultValue === undefined;
  const getChangeHandler = useCallback(optionValue => {
    return onChange ? () => onChange(optionValue) : undefined;
  }, [onChange]);
  const radios = options.map((option, index) => {
    const checkedProps = getCheckedProps(option.value, isControlled, value, defaultValue);
    const autoFocusProps = index === 0 && autoFocus ? {
      autoFocus
    } : {};
    return React.createElement(FieldRadio, _extends({
      detail: option.detail,
      disabled: option.disabled || disabled,
      key: option.value,
      label: option.label,
      name: name,
      onChange: getChangeHandler(option.value),
      validationType: validationType
    }, checkedProps, autoFocusProps));
  });
  return React.createElement(Fieldset, _extends({
    "data-testid": "radio-list",
    role: "radiogroup",
    inline: inline,
    wrap: inline,
    gap: !inline ? 'u1' : undefined,
    width: inline ? 'auto' : undefined,
    ref: ref
  }, rest), radios);
});
RadioGroupLayout.displayName = 'RadioGroupLayout';
export const RadioGroup = styled(RadioGroupLayout).withConfig({
  displayName: "RadioGroup",
  componentId: "sc-x72kee-0"
})(_t || (_t = _`
  ${0} {
    ${0}
  }
`), FieldRadio, ({
  inline
}) => inline ? `line-height: ${inputHeight};` : '');
//# sourceMappingURL=RadioGroup.js.map