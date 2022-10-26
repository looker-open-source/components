let _ = t => t,
    _t,
    _t2,
    _t3,
    _t4;

import { css, keyframes } from 'styled-components';
const rippleRadiusIn = keyframes(_t || (_t = _`
from {
  animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transform: translate(var(--ripple-translate, 0)) scale(var(--ripple-scale-start, 1));
}
to {
  transform: translate(var(--ripple-translate, 0))
    scale(var(--ripple-scale-end, 1));
}
`));
const rippleOpacityIn = keyframes(_t2 || (_t2 = _`
from {
  animation-timing-function: linear;
  opacity: 0;
}
to {
  opacity: .12;
}
`));
const rippleOpacityOut = keyframes(_t3 || (_t3 = _`
from {
  animation-timing-function: linear;
  opacity: .12;
}
to {
  opacity: 0;
}
`));
export const rippleStyle = css(_t4 || (_t4 = _`
  outline: none;
  overflow: var(--ripple-overflow);
  position: relative;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);

  &::before,
  &::after {
    background-color: var(--ripple-color, #000000);
    border-radius: 50%;
    content: '';
    height: var(--ripple-size, 100%);
    left: 0;
    opacity: 0;
    pointer-events: none;
    position: absolute;
    top: 0;
    transform-origin: center center;
    width: var(--ripple-size, 100%);
  }

  &::before {
    transform: translate(var(--ripple-translate, 0))
      scale(var(--ripple-scale-end, 1));
    transition: opacity 15ms linear;
  }

  &::after {
    transform: scale(0);
  }

  &.bg-on::before {
    opacity: 0.12;
  }

  &.fg-in::after {
    animation-duration: ${0};
    animation-fill-mode: forwards, forwards;
    animation-name: ${0}, ${0};
  }
  &.fg-out::after {
    animation: ${0};
    animation-duration: ${0}ms;
    transform: translate(var(--ripple-translate, 0))
      scale(var(--ripple-scale-end, 1));
  }
`), ({
  theme: {
    defaults: {
      brandAnimation
    },
    transitions: {
      rapid,
      simple
    }
  }
}) => `${simple}ms, ${brandAnimation ? rapid : '15'}ms`, rippleRadiusIn, rippleOpacityIn, rippleOpacityOut, ({
  theme: {
    transitions
  }
}) => transitions.quick);
//# sourceMappingURL=rippleStyle.js.map