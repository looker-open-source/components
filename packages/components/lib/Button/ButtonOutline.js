let _ = t => t,
    _t;

import styled from 'styled-components';
import { ButtonBase } from './ButtonBase';
export const ButtonOutline = styled(ButtonBase).withConfig({
  displayName: "ButtonOutline",
  componentId: "sc-ncggc7-0"
})(_t || (_t = _`
  background: ${0};
  border: 1px solid ${0};
  color: ${0};

  &[aria-expanded='true'] {
    background: ${0};
    border-color: ${0};
    color: ${0};
  }
`), ({
  theme,
  color: _color = 'key'
}) => theme.colors[`${_color}Text`], ({
  theme
}) => theme.colors.ui3, ({
  theme,
  color: _color2 = 'key'
}) => theme.colors[_color2], ({
  theme,
  color: _color3 = 'key'
}) => theme.colors[`${_color3}Accent`], ({
  theme,
  color: _color4 = 'key'
}) => theme.colors[`${_color4}Focus`], ({
  theme,
  color: _color5 = 'key'
}) => theme.colors[_color5]);
//# sourceMappingURL=ButtonOutline.js.map