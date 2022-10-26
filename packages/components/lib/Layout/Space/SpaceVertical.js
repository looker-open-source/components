let _ = t => t,
    _t;

import { shouldForwardProp } from '@looker/design-tokens';
import styled from 'styled-components';
import { defaultGap, spaceCSS } from './Space';
export const SpaceVertical = styled.div.withConfig({
  shouldForwardProp,
  displayName: "SpaceVertical",
  componentId: "sc-tnj0rp-0"
}).attrs(({
  align: _align = 'start',
  width: _width = '100%'
}) => ({
  align: _align,
  width: _width
}))(_t || (_t = _`
  ${0}
  flex-direction: ${0};
  /* gap throws off spacing for around & evenly */
  ${0}
`), spaceCSS, ({
  reverse
}) => reverse ? 'column-reverse' : 'column', ({
  around,
  evenly,
  gap: _gap = defaultGap,
  theme: {
    space
  }
}) => !around && !evenly && `gap: ${space[_gap]} 0;`);
//# sourceMappingURL=SpaceVertical.js.map