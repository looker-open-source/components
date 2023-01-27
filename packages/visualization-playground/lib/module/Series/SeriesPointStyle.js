import _defineProperty from "@babel/runtime/helpers/defineProperty";
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
import React from 'react';
import { FieldSelect } from '@looker/components';
import has from 'lodash/has';

const renderFor = ['area', 'line', 'scatter'];
const commonStyles = ['filled', 'outline'];
const lineStyles = ['none'];
export const SeriesPointStyle = props => {
  const {
    chartType,
    series,
    onSeriesChange
  } = props;
  if (!renderFor.includes(chartType) && !has(series, 'style')) {
    return null;
  }
  const handleChange = value => {
    const draft = _objectSpread(_objectSpread({}, series), {}, {
      style: value
    });
    onSeriesChange(draft);
  };
  const styleOptions = [...(chartType !== 'scatter' ? lineStyles : []), ...commonStyles];
  return React.createElement(FieldSelect, {
    label: "Point Style",
    onChange: handleChange,
    options: styleOptions.map(s => ({
      value: s
    })),
    value: series.style
  });
};
//# sourceMappingURL=SeriesPointStyle.js.map