import _defineProperty from "@babel/runtime/helpers/defineProperty";
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

import React from 'react';
import { DataProvider, BarSeries, XYChart, BarStack, BarGroup } from '@visx/xychart';
import { DEFAULT_HEIGHT, VisWrapper } from '@looker/visualizations-adapters';
import { XYLegend } from '../XYLegend';
import isArray from 'lodash/isArray';
import get from 'lodash/get';
import compact from 'lodash/compact';
import { concatDimensions, getX, getY, getYAxisRange, useAxis, useChartTheme, isValidChartData } from '../utils';
import { XYTooltip } from '../XYTooltip';
import { Grid } from '../Grid';
export const Column = ({
  data,
  config,
  height: _height = DEFAULT_HEIGHT,
  width,
  fields
}) => {
  const {
    positioning,
    series: seriesList,
    legend
  } = config;

  const formattedData = concatDimensions(data, fields);
  const {
    XAxis,
    YAxis,
    chartMargin
  } = useAxis({
    config,
    data: formattedData,
    fields
  });
  const chartTheme = useChartTheme(seriesList);

  if (!isValidChartData(data, fields)) {
    return null;
  }
  const renderedColumns = compact(fields.measures.map((measure, i) => {
    const series = isArray(seriesList) ? get(config, ['series', i]) : get(config, ['series', measure.name]);
    if (!series.visible) return undefined;
    return React.createElement(BarSeries, {
      key: i,
      dataKey: measure.name,
      data: formattedData,
      xAccessor: d => getX(d),
      yAccessor: d => getY(d, i)
    });
  }));
  const domain = positioning === 'percent' ? [0, 1] : getYAxisRange({
    config,
    data: formattedData,
    fields
  });
  const Y_SCALE = _objectSpread({
    type: 'linear'
  }, domain && {
    domain,
    zero: false
  });
  return React.createElement(DataProvider
  , {
    xScale: {
      type: 'band',
      paddingInner: 0.2
    },
    yScale: Y_SCALE,
    theme: chartTheme
  }, React.createElement(VisWrapper, {
    legend: legend
  }, React.createElement(XYChart, {
    margin: chartMargin,
    width: width,
    height: _height
  }, React.createElement(XAxis, null), React.createElement(YAxis, null), React.createElement(Grid, {
    config: config
  }), React.createElement(XYTooltip, {
    config: config,
    data: formattedData,
    fields: fields,
    showDatumGlyph: false,
    snapToDatum: false
  }), positioning === 'stacked' || positioning === 'percent' ? React.createElement(BarStack, {
    offset: positioning === 'percent' ? 'expand' : 'none'
  }, renderedColumns) : React.createElement(BarGroup, null, renderedColumns)), React.createElement(XYLegend, {
    chartWidth: width,
    config: config,
    fields: fields
  })));
};
//# sourceMappingURL=Column.js.map