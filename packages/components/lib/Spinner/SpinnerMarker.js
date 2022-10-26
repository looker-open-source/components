let _ = t => t,
    _t,
    _t2;

import { color, quarterFade, shouldForwardProp } from '@looker/design-tokens';
import styled, { css } from 'styled-components';

const markerStyle = props => {
  const {
    markerIndex,
    markerRadius,
    markers,
    speed
  } = props;
  const delay = markerIndex * speed / markers;
  const rotateAngle = 360 / markers * markerIndex;
  return css(_t || (_t = _`
    animation: ${0} ${0}ms linear ${0}ms infinite;
    border-radius: ${0};
    transform: rotate(${0}deg) translate(0, -160%);
  `), quarterFade, speed, delay, markerRadius && `${markerRadius}px`, rotateAngle);
};

export const SpinnerMarker = styled.div.withConfig({
  shouldForwardProp,
  displayName: "SpinnerMarker",
  componentId: "sc-ddzia7-0"
})(_t2 || (_t2 = _`
  ${0}
  ${0}
  height: 20%;
  left: 48%;
  opacity: 0.25;
  position: absolute;
  top: 40%;
  width: 6%;
`), color, markerStyle);
//# sourceMappingURL=SpinnerMarker.js.map