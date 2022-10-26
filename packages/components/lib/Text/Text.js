let _ = t => t,
    _t;

import styled from 'styled-components';
import { Span } from './Span';
export const Text = styled(Span).attrs(({
  fontSize: _fontSize = 'medium',
  lineHeight
}) => ({
  fontSize: _fontSize,
  lineHeight: lineHeight || _fontSize
})).withConfig({
  displayName: "Text",
  componentId: "sc-1wcc5y1-0"
})(_t || (_t = _``));
//# sourceMappingURL=Text.js.map