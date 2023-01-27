import _extends from "@babel/runtime/helpers/extends";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

import React, { useContext } from 'react';
import { DataProvider, BarSeries, XYChart, BarStack, BarGroup, ThemeContext as VisxThemeContext } from '@visx/xychart';
import { DEFAULT_HEIGHT, VisWrapper, pickLongestLabel, useMeasuredText, getVisibleMeasureNames, DEFAULT_MARGIN } from '@looker/visualizations-adapters';
import { XYLegend } from '../XYLegend';
import isArray from 'lodash/isArray';
import get from 'lodash/get';
import compact from 'lodash/compact';
import pick from 'lodash/pick';
import { XAxis, YAxis } from '../Axis';
import { concatDimensions, getX, getY, getYAxisRange, useChartTheme, isValidChartData, formatDateLabel, getXAxisFormat, getYAxisFormat } from '../utils';
import { XYTooltip } from '../XYTooltip';
import { Grid } from '../Grid';
import numeral from 'numeral';
export const Bar = ({
  data,
  config,
  height: _height = DEFAULT_HEIGHT,
  width,
  fields
}) => {
  var _config$x_axis, _config$y_axis;
  const {
    positioning,
    series: seriesList,
    legend
  } = config;

  const formattedData = concatDimensions(data, fields);
  const chartTheme = useChartTheme(seriesList);
  const visxTheme = useContext(VisxThemeContext);
  const yAxisLabels = formattedData.map(datum => formatDateLabel({
    dateString: datum.dimension,
    fields
  }));
  const yAxisLongestLabel = pickLongestLabel(yAxisLabels);
  const {
    width: yAxisLongestLabelWidth
  } = useMeasuredText(yAxisLongestLabel, {
    fontFamily: visxTheme.axisStyles.x.bottom.tickLabel.fontFamily || 'Roboto',
    fontSize: visxTheme.axisStyles.x.bottom.tickLabel.fontSize || '1rem'
  });

  const yAxisConfig = config === null || config === void 0 ? void 0 : (_config$x_axis = config.x_axis) === null || _config$x_axis === void 0 ? void 0 : _config$x_axis[0];
  const yAxisValueFormat = getXAxisFormat(fields);

  const yAxisLabelDx = yAxisConfig !== null && yAxisConfig !== void 0 && yAxisConfig.values ? -yAxisLongestLabelWidth - 10 : -10;

  const xAxisConfig = config === null || config === void 0 ? void 0 : (_config$y_axis = config.y_axis) === null || _config$y_axis === void 0 ? void 0 : _config$y_axis[0];
  const xAxisValueFormat = getYAxisFormat(config);

  const measureNames = getVisibleMeasureNames(fields, config);
  const measureValues = data.flatMap(d => {
    const datumMeasureValues = Object.values(pick(d, measureNames));
    return datumMeasureValues.map(value => numeral(value).format(xAxisValueFormat));
  });
  const xAxisLongestLabel = pickLongestLabel(measureValues);
  const {
    height: xAxisLongestLabelHeight,
    width: xAxisLongestLabelWidth
  } = useMeasuredText(xAxisLongestLabel, {
    fontFamily: visxTheme.axisStyles.x.bottom.tickLabel.fontFamily || 'Roboto',
    fontSize: visxTheme.axisStyles.x.bottom.tickLabel.fontSize || '1rem'
  });
  const averageMeasureValueLength = measureValues.join('').length / measureValues.length;
  const hasRotatedXAxisLabels = (xAxisConfig === null || xAxisConfig === void 0 ? void 0 : xAxisConfig.values) && averageMeasureValueLength > 10;
  const angledLabelHypotenuse = Math.sqrt(xAxisLongestLabelWidth * xAxisLongestLabelWidth / 2);
  const X_AXIS_STYLE = hasRotatedXAxisLabels ? {
    labelDy: angledLabelHypotenuse,
    tickAngle: -45,
    tickSpace: xAxisLongestLabelHeight * 2,
    tickTextAnchor: 'end'
  } : {
    labelDy: 0,
    tickAngle: 0,
    tickSpace: xAxisLongestLabelWidth + DEFAULT_MARGIN,
    tickTextAnchor: 'inherit'
  };

  if (!isValidChartData(data, fields)) {
    return null;
  }
  const domain = positioning === 'percent' ? [0, 1] : getYAxisRange({
    config,
    data: formattedData,
    fields
  });
  const X_SCALE = _objectSpread({
    type: 'linear'
  }, domain && {
    domain,
    zero: false
  });
  const chartMarginBottom = hasRotatedXAxisLabels ? angledLabelHypotenuse + DEFAULT_MARGIN : DEFAULT_MARGIN;
  const chartMargin = {
    right: 0,
    top: 0,
    bottom: chartMarginBottom,
    left: yAxisConfig !== null && yAxisConfig !== void 0 && yAxisConfig.values ? yAxisLongestLabelWidth + DEFAULT_MARGIN : DEFAULT_MARGIN
  };
  const renderedBars = compact(fields.measures.map((measure, i) => {
    const series = isArray(seriesList) ? get(config, ['series', i]) : get(config, ['series', measure.name]);
    if (!series.visible) return undefined;
    return React.createElement(BarSeries, {
      key: i,
      dataKey: measure.name,
      data: formattedData,
      xAccessor: d => getY(d, i),
      yAccessor: d => getX(d)
    });
  }));
  return React.createElement(DataProvider
  , {
    xScale: X_SCALE,
    yScale: {
      type: 'band',
      paddingInner: 0.2
    },
    theme: chartTheme
  }, React.createElement(VisWrapper, {
    legend: legend
  }, React.createElement(XYChart, {
    margin: chartMargin,
    width: width,
    height: _height
  }, React.createElement(XAxis, _extends({
    showTicks: xAxisConfig === null || xAxisConfig === void 0 ? void 0 : xAxisConfig.values,
    fields: fields,
    label: (xAxisConfig === null || xAxisConfig === void 0 ? void 0 : xAxisConfig.label) || '',
    valueFormat: xAxisValueFormat
  }, X_AXIS_STYLE)), React.createElement(YAxis, {
    showTicks: yAxisConfig === null || yAxisConfig === void 0 ? void 0 : yAxisConfig.values,
    fields: fields,
    label: (yAxisConfig === null || yAxisConfig === void 0 ? void 0 : yAxisConfig.label) || '',
    labelDx: yAxisLabelDx,
    valueFormat: yAxisValueFormat
  }), React.createElement(Grid, {
    config: config
  }), React.createElement(XYTooltip, {
    config: config,
    data: formattedData,
    fields: fields,
    showDatumGlyph: false,
    snapToDatum: false
  }), positioning === 'stacked' || positioning === 'percent' ? React.createElement(BarStack, {
    offset: positioning === 'percent' ? 'expand' : 'none'
  }, renderedBars) : React.createElement(BarGroup, null, renderedBars)), React.createElement(XYLegend, {
    chartWidth: width,
    config: config,
    fields: fields
  })));
};
//# sourceMappingURL=Bar.js.map