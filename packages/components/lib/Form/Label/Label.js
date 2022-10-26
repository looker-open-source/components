let _ = t => t,
    _t;

import styled from 'styled-components';
import { reset, shouldForwardProp, textColor, typography } from '@looker/design-tokens';
export const Label = styled.label.withConfig({
  shouldForwardProp,
  displayName: "Label",
  componentId: "sc-1vkvm3d-0"
}).attrs(({
  color: _color = 'text4',
  fontSize: _fontSize = 'xsmall',
  fontWeight: _fontWeight = 'medium'
}) => ({
  color: _color,
  fontSize: _fontSize,
  fontWeight: _fontWeight
}))(_t || (_t = _`
  ${0}
  ${0}
  ${0}
`), reset, textColor, typography);
//# sourceMappingURL=Label.js.map