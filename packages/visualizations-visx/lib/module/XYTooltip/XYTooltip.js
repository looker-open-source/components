import _defineProperty from "@babel/runtime/helpers/defineProperty";
let _ = t => t,
  _t,
  _t2,
  _t3;
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

import React from 'react';
import styled, { css, useTheme } from 'styled-components';
import { getSeriesMax, getSeriesMin, pickSeriesByName } from '@looker/visualizations-adapters';
import { Tooltip as VisxTooltip } from '@visx/xychart';
import { SpaceVertical, TooltipContent } from '@looker/components';
import get from 'lodash/get';
import { Glyph } from '../Glyph';
import { seriesLabelFormatter, getRelativeGlyphSize, getDefaultGlyphSize, useTranslation } from '../utils';
import { DLGroup } from '../DLGroup';
import numeral from 'numeral';
export const tooltipStyles = css(_t || (_t = _`
  background-color: ${0};
  border-radius: ${0};
  color: ${0};
  font-family: ${0};
  font-size: ${0};
  padding: ${0};
  pointer-events: none; /* Prevents mouse from falling onto tooltip and interrupting horizontal hover flow on charts */
`), ({
  theme
}) => theme.colors.inverse, ({
  theme
}) => theme.radii.medium, ({
  theme
}) => theme.colors.inverseOn, ({
  theme
}) => theme.fonts.body, ({
  theme
}) => theme.fontSizes.xsmall, ({
  theme
}) => theme.space.u3);
export const XYTooltip = styled(({
  className,
  config,
  data,
  fields,
  snapToDatum: _snapToDatum = true,
  showDatumGlyph: _showDatumGlyph = true
}) => {
  const {
    t
  } = useTranslation('XYTooltip');
  const theme = useTheme();
  const {
    tooltips,
    series
  } = config;
  if (!tooltips) {
    return React.createElement(React.Fragment, null);
  }
  const renderTooltip = ({
    tooltipData
  }) => {
    var _tooltipData$nearestD, _tooltipData$nearestD2;
    const nearestDatumMeasureName = (tooltipData === null || tooltipData === void 0 ? void 0 : (_tooltipData$nearestD = tooltipData.nearestDatum) === null || _tooltipData$nearestD === void 0 ? void 0 : _tooltipData$nearestD.key) || '';
    const nearestDatumIndex = (tooltipData === null || tooltipData === void 0 ? void 0 : (_tooltipData$nearestD2 = tooltipData.nearestDatum) === null || _tooltipData$nearestD2 === void 0 ? void 0 : _tooltipData$nearestD2.index) || 0;
    const datum = data[nearestDatumIndex];
    const nearestSeries = pickSeriesByName(fields, config, nearestDatumMeasureName);
    const dimensionLabel = fields.dimensions.length === 1 ? fields.dimensions[0].label_short : '';
    const valueFormatted = numeral(datum[nearestDatumMeasureName]).format(nearestSeries.value_format);
    const {
      size_by
    } = nearestSeries;
    const sizeBySeries = size_by ? get(series, size_by) : {};
    const sizeByValueFormatted = numeral(datum[nearestSeries.size_by || '']).format(sizeBySeries.value_format);
    return React.createElement(TooltipContent, null, React.createElement(StyledDL, null, React.createElement(SpaceVertical, {
      gap: "u3"
    }, React.createElement(DLGroup, {
      label: dimensionLabel,
      value: datum.dimension
    }), React.createElement(DLGroup, {
      label: seriesLabelFormatter(fields, config, nearestDatumMeasureName),
      value: valueFormatted
    }), nearestSeries.size_by && React.createElement(DLGroup, {
      preface: t('Points sized by'),
      label: seriesLabelFormatter(fields, config, nearestSeries.size_by),
      value: sizeByValueFormatted
    }))));
  };
  const glyphSize = (sizeByData = 0, line_width = 3, size_by) => {
    const defaultSize = getDefaultGlyphSize(line_width) + 20 + line_width * 4;
    if (size_by) {
      const sizeByMin = getSeriesMin(size_by, data);
      const sizeByMax = getSeriesMax(size_by, data);
      return sizeByMin !== sizeByMax ? getRelativeGlyphSize(sizeByData, sizeByMin, sizeByMax) : defaultSize;
    }
    return defaultSize;
  };
  const styleObj = (size, size_by) => {
    const scaleValue = Math.round(-0.001 * size + 20) / 100 + 0.9;
    return _objectSpread({
      stroke: theme.colors.background,
      transform: `scale(${scaleValue}, ${scaleValue})`
    }, size_by ? {
      opacity: `0.5`,
      filter: `drop-shadow(1px 1px 3px rgb(0 0 0 / 0.5))`
    } : {});
  };
  return React.createElement(VisxTooltip, {
    className: className,
    detectBounds: true,
    renderTooltip: renderTooltip,
    showDatumGlyph: _showDatumGlyph,
    snapTooltipToDatumX: _snapToDatum,
    snapTooltipToDatumY: _snapToDatum,
    unstyled: true,
    applyPositionStyle: true,
    renderGlyph: ({
      color,
      key,
      datum
    }) => {
      const nearestSeries = pickSeriesByName(fields, config, key);
      const {
        line_width = 1,
        size_by
      } = nearestSeries;
      const size = glyphSize(get(datum, size_by || ''), line_width, size_by);
      const style = styleObj(size, size_by);
      return React.createElement(Glyph, {
        series: _objectSpread(_objectSpread({}, nearestSeries), {}, {
          line_width: 3
        }),
        top: 0,
        left: 0,
        size: size,
        fill: color,
        styleObj: style
      });
    }
  });
}).withConfig({
  displayName: "XYTooltip",
  componentId: "sc-48579u-0"
})(_t2 || (_t2 = _`
  ${0}
`), tooltipStyles);
const StyledDL = styled.dl.withConfig({
  displayName: "XYTooltip__StyledDL",
  componentId: "sc-48579u-1"
})(_t3 || (_t3 = _`
  margin: 0;
`));
//# sourceMappingURL=XYTooltip.js.map