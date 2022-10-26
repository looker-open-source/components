let _ = t => t,
    _t;

import styled from 'styled-components';
export const TabIndicator = styled.span.withConfig({
  displayName: "TabIndicator",
  componentId: "sc-1e6ezju-0"
})(_t || (_t = _`
  background-color: ${0};
  border-radius: 3px 3px 0 0;
  bottom: 0;
  height: 3px;
  left: ${0};
  position: absolute;
  right: ${0};
`), ({
  selected,
  theme
}) => selected ? theme.colors.key : 'transparent', ({
  theme
}) => theme.space.u4, ({
  theme
}) => theme.space.u4);
//# sourceMappingURL=TabIndicator.js.map