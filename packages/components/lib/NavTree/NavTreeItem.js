import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
const _excluded = ["ripple", "truncate"];

let _ = t => t,
    _t,
    _t2;

import React, { useContext } from 'react';
import styled, { useTheme } from 'styled-components';
import { generateIndentCalculation } from '../Tree/utils/generateIndent';
import { TreeContext } from '../Tree/TreeContext';
import { ListItemDetail, listItemDimensions } from '../ListItem';
import { TreeItem } from '../Tree';
import { accordionDimensions } from '../Accordion2/accordionDimensions';
import { TreeItemContent } from '../Tree/TreeItemContent';
import { INDICATOR_SPACER } from './NavTree';
const IndentOverrideTreeItem = styled(TreeItem).withConfig({
  shouldForwardProp: prop => !['depth', 'density', 'gap', 'indicatorGap', 'parentIcon', 'px'].includes(prop),
  displayName: "NavTreeItem__IndentOverrideTreeItem",
  componentId: "sc-1yihvfy-0"
})(_t || (_t = _`
  ${0} {
    ${0}
  }

  ${0} {
    padding-right: ${0};
  }
`), TreeItemContent, ({
  depth: _depth = 0,
  density,
  gap,
  indicatorGap,
  parentIcon,
  theme
}) => `padding-left: calc(${generateIndentCalculation(parentIcon ? _depth + 1 : _depth, density || theme.defaults.density, theme)} + ${theme.space[gap]} - ${theme.space[indicatorGap]} + ${INDICATOR_SPACER});`, ListItemDetail, ({
  px,
  theme
}) => theme.space[px]);
export const NavTreeItem = styled(_ref => {
  let {
    ripple = true,
    truncate = true
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  const theme = useTheme();
  const {
    depth
  } = useContext(TreeContext);
  const {
    gap,
    px
  } = listItemDimensions(theme.defaults.density);
  const {
    indicatorGap
  } = accordionDimensions();
  return React.createElement(IndentOverrideTreeItem, _extends({
    depth: depth,
    color: "key",
    gap: gap,
    indicatorGap: indicatorGap,
    itemRole: props.href ? 'link' : props.itemRole,
    px: px,
    ripple: ripple,
    truncate: truncate
  }, props));
}).withConfig({
  displayName: "NavTreeItem",
  componentId: "sc-1yihvfy-1"
})(_t2 || (_t2 = _``));
//# sourceMappingURL=NavTreeItem.js.map