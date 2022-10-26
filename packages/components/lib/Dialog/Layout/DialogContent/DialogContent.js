let _ = t => t,
    _t;

import styled from 'styled-components';
import { layout } from '@looker/design-tokens';
import { ModalContent } from '../../../Modal/ModalContent';
const dialogContentDefaults = {
  px: 'u8',
  py: 'u5'
};
export const DialogContent = styled(ModalContent).attrs(({
  p,
  py,
  px
}) => ({
  px: p || px || dialogContentDefaults.px,
  py: p || py || dialogContentDefaults.py
})).withConfig({
  displayName: "DialogContent",
  componentId: "sc-1meus4a-0"
})(_t || (_t = _`
  ${0}
`), layout);
//# sourceMappingURL=DialogContent.js.map