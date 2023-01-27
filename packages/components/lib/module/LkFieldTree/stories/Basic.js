import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
const _excluded = ["label", "defaultOpen"];

import React from 'react';
import { TreeCollection } from '../../Tree';
import { LkFieldItem, LkFieldTree } from '../';
export default function Basic(props) {
  const {
      label = React.createElement("strong", null, "Orders"),
      defaultOpen = true
    } = props,
    rest = _objectWithoutProperties(props, _excluded);
  return React.createElement(TreeCollection, null, React.createElement(LkFieldTree, _extends({
    label: label
  }, rest), React.createElement(LkFieldTree, {
    label: label,
    defaultOpen: true
  }, React.createElement(LkFieldItem, null, "ID"), React.createElement(LkFieldItem, null, "Status"), React.createElement(LkFieldTree, {
    label: React.createElement("strong", null, "Created"),
    defaultOpen: defaultOpen
  }, React.createElement(LkFieldItem, null, "Created Date"), React.createElement(LkFieldItem, null, "Created Month"), React.createElement(LkFieldItem, null, "Created Year"), React.createElement(LkFieldItem, null, "Created Quarter")))));
}
//# sourceMappingURL=Basic.js.map