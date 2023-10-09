let _ = t => t,
  _t;
const _excluded = ["autoFocus", "defaultValue", "disabled", "inline", "name", "onChange", "options", "validationType", "value"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
import React, { forwardRef, useCallback } from 'react';
import styled from 'styled-components';
import { useID } from '../../../utils';
import { Fieldset } from '../../../Fieldset';
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
  componentId: "sc-1ekc4ms-0"
})(_t || (_t = _`
  ${0} {
    ${0}
  }
`), FieldRadio, ({
  inline
}) => inline ? `line-height: ${inputHeight};` : '');
//# sourceMappingURL=RadioGroup.js.map