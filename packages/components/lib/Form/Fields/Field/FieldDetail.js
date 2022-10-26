let _ = t => t,
    _t;

import styled from 'styled-components';
import { Span } from '../../../Text';
export const FieldDetail = styled(Span).attrs(({
  color: _color = 'inherit'
}) => ({
  color: _color,
  fontSize: 'xsmall',
  lineHeight: 'xsmall'
})).withConfig({
  displayName: "FieldDetail",
  componentId: "sc-1uti41v-0"
})(_t || (_t = _`
  white-space: nowrap;
`));
//# sourceMappingURL=FieldDetail.js.map