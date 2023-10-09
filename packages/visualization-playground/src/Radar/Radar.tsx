/*

 MIT License

 Copyright (c) 2022 Looker Data Sciences, Inc.

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in all
 copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 SOFTWARE.

 */

import React from 'react';
import { useTheme } from 'styled-components';
import { Group } from '@visx/group';
import type {
  Fields,
  SDKRecord,
  CommonCartesianProperties,
} from '@looker/visualizations-adapters';
import { DEFAULT_HEIGHT, getDataRange } from '@looker/visualizations-adapters';
import { scaleLinear } from '@visx/scale';
import { Point } from '@visx/point';
import { Line, LineRadial } from '@visx/shape';

export type RadarProps = {
  width: number;
  height: number;
  margin?: { top: number; right: number; bottom: number; left: number };
  levels?: number;
  fields: Fields;
  data: SDKRecord[];
  config: { type: 'radar' } & CommonCartesianProperties;
};

const isOdd = (num: number) => {
  return num % 2;
};

const DEGREES = 360;

const genAngles = (length: number) => {
  // webbing is offset 1/2 section for odd-lengthed datasets
  const angleOffset = isOdd(length) ? DEGREES / length / 2 : 0;

  return [...new Array(length + 1)].map((_, i) => ({
    angle: i * (DEGREES / length) - angleOffset,
  }));
};

const genPoints = (length: number, radius: number) => {
  const step = (Math.PI * 2) / length;
  return [...new Array(length)].map((_, i) => ({
    x: radius * Math.sin(i * step),
    y: radius * Math.cos(i * step),
  }));
};

function genPolygonPoints<Datum>(
  dataArray: Datum[],
  scale: (n: number) => number,
  getValue: (d: Datum) => number
) {
  const step = (Math.PI * 2) / dataArray.length;
  const points: { x: number; y: number }[] = new Array(dataArray.length).fill({
    x: 0,
    y: 0,
  });

  const pointString: string = new Array(dataArray.length + 1)
    .fill('')
    .reduce((res, _, i) => {
      if (i > dataArray.length) return res;
      const xVal = scale(getValue(dataArray[i - 1])) * Math.sin(i * step);
      const yVal = scale(getValue(dataArray[i - 1])) * Math.cos(i * step);
      points[i - 1] = { x: xVal, y: yVal };
      res += `${xVal},${yVal} `;
      return res;
    });
  return { points, pointString };
}

const defaultMargin = { top: 40, left: 40, right: 40, bottom: 40 };

/*
 * Radar exists as an example of setting up a custom visualization type.
 * Source forked from: https://airbnb.io/visx/radar
 */

export const Radar = ({
  height = DEFAULT_HEIGHT,
  width = DEFAULT_HEIGHT,
  levels = 5,
  margin = defaultMargin,
  fields,
  data,
  config,
}: RadarProps) => {
  const theme = useTheme();
  const [_, dataMax] = getDataRange({ config, data, fields });
  const { series = {}, y_axis = [] } = config;

  const layoutMax = Math.max(width, height);

  const xMax = layoutMax - margin.left - margin.right;
  const yMax = layoutMax - margin.top - margin.bottom;
  const radius = Math.min(xMax, yMax) / 2;

  const radialScale = scaleLinear<number>({
    range: [0, Math.PI * 2],
    domain: [DEGREES, 0],
  });

  const yScaleMax = y_axis?.[0]?.range?.[1] || 'auto';

  const yScale = scaleLinear<number>({
    range: [0, radius],
    domain: [0, yScaleMax === 'auto' ? dataMax : yScaleMax],
  });

  const webs = genAngles(data.length);
  const points = genPoints(data.length, radius);

  const polygonPoints = fields.measures.map(m =>
    genPolygonPoints(
      data,
      d => yScale(d) ?? 0,
      d => d[m.name]
    )
  );

  const zeroPoint = new Point({ x: 0, y: 0 });

  return layoutMax < 10 ? null : (
    <svg width={layoutMax} height={layoutMax}>
      <Group top={layoutMax / 2 - margin.top} left={layoutMax / 2}>
        {y_axis[0].gridlines
          ? [...new Array(levels)].map((_, i) => (
              <LineRadial
                key={`web-${i}`}
                data={webs}
                angle={d => radialScale(d.angle) ?? 0}
                radius={((i + 1) * radius) / levels}
                fill="none"
                stroke={theme.colors.ui2}
                strokeWidth={2}
                strokeOpacity={0.8}
                strokeLinecap="round"
              />
            ))
          : null}
        {[...new Array(data.length)].map((_, i) => (
          <Line
            key={`radar-line-${i}`}
            from={zeroPoint}
            to={points[i]}
            stroke={theme.colors.ui2}
          />
        ))}
        {fields.measures.map((m, i) => {
          const { color, visible } = Array.isArray(series)
            ? series[i]
            : series[m.name];

          if (!visible) {
            return null;
          }

          return (
            <>
              <polygon
                points={polygonPoints[i].pointString}
                fill={color}
                fillOpacity={0.3}
                stroke={color}
                strokeWidth={1}
              />
              {polygonPoints[i].points.map((point, k) => (
                <circle
                  key={`radar-point-${k}`}
                  cx={point.x}
                  cy={point.y}
                  r={4}
                  fill={color}
                />
              ))}
            </>
          );
        })}
      </Group>
    </svg>
  );
};
