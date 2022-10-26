import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";

let _ = t => t,
    _t;

const _excluded = ["hideInput", "id", "name", "onChange", "onFocus", "onBlur", "placeholder", "value", "defaultValue", "disabled", "readOnly", "validationType"];
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
InputColorInternal.displayName = 'InputColorInternal';
export const InputColor = styled(InputColorInternal).withConfig({
  displayName: "InputColor",
  componentId: "sc-s77c8w-0"
})(_t || (_t = _``));
//# sourceMappingURL=InputColor.js.map