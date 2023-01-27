

import React from 'react';
import { useTheme } from 'styled-components';
import { Group } from '@visx/group';
import { DEFAULT_HEIGHT, getDataRange } from '@looker/visualizations-adapters';
import { scaleLinear } from '@visx/scale';
import { Point } from '@visx/point';
import { Line, LineRadial } from '@visx/shape';
const isOdd = num => {
  return num % 2;
};
const DEGREES = 360;
const genAngles = length => {
  const angleOffset = isOdd(length) ? DEGREES / length / 2 : 0;
  return [...new Array(length + 1)].map((_, i) => ({
    angle: i * (DEGREES / length) - angleOffset
  }));
};
const genPoints = (length, radius) => {
  const step = Math.PI * 2 / length;
  return [...new Array(length)].map((_, i) => ({
    x: radius * Math.sin(i * step),
    y: radius * Math.cos(i * step)
  }));
};
function genPolygonPoints(dataArray, scale, getValue) {
  const step = Math.PI * 2 / dataArray.length;
  const points = new Array(dataArray.length).fill({
    x: 0,
    y: 0
  });
  const pointString = new Array(dataArray.length + 1).fill('').reduce((res, _, i) => {
    if (i > dataArray.length) return res;
    const xVal = scale(getValue(dataArray[i - 1])) * Math.sin(i * step);
    const yVal = scale(getValue(dataArray[i - 1])) * Math.cos(i * step);
    points[i - 1] = {
      x: xVal,
      y: yVal
    };
    res += `${xVal},${yVal} `;
    return res;
  });
  return {
    points,
    pointString
  };
}
const defaultMargin = {
  top: 40,
  left: 40,
  right: 40,
  bottom: 40
};

export const Radar = ({
  height: _height = DEFAULT_HEIGHT,
  width: _width = DEFAULT_HEIGHT,
  levels: _levels = 5,
  margin: _margin = defaultMargin,
  fields,
  data,
  config
}) => {
  var _y_axis$, _y_axis$$range;
  const theme = useTheme();
  const [_, dataMax] = getDataRange({
    config,
    data,
    fields
  });
  const {
    series = {},
    y_axis = []
  } = config;
  const layoutMax = Math.max(_width, _height);
  const xMax = layoutMax - _margin.left - _margin.right;
  const yMax = layoutMax - _margin.top - _margin.bottom;
  const radius = Math.min(xMax, yMax) / 2;
  const radialScale = scaleLinear({
    range: [0, Math.PI * 2],
    domain: [DEGREES, 0]
  });
  const yScaleMax = (y_axis === null || y_axis === void 0 ? void 0 : (_y_axis$ = y_axis[0]) === null || _y_axis$ === void 0 ? void 0 : (_y_axis$$range = _y_axis$.range) === null || _y_axis$$range === void 0 ? void 0 : _y_axis$$range[1]) || 'auto';
  const yScale = scaleLinear({
    range: [0, radius],
    domain: [0, yScaleMax === 'auto' ? dataMax : yScaleMax]
  });
  const webs = genAngles(data.length);
  const points = genPoints(data.length, radius);
  const polygonPoints = fields.measures.map(m => genPolygonPoints(data, d => {
    var _yScale;
    return (_yScale = yScale(d)) !== null && _yScale !== void 0 ? _yScale : 0;
  }, d => d[m.name]));
  const zeroPoint = new Point({
    x: 0,
    y: 0
  });
  return layoutMax < 10 ? null : React.createElement("svg", {
    width: layoutMax,
    height: layoutMax
  }, React.createElement(Group, {
    top: layoutMax / 2 - _margin.top,
    left: layoutMax / 2
  }, y_axis[0].gridlines ? [...new Array(_levels)].map((_, i) => React.createElement(LineRadial, {
    key: `web-${i}`,
    data: webs,
    angle: d => {
      var _radialScale;
      return (_radialScale = radialScale(d.angle)) !== null && _radialScale !== void 0 ? _radialScale : 0;
    },
    radius: (i + 1) * radius / _levels,
    fill: "none",
    stroke: theme.colors.ui2,
    strokeWidth: 2,
    strokeOpacity: 0.8,
    strokeLinecap: "round"
  })) : null, [...new Array(data.length)].map((_, i) => React.createElement(Line, {
    key: `radar-line-${i}`,
    from: zeroPoint,
    to: points[i],
    stroke: theme.colors.ui2
  })), fields.measures.map((m, i) => {
    const {
      color,
      visible
    } = Array.isArray(series) ? series[i] : series[m.name];
    if (!visible) {
      return null;
    }
    return React.createElement(React.Fragment, null, React.createElement("polygon", {
      points: polygonPoints[i].pointString,
      fill: color,
      fillOpacity: 0.3,
      stroke: color,
      strokeWidth: 1
    }), polygonPoints[i].points.map((point, k) => React.createElement("circle", {
      key: `radar-point-${k}`,
      cx: point.x,
      cy: point.y,
      r: 4,
      fill: color
    })));
  })));
};
//# sourceMappingURL=Radar.js.map