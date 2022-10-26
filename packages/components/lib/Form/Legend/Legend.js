let _ = t => t,
    _t;

import styled from 'styled-components';
import { color, reset, space, shouldForwardProp, typography } from '@looker/design-tokens';
export const Legend = styled.legend.withConfig({
  shouldForwardProp,
  displayName: "Legend",
  componentId: "sc-jsk37b-0"
}).attrs(({
  color: _color = 'text4',
  fontFamily: _fontFamily = 'brand',
  fontSize: _fontSize = 'medium',
  fontWeight: _fontWeight = 'semiBold'
}) => ({
  color: _color,
  fontFamily: _fontFamily,
  fontSize: _fontSize,
  fontWeight: _fontWeight
}))(_t || (_t = _`
  ${0}
  border: none;
  ${0}
  ${0}
  ${0}
`), reset, color, space, typography);
//# sourceMappingURL=Legend.js.map