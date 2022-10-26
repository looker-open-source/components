import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";

let _ = t => t,
    _t,
    _t2,
    _t3,
    _t4,
    _t5,
    _t6,
    _t7,
    _t8,
    _t9;

const _excluded = ["min", "max", "value", "step", "onChange", "name", "id", "className", "disabled"];
import React, { forwardRef, useState } from 'react';
import isFunction from 'lodash/isFunction';
import styled, { css } from 'styled-components';
import { reset, space, typography, width } from '@looker/design-tokens';

const getValueAsNumber = (value, defaultValue) => {
  if (typeof value === 'number') {
    return value;
  }

  const numericValue = parseFloat(value);

  if (isNaN(numericValue)) {
    console.error('value prop in Slider is not numeric');
    return defaultValue;
  }

  return numericValue;
};

const SliderInternal = forwardRef((_ref, ref) => {
  let {
    min = 0,
    max = 10,
    value = 0,
    step,
    onChange,
    name,
    id,
    className,
    disabled
  } = _ref,
      restProps = _objectWithoutProperties(_ref, _excluded);

  const numericValue = getValueAsNumber(value, min);
  const [isFocused, setIsFocused] = useState(false);
  const [internalValue, setInternalValue] = useState(numericValue);

  if (min > max) {
    console.warn(`Unable to render <Slider /> because the 'min' prop was set greater than 'max' value. MIN: ${min}, MAX: ${max}`);
    return null;
  }

  const boundSliderValue = v => Math.min(Math.max(v, min), max);

  const displayValue = isFunction(onChange) ? boundSliderValue(numericValue) : boundSliderValue(internalValue);
  const fillPercent = Math.round((displayValue - min) / (max - min) * 100);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleUnfocus = () => {
    setIsFocused(false);
  };

  const internalChangeHandler = event => {
    const evtValue = event.target.value;
    setInternalValue(parseFloat(evtValue));
  };

  const handleChange = isFunction(onChange) ? onChange : internalChangeHandler;
  return React.createElement("div", {
    className: className,
    "data-testid": "container"
  }, React.createElement(SliderValueWrapper, null, React.createElement(SliderValue, {
    disabled: disabled,
    isFocused: isFocused,
    offsetPercent: fillPercent
  }, displayValue)), React.createElement(SliderTrack, null, React.createElement(SliderFill, {
    offsetPercent: fillPercent,
    disabled: disabled
  }), React.createElement(SliderThumb, {
    isFocused: isFocused,
    offsetPercent: fillPercent,
    disabled: disabled
  })), React.createElement(SliderInput, {
    disabled: disabled,
    id: id,
    isFocused: isFocused,
    max: max,
    min: min,
    name: name,
    onChange: handleChange,
    step: step,
    offsetPercent: fillPercent,
    value: displayValue,
    "aria-labelledby": restProps['aria-labelledby'],
    "aria-describedby": restProps['aria-describedby'],
    "data-testid": "slider-input",
    ref: ref,
    onBlur: handleUnfocus,
    onFocus: handleFocus
  }));
});
const sliderThumbCss = css(_t || (_t = _`
  height: 16px;
  visibility: hidden;
  width: 16px;
`));
const SliderThumb = styled.div.withConfig({
  displayName: "Slider__SliderThumb",
  componentId: "sc-1q2hgcp-0"
})(_t2 || (_t2 = _`
  border-radius: 100%;
  left: ${0};
  position: absolute;
  top: -6px;
  transform: translateX(-50%);
  transition: transform 250ms, box-shadow 250ms;

  ${0}
`), ({
  offsetPercent: _offsetPercent = 0
}) => `${_offsetPercent}%`, ({
  theme: {
    colors
  },
  isFocused,
  disabled
}) => css(_t3 || (_t3 = _`
    background: ${0};
    border: 3px solid ${0};
    height: 16px;
    width: 16px;
    ${0}
    ${0}
  `), colors.field, colors.key, isFocused && 'border-width: 5px;', disabled && `border-color: ${colors.neutral};`));
const SliderInput = styled.input.attrs(() => ({
  type: 'range'
})).withConfig({
  displayName: "Slider__SliderInput",
  componentId: "sc-1q2hgcp-1"
})(_t4 || (_t4 = _`
  background: transparent;
  display: block;
  height: 22px;
  left: 8px;
  margin: 0;
  position: relative;
  -webkit-appearance: none; /* stylelint-disable-line */
  width: calc(100% - 16px);

  &::-webkit-slider-thumb {
    -webkit-appearance: none; /* stylelint-disable-line */
    ${0}
  }

  &::-moz-range-thumb {
    ${0}
  }

  &::-ms-thumb {
    ${0}
  }

  &::-ms-track {
    background: transparent;
    border-color: transparent;
    color: transparent;
    cursor: pointer;
    width: 100%;
  }

  &::-moz-focus-outer {
    border: none;
  }

  &:focus {
    outline: none;
  }
`), sliderThumbCss, sliderThumbCss, sliderThumbCss);
const SliderTrack = styled.div.withConfig({
  displayName: "Slider__SliderTrack",
  componentId: "sc-1q2hgcp-2"
})(_t5 || (_t5 = _`
  background: ${0};
  border-radius: ${0};
  height: 4px;
  left: 16px;
  margin-top: -2px;
  position: absolute;
  top: 50%;
  width: calc(100% - 32px);
`), ({
  theme
}) => theme.colors.ui2, ({
  theme
}) => theme.radii.small);
const SliderFill = styled.div.withConfig({
  displayName: "Slider__SliderFill",
  componentId: "sc-1q2hgcp-3"
})(_t6 || (_t6 = _`
  background: ${0};
  border-radius: ${0};
  height: 100%;
  width: ${0}%;
`), ({
  theme: {
    colors
  },
  disabled
}) => disabled ? colors.neutral : colors.key, ({
  theme
}) => theme.radii.small, ({
  offsetPercent
}) => offsetPercent);
const SliderValue = styled.div.withConfig({
  displayName: "Slider__SliderValue",
  componentId: "sc-1q2hgcp-4"
})(_t7 || (_t7 = _`
  background: ${0};
  border-radius: 1rem;
  color: ${0};
  left: ${0}%;
  padding: 0 0.5rem;
  position: absolute;
  text-align: center;
  transform: translateX(-50%) translateY(-0.9rem);
  user-select: none;
`), ({
  theme,
  isFocused
}) => isFocused && theme.colors.keyAccent, ({
  theme: {
    colors
  },
  disabled
}) => disabled ? colors.neutral : colors.key, ({
  offsetPercent
}) => offsetPercent);
const SliderValueWrapper = styled.div.withConfig({
  displayName: "Slider__SliderValueWrapper",
  componentId: "sc-1q2hgcp-5"
})(_t8 || (_t8 = _`
  margin: 0 auto;
  position: relative;
  width: calc(100% - 30px);
`));
export const Slider = styled(SliderInternal).attrs(({
  fontSize: _fontSize = 'small',
  lineHeight: _lineHeight = 'xsmall',
  mt: _mt = 'medium',
  width: _width = '100%'
}) => ({
  fontSize: _fontSize,
  lineHeight: _lineHeight,
  mt: _mt,
  width: _width
})).withConfig({
  displayName: "Slider",
  componentId: "sc-1q2hgcp-6"
})(_t9 || (_t9 = _`
  ${0}
  ${0}
  ${0}
  ${0}
  position: relative;
`), reset, space, width, typography);
SliderInternal.displayName = 'Slider';
//# sourceMappingURL=Slider.js.map