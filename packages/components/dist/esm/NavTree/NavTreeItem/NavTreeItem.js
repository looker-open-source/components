const _excluded = ["ripple", "truncate"];
let _ = t => t,
  _t,
  _t2;
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
import React, { useContext } from 'react';
import styled, { useTheme } from 'styled-components';
import { generateIndentCalculation } from '../../Tree/utils/generateIndent';
import { TreeContext } from '../../Tree/TreeContext';
import { ListItemDetail, listItemDimensions } from '../../ListItem';
import { TreeItem } from '../../Tree';
import { accordionDimensions } from '../../Accordion2/accordionDimensions';
import { TreeItemContent } from '../../Tree/TreeItemContent';
import { INDICATOR_SPACER } from '../NavTree';
const IndentOverrideTreeItem = styled(TreeItem).withConfig({
  shouldForwardProp: prop => !['depth', 'density', 'gap', 'indicatorGap', 'parentIcon', 'px'].includes(prop),
  displayName: "NavTreeItem__IndentOverrideTreeItem",
  componentId: "sc-1eonsb8-0"
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
  componentId: "sc-1eonsb8-1"
})(_t2 || (_t2 = _``));
//# sourceMappingURL=NavTreeItem.js.map