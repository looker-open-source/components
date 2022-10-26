let _ = t => t,
    _t,
    _t2;

import styled, { css } from 'styled-components';
import { OverlaySurface, OverlaySurfaceContentArea } from '../Overlay/OverlaySurface';
import { Link } from '../Link';
export const invertSurface = props => props.invert !== false && css(_t || (_t = _`
    ${0} {
      background: ${0};
      border-color: ${0};
      color: ${0};
    }

    ${0} {
      color: ${0};

      &:focus,
      &:hover,
      &:active,
      &.active,
      &:visited {
        color: ${0};
      }
    }
  `), OverlaySurfaceContentArea, ({
  theme
}) => theme.colors.inverse, ({
  theme
}) => theme.colors.inverse, ({
  theme
}) => theme.colors.inverseOn, Link, ({
  theme
}) => theme.colors.keyAccent, ({
  theme
}) => theme.colors.keySubtle);
export const TooltipSurface = styled(OverlaySurface).withConfig({
  displayName: "TooltipSurface",
  componentId: "sc-ym8ur1-0"
})(_t2 || (_t2 = _`
  ${0}

  &.exited,
  &.exiting,
  &.entering {
    animation: none;
    opacity: 0;
    /* Prevents showing the tooltip if the the mouse happens to move over it
    when still opacity: 0 (during the delay) */
    pointer-events: none;
  }
`), invertSurface);
//# sourceMappingURL=TooltipSurface.js.map