import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
let _ = t => t,
  _t,
  _t2,
  _t3,
  _t4,
  _t5;
const _excluded = ["showTooltip", "hideTooltip"];

import React, { Fragment } from 'react';
import { DEFAULT_HEIGHT } from '@looker/visualizations-adapters';
import VisxPie from '@visx/shape/lib/shapes/Pie';
import { scaleOrdinal } from '@visx/scale';
import { Group } from '@visx/group';
import { useTooltip } from '@visx/tooltip';
import isArray from 'lodash/isArray';
import pick from 'lodash/pick';
import styled, { css } from 'styled-components';
import { useLabelWidth } from './useLabelWidth';
import { getLabelContent } from './getLabelContent';
import { getChartGeometry } from './getChartGeometry';
import { PieTooltip } from './PieTooltip';
import { PieArc } from './PieArc';
import { PieLabel } from './PieLabel';
import { PieLegend } from './PieLegend';
const generateColorScale = (data, seriesConfig, dimension) => {
  const dataKey = dimension.name;
  const range = isArray(seriesConfig) ? seriesConfig.map(s => s === null || s === void 0 ? void 0 : s.color) : data.map(d => {
    var _seriesConfig$d$dataK;
    return (_seriesConfig$d$dataK = seriesConfig[d[dataKey]]) === null || _seriesConfig$d$dataK === void 0 ? void 0 : _seriesConfig$d$dataK.color;
  });
  return scaleOrdinal({
    domain: data.map(d => d[dataKey]),
    range
  });
};
export const Pie = ({
  data,
  config,
  height: _height = DEFAULT_HEIGHT,
  width: _width = DEFAULT_HEIGHT,
  fields
}) => {
  const _useTooltip = useTooltip(),
    {
      showTooltip,
      hideTooltip
    } = _useTooltip,
    tooltipProps = _objectWithoutProperties(_useTooltip, _excluded);
  const {
    series,
    legend,
    tooltips = true
  } = config;
  const {
    position: legendPosition = 'right',
    type: legendType,
    width: legendWidth
  } = legend || {};

  const limitedData = data.slice(0, 50);
  const firstMeasure = fields.measures[0] || {};
  const firstDimension = fields.dimensions[0] || {};

  const keyValData = Object.fromEntries(limitedData.map(d => [d[firstDimension.name], Number(d[firstMeasure.name])]));

  const measureTotal = Number(Object.values(keyValData).reduce((total, v) => Number(total) + Number(v), 0));
  const labelWidth = useLabelWidth(measureTotal, keyValData, legend);
  const {
    canvasW,
    canvasH,
    pieCenterX,
    pieCenterY,
    outerRadius
  } = getChartGeometry({
    legendType: legend ? legend.type : undefined,
    width: _width,
    height: _height,
    labelWidth
  });

  const colorScale = generateColorScale(limitedData, series, firstDimension);
  let mouseOutTimer = 0;
  const handleMouseOver = ({
    data: pieDatum
  }, coords) => {
    window.clearTimeout(mouseOutTimer);
    if (coords && tooltips) {
      showTooltip({
        tooltipData: pieDatum,
        tooltipTop: coords.y,
        tooltipLeft: coords.x
      });
    }
  };
  const handleMouseOut = () => {
    mouseOutTimer = window.setTimeout(() => {
      hideTooltip();
    });
  };
  return React.createElement(React.Fragment, null, React.createElement(PieGrid, {
    legendType: legend ? legend.type : undefined
  }, React.createElement(PieChart, {
    legendPosition: legendPosition,
    width: canvasW,
    height: canvasH
  }, React.createElement(Group, {
    top: pieCenterY,
    left: pieCenterX
  }, React.createElement(VisxPie, {
    data: limitedData,
    pieValue: d => d[firstMeasure.name],
    pieSortValues: () => 1,
    outerRadius: outerRadius
  }, ({
    arcs,
    path
  }) => {
    return arcs.map((arc, i) => {
      const dimensonValue = arc.data[firstDimension.name];
      const arcDatum = pick(keyValData, dimensonValue);
      const datumColor = colorScale(dimensonValue) || '#000000';
      return React.createElement(Fragment, {
        key: i
      }, React.createElement(PieArc, {
        arc: arc,
        path: path,
        key: i,
        datumColor: datumColor,
        onMouseOver: handleMouseOver,
        onMouseOut: handleMouseOut,
        renderTooltip: tooltips
      }), legendType === 'labels' && React.createElement(PieLabel, {
        arc: arc,
        outerRadius: outerRadius,
        labelContent: getLabelContent(measureTotal, arcDatum, legend),
        datumColor: datumColor
      }));
    });
  }))), legend && legendType === 'legend' && React.createElement(LegendWrapper, {
    legendPosition: legendPosition
  }, React.createElement(PieLegend, {
    legendConfig: legend,
    scale: colorScale,
    data: keyValData,
    measureTotal: measureTotal,
    height: canvasH,
    width: legendWidth || canvasW
  }))), React.createElement(PieTooltip, _extends({}, tooltipProps, {
    measure: firstMeasure,
    dimension: firstDimension
  })));
};
const PieGrid = styled.div.withConfig({
  displayName: "Pie__PieGrid",
  componentId: "sc-98dgxh-0"
})(_t || (_t = _`
  align-items: center;
  display: grid;
  grid-column-gap: ${0};
  grid-template-areas:
    'top top'
    'left right'
    'bottom bottom';
  grid-template-columns: fit-content(250px) 1fr;
`), ({
  theme,
  legendType
}) => legendType === 'legend' ? theme.space.medium : 0);
const PieChart = styled.svg.withConfig({
  displayName: "Pie__PieChart",
  componentId: "sc-98dgxh-1"
})(_t2 || (_t2 = _`
  ${0}
`), ({
  legendPosition
}) => css(_t3 || (_t3 = _`
    grid-area: ${0};
  `), legendPosition === `left` ? `right` : `left`));
const LegendWrapper = styled.div.withConfig({
  displayName: "Pie__LegendWrapper",
  componentId: "sc-98dgxh-2"
})(_t4 || (_t4 = _`
  ${0}
`), ({
  legendPosition
}) => css(_t5 || (_t5 = _`
    grid-area: ${0};
  `), legendPosition));
//# sourceMappingURL=Pie.js.map