import _defineProperty from "@babel/runtime/helpers/defineProperty";
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

import React, { Fragment } from 'react';
import { useTheme } from 'styled-components';
import { DataProvider, LineSeries, XYChart } from '@visx/xychart';
import { DEFAULT_HEIGHT, VisWrapper } from '@looker/visualizations-adapters';
import { XYLegend } from '../XYLegend';
import isArray from 'lodash/isArray';
import get from 'lodash/get';
import { concatDimensions, dimensionToDate, getX, getY, getYAxisRange, getSeriesColor, useAxis, useChartTheme, isValidChartData, isDateQuery } from '../utils';
import { XYTooltip } from '../XYTooltip';
import { Marker } from '../Marker';
import { Grid } from '../Grid';
export const Line = ({
  data,
  config,
  height: _height = DEFAULT_HEIGHT,
  width,
  fields
}) => {
  const theme = useTheme();

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
  const chartTheme = useChartTheme(config.series);

  if (!isValidChartData(data, fields)) {
    return null;
  }
  const lines = fields.measures.map((measure, i) => {
    const series = isArray(config.series) ? get(config, ['series', i]) : get(config, ['series', measure.name]);
    if (!(series !== null && series !== void 0 && series.visible)) return React.createElement(Fragment, {
      key: i
    });
    const {
      style,
      line_width,
      shape
    } = series;
    const id = `marker-${shape}-${i}`;
    return React.createElement(Fragment, {
      key: id
    }, style !== 'none' && React.createElement(Marker, {
      series: series,
      id: id
    }), React.createElement(LineSeries, {
      key: id,
      dataKey: measure.name,
      data: dimensionToDate(formattedData, fields),
      stroke: getSeriesColor(series, theme),
      strokeWidth: line_width,
      xAccessor: d => getX(d),
      yAccessor: d => getY(d, i),
      markerMid: `url(#${id})`,
      markerStart: `url(#${id})`,
      markerEnd: `url(#${id})`
    }));
  });
  const domain = getYAxisRange({
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
      type: isDateQuery(fields) ? 'time' : 'band'
    },
    yScale: Y_SCALE,
    theme: chartTheme
  }, React.createElement(VisWrapper, {
    legend: config.legend
  }, React.createElement(XYChart, {
    margin: chartMargin,
    width: width,
    height: _height
  }, React.createElement(XAxis, null), React.createElement(YAxis, null), React.createElement(Grid, {
    config: config
  }), React.createElement(XYTooltip, {
    config: config,
    data: formattedData,
    fields: fields
  }), lines), React.createElement(XYLegend, {
    chartWidth: width,
    config: config,
    fields: fields
  })));
};
//# sourceMappingURL=Line.js.map