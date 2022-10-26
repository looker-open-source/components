let _ = t => t,
    _t,
    _t2,
    _t3;

import styled, { keyframes } from 'styled-components';
const slideIn = keyframes(_t || (_t = _`
  0% {transform: translate(var(--direction-translate, 0), 0);}
  100% {transform: translate(0);}
`));
const slideOut = keyframes(_t2 || (_t2 = _`
  0% {transform: translate(0);}
  100% {transform: translate(var(--direction-translate, 0), 0);}
`));
export const PanelSurface = styled.div.attrs(({
  direction: _direction = 'left'
}) => ({
  'data-panel': true,
  direction: _direction
})).withConfig({
  displayName: "PanelSurface",
  componentId: "sc-1ptnzaf-0"
})(_t3 || (_t3 = _`
  --direction-translate: ${0};

  animation-duration: ${0}ms;
  background: ${0};
  bottom: 0;
  display: flex;
  flex-direction: column;
  height: 100%;
  left: 0;
  outline: none;
  position: absolute;
  right: 0;
  top: 0;
  width: 100%;

  &.entering {
    animation-name: ${0};
  }
  &.exiting {
    animation-name: ${0};
  }
`), ({
  direction
}) => direction === 'left' ? '-100%' : '100%', ({
  theme: {
    transitions
  }
}) => transitions.moderate, ({
  theme
}) => theme.colors.background, slideIn, slideOut);
//# sourceMappingURL=PanelSurface.js.map