import _defineProperty from "@babel/runtime/helpers/defineProperty";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

import React from 'react';
import has from 'lodash/has';
import { FieldSelect } from '@looker/components';
const renderFor = ['scatter'];
export const SeriesSizeBy = props => {
  const {
    chartType,
    fields,
    series,
    onSeriesChange
  } = props;

  if (!renderFor.includes(chartType) && !has(series, 'size_by')) {
    return null;
  }

  const handleChange = value => {
    const draft = _objectSpread(_objectSpread({}, series), {}, {
      size_by: value
    });

    onSeriesChange(draft);
  };

  const sizeByOptions = ['none', ...fields.measures.map(m => m.name)];
  return React.createElement(FieldSelect, {
    label: "Size By",
    onChange: handleChange,
    options: sizeByOptions.map(s => ({
      value: s
    })),
    value: series.size_by || 'none'
  });
};
//# sourceMappingURL=SeriesSizeBy.js.map