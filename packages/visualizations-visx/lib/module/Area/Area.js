import _defineProperty from "@babel/runtime/helpers/defineProperty";
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

import React, { Fragment } from 'react';
import { DataProvider, AreaSeries, XYChart, AreaStack } from '@visx/xychart';
import { DEFAULT_HEIGHT, VisWrapper } from '@looker/visualizations-adapters';
import { XYLegend } from '../XYLegend';
import isArray from 'lodash/isArray';
import get from 'lodash/get';
import { concatDimensions, getX, getY, getYAxisRange, useAxis, useChartTheme, isValidChartData, isDateQuery, dimensionToDate } from '../utils';
import { XYTooltip } from '../XYTooltip';
import { Marker } from '../Marker';
import { Grid } from '../Grid';

const NoopComponent = ({
  children
}) => React.createElement(React.Fragment, null, children);
export const Area = ({
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
  const areas = fields.measures.map((measure, i) => {
    const series = isArray(seriesList) ? get(config, ['series', i]) : get(config, ['series', measure.name]);
    if (!series.visible) return React.createElement(Fragment, {
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
    }), React.createElement(AreaSeries, {
      key: id,
      dataKey: measure.name,
      data: dimensionToDate(formattedData, fields),
      lineProps: {
        strokeWidth: line_width,
        markerMid: `url(#${id})`,
        markerStart: `url(#${id})`,
        markerEnd: `url(#${id})`
      },
      fillOpacity: 0.4,
      xAccessor: d => getX(d),
      yAccessor: d => getY(d, i)
    }));
  });
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
  const PositioningWrapper = positioning === 'stacked' || positioning === 'percent' ? AreaStack : NoopComponent;
  return React.createElement(DataProvider
  , {
    xScale: {
      type: isDateQuery(fields) ? 'time' : 'band'
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
    fields: fields
  }), React.createElement(PositioningWrapper, {
    offset: positioning === 'percent' ? 'expand' : 'none'
  }, areas)), React.createElement(XYLegend, {
    chartWidth: width,
    config: config,
    fields: fields
  })));
};
//# sourceMappingURL=Area.js.map