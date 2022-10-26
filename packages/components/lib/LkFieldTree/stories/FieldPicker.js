import _extends from "@babel/runtime/helpers/extends";
import React from 'react';
import { Aside, Box2, Paragraph } from '../..';
import { TreeBranch, TreeCollection } from '../../Tree';
import { LkFieldGroupTree, LkFieldViewTree } from '..';
import { FieldPickerItem } from './FieldPickerItem';

const FieldGroupHeading = props => React.createElement(Paragraph, _extends({
  color: "text1",
  fontSize: "xxsmall",
  fontWeight: "semiBold",
  pt: "medium",
  pb: "xxsmall",
  pl: "xxsmall",
  truncate: true,
  style: {
    lineHeight: '0.75rem'
  }
}, props));

const fields = React.createElement(React.Fragment, null, React.createElement(TreeBranch, null, React.createElement(FieldGroupHeading, {
  pt: "none"
}, "DIMENSIONS")), React.createElement(LkFieldGroupTree, {
  color: "dimension",
  selected: true,
  label: React.createElement(Box2, null, "Created")
}, React.createElement(FieldPickerItem, null, "Created Date"), React.createElement(FieldPickerItem, {
  selected: true
}, "Created Month"), React.createElement(FieldPickerItem, null, "Created Year")), React.createElement(FieldPickerItem, null, "City"), React.createElement(FieldPickerItem, {
  selected: true,
  filter: true
}, "This is a really long field name to show that truncation is working as desired. It's not a realistic example but it lets our tests know that things are working as-desired"), React.createElement(FieldPickerItem, null, "ID"), React.createElement(TreeBranch, null, React.createElement(FieldGroupHeading, {
  color: "measure"
}, "MEASURES")), React.createElement(FieldPickerItem, {
  color: "measure",
  selected: true
}, "Sum"), React.createElement(FieldPickerItem, {
  color: "measure",
  filter: true
}, "Max"), React.createElement(TreeBranch, null, React.createElement(FieldGroupHeading, {
  color: "calculation"
}, "CALCULATED")), React.createElement(FieldPickerItem, {
  pivot: true,
  color: "calculation"
}, "Calc"));
export const FieldPicker = () => React.createElement(Aside, null, React.createElement(TreeCollection, null, React.createElement(LkFieldViewTree, {
  defaultOpen: true,
  detail: 3,
  label: React.createElement("strong", null, "Orders")
}, fields), React.createElement(LkFieldViewTree, {
  label: React.createElement("strong", null, "Order Items")
}, fields), React.createElement(LkFieldViewTree, {
  label: React.createElement("strong", null, "Users")
}, fields)));
//# sourceMappingURL=FieldPicker.js.map