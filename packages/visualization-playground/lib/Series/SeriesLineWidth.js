import _extends from "@babel/runtime/helpers/extends";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
const _excluded = ["chartType", "series", "onSeriesChange"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

import React from 'react';
import { FieldSlider } from '@looker/components';
import has from 'lodash/has';
const renderFor = ['area', 'line', 'scatter', 'sparkline'];
export const SeriesLineWidth = props => {
  const {
    chartType,
    series,
    onSeriesChange
  } = props,
        restProps = _objectWithoutProperties(props, _excluded);

  if (!renderFor.includes(chartType) && !has(series, 'line_width')) {
    return null;
  }

  const handleChange = e => {
    const draft = _objectSpread(_objectSpread({}, series), {}, {
      line_width: parseInt(e.target.value)
    });

    onSeriesChange(draft);
  };

  return React.createElement(FieldSlider, _extends({
    label: chartType === 'scatter' ? 'Point Border Width' : 'Line Width',
    min: 1,
    max: 15,
    onChange: handleChange,
    value: series.line_width
  }, restProps));
};
//# sourceMappingURL=SeriesLineWidth.js.map