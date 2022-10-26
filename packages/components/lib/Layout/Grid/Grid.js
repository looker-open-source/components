let _ = t => t,
    _t;

import { shouldForwardProp } from '@looker/design-tokens';
import styled from 'styled-components';
import { defaultGap } from '../Space';
import { commonLayoutCSS } from '../utils/common';
export const Grid = styled.div.withConfig({
  shouldForwardProp,
  displayName: "Grid",
  componentId: "sc-1h75l3v-0"
}).attrs(({
  width: _width = '100%'
}) => ({
  width: _width
}))(_t || (_t = _`
  ${0}

  display: grid;
  grid-gap: ${0};
  grid-template-columns:
    repeat(${0}, minmax(0, 1fr));
`), commonLayoutCSS, ({
  gap,
  theme
}) => theme.space[gap || defaultGap], ({
  columns
}) => columns || 2);
//# sourceMappingURL=Grid.js.map