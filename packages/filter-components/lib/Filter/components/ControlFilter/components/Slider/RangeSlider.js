import _defineProperty from "@babel/runtime/helpers/defineProperty";

let _ = t => t,
    _t;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

import React from 'react';
import styled from 'styled-components';
import isNumber from 'lodash/isNumber';
import { RangeSlider as RangeSliderComponent } from '@looker/components';
export const RangeSlider = ({
  value,
  options,
  onChange,
  name
}) => {
  const bounds = _objectSpread({
    min: 0,
    max: 100
  }, options || {});

  const handleOnChange = v => {
    onChange({
      min: v[0],
      max: v[1]
    });
  };

  return React.createElement(RangeSliderWrapper, null, React.createElement(RangeSliderComponent, {
    max: bounds.max,
    min: bounds.min,
    value: [isNumber(value.min) ? value.min : bounds.min, isNumber(value.max) ? value.max : bounds.max],
    onChange: handleOnChange,
    name: name
  }));
};
const RangeSliderWrapper = styled.div.withConfig({
  displayName: "RangeSlider__RangeSliderWrapper",
  componentId: "sc-9im42e-0"
})(_t || (_t = _`
  font-size: ${0};
  min-width: 150px;
  padding: 0 ${0};
  width: 100%;
`), ({
  theme
}) => theme.fontSizes.small, ({
  theme
}) => theme.space.small);
//# sourceMappingURL=RangeSlider.js.map