let _ = t => t,
    _t;

import { reset, space, border, layout, shouldForwardProp } from '@looker/design-tokens';
import styled from 'styled-components';
export const Table = styled.table.withConfig({
  shouldForwardProp,
  displayName: "Table",
  componentId: "sc-1x77f3i-0"
}).attrs(({
  width: _width = '100%'
}) => ({
  width: _width
}))(_t || (_t = _`
  ${0}
  ${0}
  ${0}
  ${0}
  border-collapse: collapse;
  color: ${0};
`), reset, space, layout, border, ({
  theme: {
    colors
  }
}) => colors.text5);
//# sourceMappingURL=Table.js.map