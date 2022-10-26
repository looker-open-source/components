let _ = t => t,
    _t,
    _t2;

import { densityTarget } from '@looker/design-tokens';
import styled from 'styled-components';
export const ItemTarget = styled.div.withConfig({
  displayName: "ItemTarget",
  componentId: "sc-ydt12l-0"
})(_t || (_t = _`
  align-items: center;
  cursor: ${0};
  display: flex;
  height: 100%;
  justify-content: center;
  min-height: ${0};
  min-width: ${0};
  width: ${0};
`), ({
  disabled
}) => disabled ? 'not-allowed' : 'inherit', ({
  size
}) => size || densityTarget, ({
  size
}) => size || densityTarget, ({
  size
}) => size || densityTarget);
export const ItemTargetGroup = styled.div.withConfig({
  displayName: "ItemTarget__ItemTargetGroup",
  componentId: "sc-ydt12l-1"
})(_t2 || (_t2 = _`
  display: flex;
  margin-left: auto;
  width: fit-content;
`));
//# sourceMappingURL=ItemTarget.js.map