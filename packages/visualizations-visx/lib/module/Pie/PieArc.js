import _defineProperty from "@babel/runtime/helpers/defineProperty";
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

import React, { useState } from 'react';
import { hsv } from 'd3-hsv';
import { localPoint } from '@visx/event';
import { useTheme } from 'styled-components';
import { PIE_SLICE_ZOOM } from './pieConstants';
export const PieArc = ({
  arc,
  path,
  datumColor,
  onMouseOver,
  onMouseOut,
  renderTooltip
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const theme = useTheme();
  const {
    h,
    s,
    v
  } = hsv(datumColor);
  const hoverColor = hsv(h, s, Math.min(v + 0.2, 1)).hex();
  return React.createElement("g", null, React.createElement("path", {
    d: path(_objectSpread({}, arc)) || undefined,
    fill: isHovered ? datumColor : 'transparent',
    transform: `scale(${PIE_SLICE_ZOOM})`,
    opacity: "0.4"
  }), React.createElement("path", {
    d: path(_objectSpread({}, arc)) || undefined,
    fill: isHovered ? hoverColor : datumColor,
    onMouseMove: e => {
      const coords = localPoint(e.target.ownerSVGElement, e);
      onMouseOver(arc, coords);
      if (renderTooltip) {
        setIsHovered(true);
      }
    },
    onMouseLeave: () => {
      onMouseOut();
      setIsHovered(false);
    },
    stroke: theme.colors.background,
    strokeWidth: 1
  }));
};
//# sourceMappingURL=PieArc.js.map