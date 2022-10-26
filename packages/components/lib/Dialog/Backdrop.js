let _ = t => t,
    _t,
    _t2,
    _t3;

import { color, reset, shouldForwardProp } from '@looker/design-tokens';
import styled, { keyframes } from 'styled-components';
const fadeIn = keyframes(_t || (_t = _`
from {
  opacity: 0.01;
}
to {
  opacity: 0.6;
}
`));
const fadeOut = keyframes(_t2 || (_t2 = _`
from {
  opacity: 0.6;
}
to {
  opacity: 0.01;
}
`));
export const Backdrop = styled.div.withConfig({
  shouldForwardProp,
  displayName: "Backdrop",
  componentId: "sc-195exav-0"
}).attrs(() => ({
  'data-testid': 'backdrop'
}))(_t3 || (_t3 = _`
  ${0}
  ${0}

  animation-duration: ${0}ms;
  animation-fill-mode: forwards;
  background: ${0};
  bottom: 0;
  cursor: default;
  left: 0;
  opacity: 0.6;
  position: fixed;
  right: 0;
  top: 0;

  &.entering {
    animation-name: ${0};
  }
  &.exiting {
    animation-name: ${0};
  }
`), reset, color, ({
  theme
}) => theme.transitions.simple, ({
  theme
}) => theme.colors.ui5, fadeIn, fadeOut);
//# sourceMappingURL=Backdrop.js.map