let _ = t => t,
  _t;

import styled from 'styled-components';
import { textTransform } from '@looker/design-tokens';
import { TextBase } from '../Text/TextBase';
export const Span = styled(TextBase).attrs(({
  fontSize,
  lineHeight
}) => ({
  lineHeight: lineHeight || fontSize
})).withConfig({
  displayName: "Span",
  componentId: "sc-1e8sfe6-0"
})(_t || (_t = _`
  ${0}
`), textTransform);
//# sourceMappingURL=Span.js.map