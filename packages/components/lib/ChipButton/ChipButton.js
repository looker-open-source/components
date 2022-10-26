let _ = t => t,
    _t;

import styled from 'styled-components';
import { inputHeight } from '../Form/Inputs/height';
import { Chip } from '../Chip/Chip';
export const ChipButton = styled(Chip).attrs(() => ({
  role: 'button'
})).withConfig({
  displayName: "ChipButton",
  componentId: "sc-1ov80kq-0"
})(_t || (_t = _`
  border: 1px solid ${0};
  cursor: pointer;
  font-size: ${0};
  font-weight: ${0};
  height: ${0};
  padding: 0 ${0};

  &:active,
  &:hover,
  &[aria-pressed='true'] {
    border-color: ${0};
  }

  &[aria-selected='true'] {
    background: ${0};
    color: ${0};
  }

  &.focus,
  &:focus {
    box-shadow: inset 0 0 0 1px ${0};
  }

  &[disabled] {
    background: ${0};
    color: ${0};
    cursor: default;

    &:hover {
      background: ${0};
      border-color: ${0};
    }
  }

  &[aria-selected='false'] {
    background: ${0};
    color: ${0};

    &:hover {
      background: ${0};
    }

    &:active {
      border-color: ${0};
    }

    &[disabled] {
      opacity: 0.4;
    }
  }
`), ({
  theme
}) => theme.colors.ui3, ({
  theme
}) => theme.fontSizes.small, ({
  theme
}) => theme.fontWeights.normal, inputHeight, ({
  theme
}) => theme.space.u4, ({
  theme
}) => theme.colors.key, ({
  theme
}) => theme.colors.keyAccent, ({
  theme
}) => theme.colors.text5, ({
  theme
}) => theme.colors.key, ({
  theme
}) => theme.colors.neutralAccent, ({
  theme
}) => theme.colors.neutral, ({
  theme
}) => theme.colors.neutralAccent, ({
  theme
}) => theme.colors.keyAccent, ({
  theme
}) => theme.colors.background, ({
  theme
}) => theme.colors.text3, ({
  theme
}) => theme.colors.ui1, ({
  theme
}) => theme.colors.ui4);
//# sourceMappingURL=ChipButton.js.map