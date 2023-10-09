let _ = t => t,
  _t;
import React from 'react';
import styled from 'styled-components';
import { Tree } from '../Tree';
import { TreeCollection } from '../TreeCollection';
import { TreeItem } from '../TreeItem';
const ViewTree = styled(Tree).withConfig({
  displayName: "FieldSelectTree__ViewTree",
  componentId: "sc-1d8vzoe-0"
})(_t || (_t = _`
  border-top: 1px solid ${0};
  &:last-of-type {
    border-bottom: 1px solid ${0};
  }
`), ({
  theme
}) => theme.colors.ui2, ({
  theme
}) => theme.colors.ui2);
export default function FieldSelectTree() {
  return React.createElement(TreeCollection, null, React.createElement(ViewTree, {
    label: React.createElement("strong", null, "Orders")
  }, React.createElement(Tree, {
    label: "Created"
  }, React.createElement(TreeItem, {
    ripple: true,
    color: "dimension",
    colorOnHover: true,
    border: true
  }, "Created Date"), React.createElement(TreeItem, {
    ripple: true,
    color: "dimension",
    colorOnHover: true,
    border: true
  }, "Created Month"), React.createElement(TreeItem, {
    ripple: true,
    color: "dimension",
    colorOnHover: true,
    border: true
  }, "Created Year"), React.createElement(TreeItem, {
    ripple: true,
    color: "dimension",
    colorOnHover: true,
    border: true
  }, "Created Quarter")), React.createElement(TreeItem, {
    ripple: true,
    color: "dimension",
    colorOnHover: true,
    border: true
  }, "ID"), React.createElement(TreeItem, {
    ripple: true,
    color: "dimension",
    colorOnHover: true,
    border: true
  }, "Status"), React.createElement(TreeItem, {
    ripple: true,
    color: "measure",
    colorOnHover: true,
    border: true
  }, "Count")), React.createElement(ViewTree, {
    label: React.createElement("strong", null, "Users")
  }, React.createElement(Tree, {
    label: "Created"
  }, React.createElement(TreeItem, {
    ripple: true,
    color: "dimension",
    colorOnHover: true,
    border: true
  }, "Created Date"), React.createElement(TreeItem, {
    ripple: true,
    color: "dimension",
    colorOnHover: true,
    border: true
  }, "Created Month"), React.createElement(TreeItem, {
    ripple: true,
    color: "dimension",
    colorOnHover: true,
    border: true
  }, "Created Year"), React.createElement(TreeItem, {
    ripple: true,
    color: "dimension",
    colorOnHover: true,
    border: true
  }, "Created Quarter")), React.createElement(TreeItem, {
    ripple: true,
    color: "dimension",
    colorOnHover: true,
    border: true
  }, "ID"), React.createElement(TreeItem, {
    ripple: true,
    color: "dimension",
    colorOnHover: true,
    border: true
  }, "First Name"), React.createElement(TreeItem, {
    ripple: true,
    color: "measure",
    colorOnHover: true,
    border: true
  }, "Count")));
}
//# sourceMappingURL=FieldSelectTree.js.map