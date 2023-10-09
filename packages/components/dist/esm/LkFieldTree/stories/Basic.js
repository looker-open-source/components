const _excluded = ["label", "defaultOpen"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
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