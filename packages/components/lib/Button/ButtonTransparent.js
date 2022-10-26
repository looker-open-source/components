let _ = t => t,
    _t;

import styled from 'styled-components';
import { ButtonBase } from './ButtonBase';
export const ButtonTransparent = styled(ButtonBase).withConfig({
  displayName: "ButtonTransparent",
  componentId: "sc-799h13-0"
})(_t || (_t = _`
  background: transparent;
  border: 1px solid transparent;
  color: ${0};
  padding: 0 ${0};

  &[aria-expanded='true'] {
    background: ${0};
    border-color: ${0};
  }
`), ({
  theme,
  color: _color = 'key'
}) => theme.colors[_color], ({
  theme
}) => theme.space.u2, ({
  theme,
  color: _color2 = 'key'
}) => theme.colors[`${_color2}Accent`], ({
  theme,
  color: _color3 = 'key'
}) => theme.colors[`${_color3}Accent`]);
//# sourceMappingURL=ButtonTransparent.js.map