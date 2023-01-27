import _defineProperty from "@babel/runtime/helpers/defineProperty";
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
import React from 'react';
import has from 'lodash/has';
import { FieldToggleSwitch } from '@looker/components';

const renderFor = ['area', 'bar', 'column', 'line', 'scatter', 'table'];
export const SeriesVisible = props => {
  const {
    chartType,
    series,
    onSeriesChange
  } = props;
  if (!renderFor.includes(chartType) && !has(series, 'visible')) {
    return null;
  }
  const handleChange = e => {
    const draft = _objectSpread(_objectSpread({}, series), {}, {
      visible: e.target.checked
    });
    onSeriesChange(draft);
  };
  return React.createElement(FieldToggleSwitch, {
    label: "Visible",
    onChange: handleChange,
    on: !!series.visible
  });
};
//# sourceMappingURL=SeriesVisible.js.map