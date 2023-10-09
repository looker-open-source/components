const _excluded = ["children"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
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
export default function DisabledAndSelected() {
  return React.createElement(Grid, {
    columns: 3
  }, React.createElement(Basic, null, React.createElement("strong", null, "Default")), React.createElement(Basic, {
    color: "key"
  }, React.createElement("strong", null, "Key")), React.createElement(Basic, {
    color: "calculation"
  }, React.createElement("strong", null, "Dimension")));
}
//# sourceMappingURL=DisabledAndSelected.js.map