let _ = t => t,
    _t;

import styled from 'styled-components';
import { LkFieldTreeAccordionDisclosure } from './LkFieldTreeAccordionDisclosure';
import { LkFieldTree } from './LkFieldTree';
export const LkFieldGroupTree = styled(LkFieldTree).withConfig({
  displayName: "LkFieldGroupTree",
  componentId: "sc-1pe0vfg-0"
})(_t || (_t = _`
  > ${0} {
    /* Margin is to set the equivalent of the two icons (info and menu) 48px */
    margin-right: ${0};
  }
`), LkFieldTreeAccordionDisclosure, ({
  isOpen,
  selected
}) => {
  const DEFAULT_ICON_BUTTON_SIZE = 24;
  return !isOpen && selected ? `calc(${DEFAULT_ICON_BUTTON_SIZE}px * 2)` : undefined;
});
//# sourceMappingURL=LkFieldGroupTree.js.map