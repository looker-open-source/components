let _ = t => t,
    _t,
    _t2,
    _t3;

import { keyframes } from 'styled-components';
export const fadeIn = keyframes(_t || (_t = _`
  0% {opacity: 0;}
  100% {opacity: 1;}
`));
export const fadeOut = keyframes(_t2 || (_t2 = _`
  0% {opacity: 100;}
  100% {opacity: 0;}
`));
export const quarterFade = keyframes(_t3 || (_t3 = _`
  0% {opacity: 1;}
  100% {opacity: 0.25;}
`));
//# sourceMappingURL=animations.js.map