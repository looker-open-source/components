let _ = t => t,
    _t,
    _t2,
    _t3,
    _t4,
    _t5,
    _t6;

import styled, { css, keyframes } from 'styled-components';
import { height, theme } from '@looker/design-tokens';
import { SurfaceBase, surfaceTransition } from '../Dialog/SurfaceBase';
import { dialogWidth } from './dialogWidth';
export const dialogPlacements = ['center', 'cover', 'top'];
const {
  space,
  breakpoints
} = theme;
const gapSpace = 'xxlarge';
const coverDimension = `calc(100% - ${space[gapSpace]} * 2)`;
const placements = {
  center: css(_t || (_t = _`
    align-self: flex-start;
    max-height: 100%;

    @media screen and (min-width: ${0}) {
      align-self: center;
      max-height: ${0};
    }
  `), breakpoints[0], coverDimension),
  cover: css(_t2 || (_t2 = _`
    height: 100%;

    @media screen and (min-width: ${0}) {
      height: ${0};
      width: ${0};
    }

    @media screen and (min-width: ${0}) {
      height: ${0};
      width: ${0};
    }
  `), breakpoints[0], coverDimension, coverDimension, breakpoints[1], coverDimension, coverDimension),
  top: css(_t3 || (_t3 = _`
    align-self: flex-start;
    margin-top: 0;
    max-height: 100%;

    @media screen and (min-width: ${0}) {
      margin-top: ${0};
      max-height: ${0};
    }
  `), breakpoints[0], ({
    theme
  }) => theme.space[gapSpace], coverDimension)
};
const defaultDialogSurfacePlacement = 'center';
const dialogIn = keyframes(_t4 || (_t4 = _`
from {
  opacity: 0.01;
  transform: translateY(100%);
}
to {
  opacity: 1;
  transform: translate(0);
}
`));
const dialogOut = keyframes(_t5 || (_t5 = _`
from {
  opacity: 1;
  transform: translate(0);
}
to {
  opacity: 0.01;
  transform: translateY(100%);
}
`));
export const DialogSurface = styled(SurfaceBase).attrs(({
  placement: _placement = defaultDialogSurfacePlacement,
  width: _width = 'medium'
}) => ({
  placement: _placement,
  width: _width
})).withConfig({
  displayName: "DialogSurface",
  componentId: "sc-sg86rj-0"
})(_t6 || (_t6 = _`
  box-shadow: ${0};
  position: relative;

  ${0}
  ${0}
  ${0}

  @media screen and (min-width: ${0}) {
    border-radius: ${0};
  }

  &.entering {
    animation: ${0} ${0};
  }
  &.exiting {
    animation: ${0} ${0};
  }
`), ({
  theme
}) => theme.elevations.plus3, dialogWidth, ({
  placement
}) => placements[placement || defaultDialogSurfacePlacement], height, breakpoints[0], ({
  theme
}) => theme.radii.medium, dialogIn, surfaceTransition, dialogOut, surfaceTransition);
//# sourceMappingURL=DialogSurface.js.map