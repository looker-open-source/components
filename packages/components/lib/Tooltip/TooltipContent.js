let _ = t => t,
    _t;

import styled from 'styled-components';
import { Paragraph } from '../Text';
export const TooltipContent = styled(Paragraph).attrs(({
  textAlign: _textAlign = 'center',
  width
}) => ({
  color: 'inherit',
  fontSize: 'xsmall',
  lineHeight: 'xsmall',
  m: 'none',
  maxWidth: width || '16rem',
  p: 'u2',
  textAlign: _textAlign,
  width: 'auto'
})).withConfig({
  displayName: "TooltipContent",
  componentId: "sc-1fmi5qh-0"
})(_t || (_t = _`
  hyphens: auto;
  overflow-wrap: anywhere;
  text-transform: none;
  white-space: normal;
  word-break: break-word;
`));
//# sourceMappingURL=TooltipContent.js.map