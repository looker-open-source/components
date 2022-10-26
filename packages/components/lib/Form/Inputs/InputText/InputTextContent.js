let _ = t => t,
    _t;

import { space } from '@looker/design-tokens';
import styled from 'styled-components';
import { inputIconSize } from '../inputIconSize';
export const InputTextContent = styled.div.withConfig({
  displayName: "InputTextContent",
  componentId: "sc-1cvjzox-0"
})(_t || (_t = _`
  ${0}
  align-items: center;
  color: ${0};
  display: flex;
  height: 100%;
  pointer-events: none;

  > svg {
    ${0}
  }
`), space, ({
  theme
}) => theme.colors.text1, inputIconSize);
//# sourceMappingURL=InputTextContent.js.map