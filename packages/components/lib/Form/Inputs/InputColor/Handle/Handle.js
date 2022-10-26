let _ = t => t,
    _t,
    _t2;

import { theme } from '@looker/design-tokens';
import styled, { css } from 'styled-components';
export const HANDLE_SIZE = theme.sizes.small;
export const handleCSS = css(_t || (_t = _`
  border: 2px solid ${0};
  border-radius: 100%;
  box-shadow: ${0};
  cursor: ${0};
  height: ${0};
  left: 0;
  position: relative;
  width: ${0};
`), ({
  theme: {
    colors
  }
}) => colors.background, ({
  theme
}) => theme.elevations.plus1, ({
  isMouseDown
}) => isMouseDown ? 'grabbing' : 'pointer', HANDLE_SIZE, HANDLE_SIZE);
export const Handle = styled.div.attrs(({
  color,
  x
}) => ({
  style: {
    background: color,
    transform: `translateX(calc(${x}px - ${HANDLE_SIZE} / 2))`
  }
})).withConfig({
  displayName: "Handle",
  componentId: "sc-1ojot3e-0"
})(_t2 || (_t2 = _`
  ${0}

  /* Vertically centers slider */
  top: ${0};
`), handleCSS, ({
  theme
}) => `calc(${theme.space.u3} / 2 - ${HANDLE_SIZE} / 2)`);
//# sourceMappingURL=Handle.js.map