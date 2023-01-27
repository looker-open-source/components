
import React, { useState, useEffect } from 'react';
import { useTheme } from 'styled-components';
import { LinePath } from '@visx/shape';
import { Point } from '@visx/point';
import { useMeasuredElement } from '@looker/components';
import { VisWrapper, isNumeric, DEFAULT_HEIGHT } from '@looker/visualizations-adapters';
import { getSeriesColor } from '../utils';
const chunkByNull = data => data.reduce((chunks, d) => {
  if (d === null) {
    chunks.push([]);
  } else {
    chunks[chunks.length - 1].push(d);
  }
  return chunks;
}, [[]]);
const generatePoints = ({
  data,
  chartDimensions,
  yRange,
  lineWidth
}) => {
  const dataChunks = chunkByNull(data);
  const [yMin, yMax] = yRange;
  const chartPadding = lineWidth / 2;
  const chartWidth = chartDimensions.width - chartPadding * 2;
  const chartHeight = chartDimensions.height - chartPadding * 2;
  const pointSpacing = chartWidth / Math.max(data.length - 1, 1);
  const valueRange = yMax - yMin;
  return dataChunks.map((chunk, chunkId) => {
    const prevChunks = dataChunks.slice(0, chunkId);
    const countFrom = prevChunks.flatMap(c => c).length;
    return chunk.map((d, i) => {
      return new Point({
        x: (i + countFrom + chunkId) * pointSpacing + chartPadding,
        y: chartHeight - (Number(d) - yMin) / valueRange * chartHeight + chartPadding
      });
    });
  });
};
export const Sparkline = ({
  data: _data = [],
  config,
  fields,
  height: _height = DEFAULT_HEIGHT,
  width
}) => {
  var _data$reduce, _config$y_axis, _config$y_axis$;
  const {
    series = {}
  } = config || {};

  const firstMeasure = fields.measures[0];
  const firstSeries = Array.isArray(series) ? series[0] : series[firstMeasure.name || ''];
  const themeContext = useTheme();

  const [wrapperRef, setWrapperRef] = useState(null);
  const [wrapperRect, refreshRect] = useMeasuredElement(wrapperRef);
  useEffect(() => {
    refreshRect();
  }, [wrapperRef, refreshRect]);
  const {
    line_width: lineWidth = 3
  } = firstSeries || {};
  const {
    dataSet,
    dataMin,
    dataMax
  } = (_data$reduce = _data === null || _data === void 0 ? void 0 : _data.reduce(({
    dataSet,
    dataMin,
    dataMax
  }, d) => {
    const val = d[firstMeasure.name];
    return {
      dataSet: [...dataSet, val],
      dataMin: isNumeric(val) ? Math.min(dataMin, Number(val)) : dataMin,
      dataMax: isNumeric(val) ? Math.max(dataMax, Number(val)) : dataMax
    };
  }, {
    dataSet: [],
    dataMin: Infinity,
    dataMax: -Infinity
  })) !== null && _data$reduce !== void 0 ? _data$reduce : {};
  const [configMin, configMax] = (config === null || config === void 0 ? void 0 : (_config$y_axis = config.y_axis) === null || _config$y_axis === void 0 ? void 0 : (_config$y_axis$ = _config$y_axis[0]) === null || _config$y_axis$ === void 0 ? void 0 : _config$y_axis$.range) || [];
  const chartPoints = generatePoints({
    chartDimensions: {
      width: width || wrapperRect.width,
      height: _height
    },
    data: dataSet || [],
    lineWidth: lineWidth || 1,
    yRange: [isNumeric(configMin) ? configMin : dataMin, isNumeric(configMax) ? configMax : dataMax]
  });
  if (!_data || _data.length === 0) {
    return null;
  }
  return React.createElement(VisWrapper, {
    ref: setWrapperRef
  }, React.createElement("svg", {
    width: width,
    height: _height,
    "data-testid": "sparkline-chart"
  }, chartPoints.length && chartPoints.map((chunk, i) => {
    return React.createElement(LinePath, {
      key: i,
      data: chunk,
      stroke: getSeriesColor(firstSeries, themeContext),
      strokeWidth: lineWidth,
      x: d => d.x || 0,
      y: d => d.y || 0
    });
  })));
};
//# sourceMappingURL=Sparkline.js.map