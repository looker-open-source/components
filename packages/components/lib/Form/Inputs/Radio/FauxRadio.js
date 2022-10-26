let _ = t => t,
    _t;

import styled from 'styled-components';
import { reset } from '@looker/design-tokens';
import { checkboxRadioHeight } from '../height';
export const FauxRadio = styled.div.withConfig({
  displayName: "FauxRadio",
  componentId: "sc-1how668-0"
})(_t || (_t = _`
  ${0}
  background: ${0};
  border: solid 2px ${0};
  border-color: currentColor;
  border-radius: 50%;
  color: ${0};
  height: ${0};
  padding: ${0};
  transition: background-color 25ms linear, border-color 25ms linear,
    box-shadow 25ms linear;
  width: ${0};

  &::after {
    background: ${0};
    border-radius: 50%;
    content: '';
    display: block;
    height: 100%;
    width: 100%;
  }
`), reset, ({
  theme
}) => theme.colors.field, ({
  theme
}) => theme.colors.ui2, ({
  theme
}) => theme.colors.ui4, checkboxRadioHeight, ({
  theme
}) => theme.space.u05, checkboxRadioHeight, ({
  theme
}) => theme.colors.field);
//# sourceMappingURL=FauxRadio.js.map