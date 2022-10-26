let _ = t => t,
    _t;

import { css } from 'styled-components';
import { iconButtonColorDerivation } from '@looker/design-tokens';
export const ICON_BUTTON_DEFAULT_COLOR = 'key';
export const iconButtonColor = css(_t || (_t = _`
  ${0}

  &:hover,
  &:focus,
  &.hover {
    color: ${0};
  }

  &[aria-expanded='true'],
  &:active,
  &.active {
    color: ${0};
  }

  &[aria-pressed='true'] {
    color: ${0};
  }
`), iconButtonColorDerivation, ({
  theme
}) => theme.colors.neutralInteractive, ({
  theme,
  toggle,
  toggleColor
}) => toggle !== undefined ? theme.colors[toggleColor || ICON_BUTTON_DEFAULT_COLOR] : theme.colors.neutralPressed, ({
  theme,
  toggleColor
}) => theme.colors[toggleColor || ICON_BUTTON_DEFAULT_COLOR]);
//# sourceMappingURL=iconButtonColor.js.map