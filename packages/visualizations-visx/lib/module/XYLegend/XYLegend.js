import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
const _excluded = ["direction"];
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
import React, { useContext } from 'react';
import { useTheme } from 'styled-components';
import { DataContext } from '@visx/xychart';
import { LegendOrdinal } from '@visx/legend';
import partial from 'lodash/partial';
import { seriesLabelFormatter } from '../utils';
const DEFAULT_LEGEND_WIDTH = 200;
export const XYLegend = ({
  chartWidth,
  config,
  fields
}) => {
  const {
    colorScale = {},
    theme: visxTheme,
    margin
  } = useContext(DataContext);
  const {
    space: {
      xsmall,
      small
    }
  } = useTheme();
  const {
    legend
  } = config;

  if (!legend) {
    return React.createElement(React.Fragment, null);
  }
  const legendWidth = legend.width || DEFAULT_LEGEND_WIDTH;

  const yAxisSpacer = legend.position === 'left' || legend.position === 'right' ? undefined : margin === null || margin === void 0 ? void 0 : margin.left;
  const _bottom$top$left$righ = {
      bottom: {
        direction: 'row',
        marginLeft: yAxisSpacer,
        marginTop: small,
        width: `calc(${chartWidth ? `${chartWidth}px` : '100%'} - ${yAxisSpacer}px)`
      },
      top: {
        direction: 'row',
        marginLeft: yAxisSpacer,
        marginBottom: small,
        width: `calc(${chartWidth ? `${chartWidth}px` : '100%'} - ${yAxisSpacer}px)`
      },
      left: {
        direction: 'column',
        width: legendWidth
      },
      right: {
        direction: 'column',
        width: legendWidth
      }
    }[legend.position],
    {
      direction
    } = _bottom$top$left$righ,
    legendStyle = _objectWithoutProperties(_bottom$top$left$righ, _excluded);
  return React.createElement(LegendOrdinal, {
    direction: direction,
    itemMargin: `0 ${small} ${xsmall} ${small}`,
    labelFormat: partial(seriesLabelFormatter, fields, config),
    style: _objectSpread({
      color: visxTheme === null || visxTheme === void 0 ? void 0 : visxTheme.svgLabelBig.fill,
      display: 'flex',
      flexShrink: 0,
      flexWrap: 'wrap',
      justifyContent: 'center'
    }, legendStyle),
    scale: colorScale,
    shape: "line"
  });
};
//# sourceMappingURL=XYLegend.js.map