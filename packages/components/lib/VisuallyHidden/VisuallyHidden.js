let _ = t => t,
    _t,
    _t2;

import styled, { css } from 'styled-components';
export const visuallyHiddenStyle = css(_t || (_t = _`
  clip: rect(1px, 1px, 1px, 1px);
  height: 1px;
  left: 0;
  overflow: hidden;
  position: absolute;
  top: 0;
  width: 1px;
  color: #000;
`));
export const VisuallyHidden = styled.div.withConfig({
  displayName: "VisuallyHidden",
  componentId: "sc-1e4iwld-0"
})(_t2 || (_t2 = _`
  ${0}
`), visuallyHiddenStyle);
//# sourceMappingURL=VisuallyHidden.js.map