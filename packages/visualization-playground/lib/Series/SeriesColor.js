import _extends from "@babel/runtime/helpers/extends";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
const _excluded = ["chartType", "series", "onSeriesChange"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

import React from 'react';
import has from 'lodash/has';
import { FieldColor } from '@looker/components';
const renderFor = ['area', 'bar', 'column', 'line', 'pie', 'scatter', 'sparkline', 'single_value'];
export const SeriesColor = props => {
  const {
    chartType,
    series,
    onSeriesChange
  } = props,
        restProps = _objectWithoutProperties(props, _excluded);

  if (!renderFor.includes(chartType) && !has(series, 'color')) {
    return null;
  }

  const handleChange = e => {
    const draft = _objectSpread(_objectSpread({}, series), {}, {
      color: e.target.value
    });

    onSeriesChange(draft);
  };

  return React.createElement(FieldColor, _extends({
    label: "Color",
    onChange: handleChange,
    value: series.color
  }, restProps));
};
//# sourceMappingURL=SeriesColor.js.map