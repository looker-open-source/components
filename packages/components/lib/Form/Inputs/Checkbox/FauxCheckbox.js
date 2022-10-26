let _ = t => t,
    _t;

import styled from 'styled-components';
import { checkboxRadioHeight } from '../height';
export const FauxCheckbox = styled.div.withConfig({
  displayName: "FauxCheckbox",
  componentId: "sc-1yuna8r-0"
})(_t || (_t = _`
  background: ${0};
  border: solid 2px
    ${0};
  border-radius: ${0};
  color: ${0};
  height: ${0};
  position: relative;
  width: ${0};
  svg {
    position: absolute;
    right: 0;
    top: 0;
  }
`), ({
  isSelected,
  theme
}) => isSelected ? theme.colors.key : 'currentColor', ({
  isSelected,
  theme: {
    colors
  }
}) => isSelected ? colors.key : colors.ui4, ({
  theme
}) => theme.radii.small, ({
  theme
}) => theme.colors.keyText, checkboxRadioHeight, checkboxRadioHeight);
//# sourceMappingURL=FauxCheckbox.js.map