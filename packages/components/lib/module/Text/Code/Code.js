let _ = t => t,
  _t;

import styled from 'styled-components';
import { TextBase } from '../Text/TextBase';
export const Code = styled(TextBase).attrs(({
  color: _color = 'text5',
  fontFamily: _fontFamily = 'code',
  fontSize,
  lineHeight
}) => ({
  as: 'code',
  color: _color,
  fontFamily: _fontFamily,
  lineHeight: lineHeight || fontSize
})).withConfig({
  displayName: "Code",
  componentId: "sc-3cj3ur-0"
})(_t || (_t = _``));
//# sourceMappingURL=Code.js.map