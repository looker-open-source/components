import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
const _excluded = ["children"];
import React from 'react';
import { TreeCollection, TreeItem, Tree } from '..';
import { Grid } from '../../Layout/Grid';

const Basic = _ref => {
  let {
    children
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  return React.createElement(TreeCollection, null, React.createElement(Tree, _extends({
    label: children,
    defaultOpen: true
  }, props), React.createElement(Tree, {
    disabled: true,
    label: React.createElement("strong", null, "Disabled Tree"),
    defaultOpen: true
  }, React.createElement(TreeItem, {
    disabled: true
  }, "Disabled TreeItem"), React.createElement(TreeItem, {
    selected: true
  }, "Selected TreeItem")), React.createElement(Tree, {
    selected: true,
    label: React.createElement("strong", null, "Selected Tree"),
    defaultOpen: true
  }, React.createElement(TreeItem, {
    disabled: true
  }, "Disabled TreeItem"), React.createElement(TreeItem, {
    selected: true
  }, "Selected TreeItem"))));
};

export const DisabledAndSelected = () => React.createElement(Grid, {
  columns: 3
}, React.createElement(Basic, null, React.createElement("strong", null, "Default")), React.createElement(Basic, {
  color: "key"
}, React.createElement("strong", null, "Key")), React.createElement(Basic, {
  color: "calculation"
}, React.createElement("strong", null, "Dimension")));
//# sourceMappingURL=DisabledAndSelected.js.map