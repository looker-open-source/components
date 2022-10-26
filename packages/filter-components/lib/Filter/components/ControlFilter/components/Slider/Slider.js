import _defineProperty from "@babel/runtime/helpers/defineProperty";

let _ = t => t,
    _t;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

import React from 'react';
import styled from 'styled-components';
import { Slider as SliderComponent } from '@looker/components';
export const Slider = ({
  onChange,
  value,
  options
}) => {
  const optionsWithDefaults = _objectSpread({
    min: 0,
    max: 100
  }, options);

  const handleChange = e => {
    const {
      value
    } = e.currentTarget;
    onChange(parseInt(value, 10));
  };

  return React.createElement(SliderWrapper, null, React.createElement(SliderComponent, {
    min: optionsWithDefaults.min,
    max: optionsWithDefaults.max,
    value: value,
    onChange: handleChange
  }));
};
const SliderWrapper = styled.div.withConfig({
  displayName: "Slider__SliderWrapper",
  componentId: "sc-15v8199-0"
})(_t || (_t = _`
  font-size: ${0};
  width: 100%;
`), ({
  theme
}) => theme.fontSizes.small);
//# sourceMappingURL=Slider.js.map