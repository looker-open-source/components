import _defineProperty from "@babel/runtime/helpers/defineProperty";
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

import React, { Fragment } from 'react';
import { DataProvider, GlyphSeries, XYChart } from '@visx/xychart';
import { DEFAULT_HEIGHT, VisWrapper, hexToRgba, getSeriesMax, getSeriesMin } from '@looker/visualizations-adapters';
import { XYLegend } from '../XYLegend';
import isArray from 'lodash/isArray';
import get from 'lodash/get';
import { concatDimensions, getX, getY, getYAxisRange, useChartTheme, useAxis, isValidChartData, getRelativeGlyphSize, getDefaultGlyphSize, dimensionToDate, isDateQuery } from '../utils';
import { XYTooltip } from '../XYTooltip';
import { Glyph } from '../Glyph';
import { Grid } from '../Grid';
export const Scatter = ({
  data,
  config,
  height: _height = DEFAULT_HEIGHT,
  width,
  fields
}) => {
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
  const plots = fields.measures.map((measure, i) => {
    const series = isArray(config.series) ? get(config, ['series', i]) : get(config, ['series', measure.name]);
    if (!series.visible) return React.createElement(Fragment, {
      key: i
    });
    const {
      style,
      shape,
      size_by,
      line_width = 1
    } = series;
    const id = `marker-${shape}-${i}`;
    const sizeByMax = size_by ? getSeriesMax(size_by, data) : 0;
    const sizeByMin = size_by ? getSeriesMin(size_by, data) : 0;
    return React.createElement(Fragment, {
      key: id
    }, React.createElement(GlyphSeries, {
      key: id,
      dataKey: measure.name,
      data: dimensionToDate(formattedData, fields),
      xAccessor: d => getX(d),
      yAccessor: d => getY(d, i),
      size: sizeProps => {
        if (size_by && sizeByMax - sizeByMin > 0) {
          return getRelativeGlyphSize(sizeProps[size_by], sizeByMin, sizeByMax);
        } else {
          return getDefaultGlyphSize(line_width);
        }
      },
      renderGlyph: ({
        size,
        color,
        x,
        y
      }) => {
        return React.createElement(Glyph, {
          series: series,
          top: y,
          left: x,
          size: size,
          fill: hexToRgba(color, 0.6),
          stroke: style === 'filled' ? false : undefined
        });
      }
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
  }), plots), React.createElement(XYLegend, {
    chartWidth: width,
    config: config,
    fields: fields
  })));
};
//# sourceMappingURL=Scatter.js.map