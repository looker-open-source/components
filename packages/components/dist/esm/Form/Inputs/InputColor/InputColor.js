let _ = t => t,
  _t;
const _excluded = ["hideInput", "id", "name", "onChange", "onFocus", "onBlur", "placeholder", "value", "defaultValue", "disabled", "readOnly", "validationType"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
import React, { useState, forwardRef, useEffect } from 'react';
import styled from 'styled-components';
import { useWrapEvent } from '../../../utils';
import { PopoverLayout } from '../../../Popover';
import { Combobox, ComboboxInput, ComboboxList } from '../Combobox';
import { omitAriaAndValidationProps, pickAriaAndValidationProps } from '../ariaProps';
import { Swatch } from './Swatch';
import { isValidColor, hsvToHex, simpleHsvToHex, stringToSimpleHsv } from './utils';
import { ColorPicker } from './ColorPicker';
import { DEFAULT_INPUT_COLOR_WIDTH } from './dimensions';
const createEventWithHSVValue = (color, name) => {
  return {
    currentTarget: {
      name,
      value: typeof color === 'string' ? color : simpleHsvToHex(color)
    },
    target: {
      name,
      value: typeof color === 'string' ? color : simpleHsvToHex(color)
    }
  };
};
function getColorFromText(text) {
  return text && isValidColor(text) ? stringToSimpleHsv(text) : undefined;
}
const InputColorInternal = forwardRef((_ref, ref) => {
  let {
      hideInput,
      id,
      name,
      onChange,
      onFocus,
      onBlur,
      placeholder,
      value,
      defaultValue = '',
      disabled,
      readOnly,
      validationType
    } = _ref,
    props = _objectWithoutProperties(_ref, _excluded);
  const initialColor = getColorFromText(value || defaultValue);
  const [color, setColor] = useState(initialColor);
  const [inputTextValue, setInputTextValue] = useState(value || defaultValue);
  const [isFocused, setIsFocused] = useState(false);
  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);
  const wrappedOnFocus = useWrapEvent(handleFocus, onFocus);
  const wrappedOnBlur = useWrapEvent(handleBlur, onBlur);
  useEffect(() => {
    if (value && value !== inputTextValue) {
      setColor(stringToSimpleHsv(value));
      !isFocused && setInputTextValue(value);
    }
  }, [isFocused, value, inputTextValue]);
  const callOnChange = newColor => {
    onChange === null || onChange === void 0 ? void 0 : onChange(createEventWithHSVValue(newColor, name));
  };
  const setColorState = newColor => {
    setColor(newColor);
    const newTextValue = newColor ? simpleHsvToHex(newColor) : '';
    setInputTextValue(newTextValue);
    callOnChange(newColor || '');
  };
  const handleInputTextChange = e => {
    const newValue = e.currentTarget.value;
    setInputTextValue(newValue);
    const isValid = isValidColor(newValue) || newValue === '';
    if (isValid) {
      callOnChange(newValue);
    }
    setColor(getColorFromText(newValue));
  };
  const handleClear = value => {
    if (!value) {
      setColorState();
    }
  };
  const ariaProps = pickAriaAndValidationProps(props);
  return React.createElement(Combobox, _extends({}, omitAriaAndValidationProps(props), {
    onChange: handleClear
  }), React.createElement(ComboboxInput, _extends({
    before: React.createElement(Swatch, {
      color: color ? hsvToHex(color) : undefined,
      disabled: disabled,
      readOnly: readOnly,
      ml: "u2"
    }),
    "aria-describedby": `describedby-${id}`,
    ref: ref,
    disabled: disabled,
    readOnly: readOnly,
    validationType: validationType,
    onChange: handleInputTextChange,
    value: inputTextValue,
    onFocus: wrappedOnFocus,
    onBlur: wrappedOnBlur,
    placeholder: placeholder,
    isClearable: true
  }, ariaProps)), !disabled && !readOnly && React.createElement(ComboboxList, _extends({
    width: "fit-content"
  }, ariaProps), React.createElement(PopoverLayout, null, React.createElement(ColorPicker, {
    hsv: color || {
      h: 0,
      s: 1,
      v: 1
    },
    setHsv: setColorState,
    width: DEFAULT_INPUT_COLOR_WIDTH
  }))));
});
export const InputColor = styled(InputColorInternal).withConfig({
  displayName: "InputColor",
  componentId: "sc-s77c8w-0"
})(_t || (_t = _``));
//# sourceMappingURL=InputColor.js.map