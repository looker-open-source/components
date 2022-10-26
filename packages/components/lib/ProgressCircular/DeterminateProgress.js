let _ = t => t,
    _t,
    _t2;

import React from 'react';
import styled from 'styled-components';
import { CircleContainer } from './ProgressSvg';
import { progressCircularSVG } from './size';
export const DeterminateProgress = ({
  size,
  progress: _progress = 0
}) => {
  const {
    stroke,
    half,
    radius,
    dashArray
  } = progressCircularSVG({
    size
  });
  const progressOffset = (1 - _progress) * (2 * Math.PI * radius);
  return React.createElement(DeterminateContainer, null, React.createElement(CircleContainer, {
    viewBox: `0 0 ${half * 2} ${half * 2}`,
    xmlns: "http://www.w3.org/2000/svg"
  }, React.createElement(DeterminateCircle, {
    cx: half,
    cy: half,
    r: radius,
    strokeDasharray: dashArray,
    strokeDashoffset: progressOffset,
    strokeWidth: stroke
  })));
};
const DeterminateContainer = styled.div.withConfig({
  displayName: "DeterminateProgress__DeterminateContainer",
  componentId: "sc-yb0ja2-0"
})(_t || (_t = _`
  height: 100%;
  position: absolute;
  transform: rotate(-90deg);
  width: 100%;
`));
const DeterminateCircle = styled.circle.withConfig({
  displayName: "DeterminateProgress__DeterminateCircle",
  componentId: "sc-yb0ja2-1"
})(_t2 || (_t2 = _`
  stroke: ${0};
  transition: stroke-dashoffset 500ms;
`), ({
  theme
}) => theme.colors.key);
//# sourceMappingURL=DeterminateProgress.js.map