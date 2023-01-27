import _extends from "@babel/runtime/helpers/extends";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

import { Axis, ThemeContext as VisxThemeContext } from '@visx/xychart';
import React, { useContext } from 'react';
import { Tick } from './Tick';
export const YAxis = ({
  showTicks,
  label,
  labelDx,
  valueFormat,
  fields
}) => {
  const visxTheme = useContext(VisxThemeContext);
  return React.createElement(Axis, {
    hideTicks: !showTicks,
    label: label,
    labelOffset: showTicks ? undefined : 0,
    labelProps: _objectSpread(_objectSpread({}, visxTheme.axisStyles.y.left.axisLabel), {}, {
      dx: labelDx
    }),
    tickComponent: tickProps => showTicks ? React.createElement(Tick, _extends({
      fields: fields,
      valueFormat: valueFormat
    }, tickProps)) : null,
    orientation: "left"
  });
};
//# sourceMappingURL=YAxis.js.map