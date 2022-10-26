let _ = t => t,
    _t;

import styled from 'styled-components';
import { layout, textTransform } from '@looker/design-tokens';
import { truncateCSS } from '../Text/truncate';
import { TextBase } from './TextBase';
export const Paragraph = styled(TextBase).attrs(({
  color: _color = 'body',
  fontSize: _fontSize = 'inherit',
  lineHeight
}) => ({
  as: 'p',
  color: _color,
  fontSize: _fontSize,
  lineHeight: lineHeight || _fontSize
})).withConfig({
  displayName: "Paragraph",
  componentId: "sc-1nv7vl5-0"
})(_t || (_t = _`
  ${0}
  ${0}
  ${0}
`), layout, textTransform, truncateCSS);
//# sourceMappingURL=Paragraph.js.map