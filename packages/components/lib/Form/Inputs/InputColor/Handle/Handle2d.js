let _ = t => t,
    _t;

import styled from 'styled-components';
import { HANDLE_SIZE, handleCSS } from './Handle';
export const Handle2d = styled.div.attrs(({
  color,
  x,
  y
}) => ({
  style: {
    backgroundColor: color,
    transform: `translate(calc(${x}px - ${HANDLE_SIZE} / 2), calc(${y}px - ${HANDLE_SIZE} / 2))`
  }
})).withConfig({
  displayName: "Handle2d",
  componentId: "sc-1peqtvu-0"
})(_t || (_t = _`
  ${0}
`), handleCSS);
//# sourceMappingURL=Handle2d.js.map