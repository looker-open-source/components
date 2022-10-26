let _ = t => t,
    _t;

import React from 'react';
import styled from 'styled-components';
import { TreeItem, Tree, TreeCollection } from '..';
import { generateBorderRadius } from '../utils/generateBorderRadius';
const BorderRadiusOverrideTree = styled(Tree).withConfig({
  displayName: "BorderRadius__BorderRadiusOverrideTree",
  componentId: "sc-168pfgu-0"
})(_t || (_t = _`
  ${0}
`), ({
  theme
}) => generateBorderRadius('medium', theme));
export const BorderRadiusOverride = () => React.createElement(TreeCollection, null, React.createElement(BorderRadiusOverrideTree, {
  selected: true,
  label: React.createElement("strong", null, "Created"),
  defaultOpen: true,
  dividers: true
}, React.createElement(TreeItem, {
  selected: true
}, "Created Date"), React.createElement(TreeItem, {
  selected: true
}, "Created Month"), React.createElement(TreeItem, {
  selected: true
}, "Created Year"), React.createElement(TreeItem, {
  selected: true
}, "Created Quarter")));
//# sourceMappingURL=BorderRadius.js.map