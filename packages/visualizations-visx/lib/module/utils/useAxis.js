import _extends from "@babel/runtime/helpers/extends";

import pick from 'lodash/pick';
import React, { useContext } from 'react';
import { ThemeContext as VisxThemeContext } from '@visx/xychart';
import { useMeasuredText, pickLongestLabel, getVisibleMeasureNames, DEFAULT_MARGIN } from '@looker/visualizations-adapters';
import { MAX_TICK_LABEL_LENGTH, XAxis, XAxisDate, YAxis } from '../Axis';
import { formatDateLabel, getYAxisRange, isDateQuery } from '.';
import { getYAxisFormat, getXAxisFormat } from '../utils';
const TICK_LABEL_TO_AXIS_LABEL_SPACER = 10;

export const useAxis = ({
  config,
  data,
  fields
}) => {
  var _config$x_axis, _config$x_axis$, _config$y_axis, _config$y_axis$;
  const visxTheme = useContext(VisxThemeContext);

  const xAxisLabels = data.map(datum => formatDateLabel({
    dateString: datum.dimension,
    fields
  }).slice(0, MAX_TICK_LABEL_LENGTH));
  const xAxisLongestLabel = pickLongestLabel(xAxisLabels);
  const {
    height: xAxisLongestLabelHeight,
    width: xAxisLongestLabelWidth
  } = useMeasuredText(xAxisLongestLabel, {
    fontFamily: visxTheme.axisStyles.x.bottom.tickLabel.fontFamily || 'Roboto',
    fontSize: visxTheme.axisStyles.x.bottom.tickLabel.fontSize || '1rem'
  });
  const averageLabelLength = xAxisLabels.join('').length / xAxisLabels.length;
  const renderXAxisTicks = config === null || config === void 0 ? void 0 : (_config$x_axis = config.x_axis) === null || _config$x_axis === void 0 ? void 0 : (_config$x_axis$ = _config$x_axis[0]) === null || _config$x_axis$ === void 0 ? void 0 : _config$x_axis$.values;
  const hasRotatedXAxisLabels = renderXAxisTicks && averageLabelLength > 10;
  const angledLabelHypotenuse = Math.sqrt(xAxisLongestLabelWidth * xAxisLongestLabelWidth / 2) + TICK_LABEL_TO_AXIS_LABEL_SPACER;
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
  const xAxisValueFormat = getXAxisFormat(fields);
  const XAxisWrapped = () => {
    var _config$x_axis2, _config$x_axis2$, _config$x_axis3, _config$x_axis3$;
    return isDateQuery(fields) && config.type !== 'column' ? React.createElement(XAxisDate, {
      label: (config === null || config === void 0 ? void 0 : (_config$x_axis2 = config.x_axis) === null || _config$x_axis2 === void 0 ? void 0 : (_config$x_axis2$ = _config$x_axis2[0]) === null || _config$x_axis2$ === void 0 ? void 0 : _config$x_axis2$.label) || undefined,
      showTicks: renderXAxisTicks
    }) : React.createElement(XAxis, _extends({
      showTicks: renderXAxisTicks,
      fields: fields,
      label: (config === null || config === void 0 ? void 0 : (_config$x_axis3 = config.x_axis) === null || _config$x_axis3 === void 0 ? void 0 : (_config$x_axis3$ = _config$x_axis3[0]) === null || _config$x_axis3$ === void 0 ? void 0 : _config$x_axis3$.label) || undefined,
      valueFormat: xAxisValueFormat
    }, X_AXIS_STYLE));
  };
  const renderYAxisTicks = config === null || config === void 0 ? void 0 : (_config$y_axis = config.y_axis) === null || _config$y_axis === void 0 ? void 0 : (_config$y_axis$ = _config$y_axis[0]) === null || _config$y_axis$ === void 0 ? void 0 : _config$y_axis$.values;

  let yAxisLongestLabel;
  if (fields.measures.every(measure => measure.is_numeric)) {
    const dataRangeStrings = getYAxisRange({
      config,
      data,
      fields
    }).map(d => String(Math.round(d)));
    yAxisLongestLabel = pickLongestLabel(dataRangeStrings);
  } else {
    const measureNames = getVisibleMeasureNames(fields, config);
    const measureValues = data.flatMap(d => {
      const datumMeasureValues = Object.values(pick(d, measureNames));
      return datumMeasureValues.map(value => String(value));
    });
    yAxisLongestLabel = pickLongestLabel(measureValues);
  }
  const {
    width: yAxisLongestLabelWidth
  } = useMeasuredText(yAxisLongestLabel, {
    fontFamily: visxTheme.axisStyles.y.left.tickLabel.fontFamily || 'Roboto',
    fontSize: visxTheme.axisStyles.y.left.tickLabel.fontSize || '1rem'
  });

  const yAxisLabelDx = renderYAxisTicks ? -yAxisLongestLabelWidth - 10 : -10;
  const yAxisValueFormat = getYAxisFormat(config);
  const YAxisWrapped = () => {
    var _config$y_axis2, _config$y_axis2$;
    return React.createElement(YAxis, {
      showTicks: renderYAxisTicks,
      fields: fields,
      label: (config === null || config === void 0 ? void 0 : (_config$y_axis2 = config.y_axis) === null || _config$y_axis2 === void 0 ? void 0 : (_config$y_axis2$ = _config$y_axis2[0]) === null || _config$y_axis2$ === void 0 ? void 0 : _config$y_axis2$.label) || undefined,
      labelDx: yAxisLabelDx,
      valueFormat: yAxisValueFormat
    });
  };
  const yAxisLabelWidth = renderYAxisTicks ? yAxisLongestLabelWidth + DEFAULT_MARGIN : DEFAULT_MARGIN;
  const chartMarginBottom = hasRotatedXAxisLabels ? angledLabelHypotenuse + DEFAULT_MARGIN : DEFAULT_MARGIN;
  const chartMarginLeft = hasRotatedXAxisLabels ? Math.max(angledLabelHypotenuse, yAxisLabelWidth) : yAxisLabelWidth;
  const chartMargin = {
    top: 0,
    right: 0,
    bottom: chartMarginBottom,
    left: chartMarginLeft
  };
  return {
    XAxis: XAxisWrapped,
    YAxis: YAxisWrapped,
    chartMargin
  };
};
//# sourceMappingURL=useAxis.js.map