let _ = t => t,
    _t,
    _t2;

import styled, { css } from 'styled-components';
import { reset, size, space, shouldForwardProp } from '@looker/design-tokens';
const emptySwatch = css(_t || (_t = _`
  position: relative;
  &::after {
    /* stylelint-disable-next-line */
    background: red;
    content: '';
    display: block;
    height: 1px;
    position: absolute;
    top: 50%;
    transform: rotate(-45deg);
    width: 100%;
  }
`));
export const Swatch = styled.div.withConfig({
  shouldForwardProp,
  displayName: "Swatch",
  componentId: "sc-1ldlx27-0"
}).attrs(({
  color: _color = 'transparent',
  size: _size = 'xsmall'
}) => ({
  color: _color,
  'data-testid': 'swatch',
  size: _size
}))(_t2 || (_t2 = _`
   ${0}
 
   ${0}
   ${0}
   background-color: ${0};
   border: 1px solid ${0};
   border-radius: 50%;
   cursor: ${0};
 
   ${0}
 
   &:hover {
     border: 1px solid ${0};
   }
 `), reset, size, space, ({
  color
}) => color, ({
  theme: {
    colors
  }
}) => colors.ui3, ({
  disabled
}) => !disabled && 'pointer', ({
  color
}) => color === 'transparent' && emptySwatch, ({
  theme: {
    colors
  }
}) => colors.ui4);
//# sourceMappingURL=Swatch.js.map