let _ = t => t,
    _t,
    _t2;

import styled, { css } from 'styled-components';
export const InputArea = styled.div.withConfig({
  displayName: "InputArea",
  componentId: "sc-1jka2a-0"
})(_t || (_t = _`
  align-items: center;
  ${0}
  /* Workaround for Chip's truncate styling breaking flexbox layout in FieldChips */
  min-width: 0;
`), ({
  autoResize
}) => autoResize && css(_t2 || (_t2 = _`
      align-items: stretch;
      display: flex;
      flex-direction: column;
    `)));
//# sourceMappingURL=InputArea.js.map