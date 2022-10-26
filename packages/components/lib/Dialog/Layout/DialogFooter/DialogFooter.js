let _ = t => t,
    _t;

import styled from 'styled-components';
import { ModalFooter } from '../../../Modal/ModalFooter';
export const DialogFooter = styled(ModalFooter).attrs(({
  px: _px = 'xlarge',
  py: _py = 'large'
}) => ({
  px: _px,
  py: _py
})).withConfig({
  displayName: "DialogFooter",
  componentId: "sc-1em1awf-0"
})(_t || (_t = _``));
//# sourceMappingURL=DialogFooter.js.map