let _ = t => t,
    _t;

import { css } from 'styled-components';
export const iconButtonOutline = css(_t || (_t = _`
  border: 1px solid ${0};

  &:hover,
  &:focus,
  &.hover {
    border-color: ${0};
  }

  &[aria-expanded='true'],
  &:active,
  &.active {
    border-color: ${0};
  }

  &[disabled] {
    &:hover,
    &:active,
    &:focus {
      border-color: ${0};
    }
  }
`), ({
  theme: {
    colors
  }
}) => colors.ui3, ({
  theme: {
    colors
  }
}) => colors.neutral, ({
  theme: {
    colors
  }
}) => colors.neutralInteractive, ({
  theme: {
    colors
  }
}) => colors.ui3);
//# sourceMappingURL=iconButtonOutline.js.map