const _excluded = ["className", "checked", "defaultChecked", "onChange", "readOnly", "style", "validationType"],
  _excluded2 = ["callbacks"];
let _ = t => t,
  _t;
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
import isUndefined from 'lodash/isUndefined';
import noop from 'lodash/noop';
import pick from 'lodash/pick';
import React, { forwardRef, useState, useEffect } from 'react';
import styled from 'styled-components';
import { reset, space } from '@looker/design-tokens';
import { inputRippleColor, RIPPLE_RATIO, rippleHandlerKeys, rippleStyle, useRipple, useRippleHandlers } from '../../../Ripple';
import { pickInputProps } from '../InputProps';
import { CheckMark } from './CheckMark';
import { CheckMarkMixed } from './CheckMarkMixed';
import { FauxCheckbox } from './FauxCheckbox';
export const Checkbox = styled(forwardRef((props, ref) => {
  const {
      className,
      checked,
      defaultChecked,
      onChange,
      readOnly,
      style,
      validationType
    } = props,
    restProps = _objectWithoutProperties(props, _excluded);
  const [isChecked, setIsChecked] = useState(!!defaultChecked);
  const _useRipple = useRipple({
      className,
      color: inputRippleColor(isChecked !== false, validationType === 'error'),
      size: RIPPLE_RATIO,
      style
    }),
    {
      callbacks
    } = _useRipple,
    rippleProps = _objectWithoutProperties(_useRipple, _excluded2);
  const rippleHandlers = useRippleHandlers(callbacks, pick(restProps, rippleHandlerKeys), restProps.disabled);
  const handleClick = readOnly ? undefined : e => {
    if (isUndefined(checked)) {
      setIsChecked(!isChecked);
    }
    if (onChange) {
      const changeEvent = _objectSpread(_objectSpread({}, e), {}, {
        target: e.currentTarget
      });
      onChange(changeEvent);
    }
  };
  useEffect(() => {
    if (!isUndefined(checked)) {
      setIsChecked(checked);
    }
  }, [checked]);
  return React.createElement("div", rippleProps, React.createElement("input", _extends({
    type: "checkbox"
  }, pickInputProps(restProps), {
    checked: !!isChecked,
    "aria-checked": checked,
    "aria-invalid": validationType === 'error' ? 'true' : undefined,
    onClick: handleClick,
    onChange: noop,
    ref: ref
  }, rippleHandlers)), React.createElement(FauxCheckbox, {
    isSelected: !!isChecked
  }, checked === 'mixed' ? React.createElement(CheckMarkMixed, null) : React.createElement(CheckMark, null)));
})).withConfig({
  displayName: "Checkbox",
  componentId: "sc-9j2vap-0"
})(_t || (_t = _`
  ${0}
  ${0}
  ${0}

  align-items: center;
  display: flex;
  height: ${0};
  justify-content: center;
  position: relative;
  width: ${0};

  input {
    cursor: ${0};
    height: 100%;
    left: 0;
    margin: 0;
    opacity: 0;
    position: absolute;
    top: 0;
    width: 100%;
    z-index: 1;

    &[aria-invalid='true'] {
      + ${0} {
        border-color: ${0};
      }
      &:checked + ${0} {
        background: ${0};
      }
    }
    &:disabled {
      + ${0}, &:not(:checked):hover + ${0} {
        border-color: ${0};
      }
      &:checked + ${0} {
        background: ${0};
      }
    }
    &:not(:checked):not([aria-invalid='true']):not(:disabled) {
      &:hover,
      &:focus {
        + ${0} {
          border-color: ${0};
        }
      }
    }
  }
`), reset, space, rippleStyle, ({
  theme: {
    space
  }
}) => space.u6, ({
  theme: {
    space
  }
}) => space.u6, ({
  readOnly,
  disabled
}) => readOnly || disabled ? 'not-allowed' : undefined, FauxCheckbox, ({
  theme
}) => theme.colors.critical, FauxCheckbox, ({
  theme
}) => theme.colors.critical, FauxCheckbox, FauxCheckbox, ({
  theme
}) => theme.colors.ui2, FauxCheckbox, ({
  theme
}) => theme.colors.ui2, FauxCheckbox, ({
  theme
}) => theme.colors.ui5);
//# sourceMappingURL=Checkbox.js.map