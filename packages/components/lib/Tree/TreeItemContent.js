let _ = t => t,
    _t;

import styled from 'styled-components';
import { ListItemContent } from '../ListItem';
import { generateIndent } from './utils';
export const TreeItemContent = styled(ListItemContent).attrs(({
  role: _role = 'treeitem'
}) => ({
  role: _role
})).withConfig({
  displayName: "TreeItemContent",
  componentId: "sc-1vqoyvy-0"
})(_t || (_t = _`
  ${0}
  display: flex;
  flex: 1;
  padding-right: 0;

  &[disabled] {
    color: ${0};
    cursor: not-allowed;
  }
`), ({
  density,
  depth
}) => generateIndent({
  density,
  depth
}), ({
  theme
}) => theme.colors.text1);
//# sourceMappingURL=TreeItemContent.js.map