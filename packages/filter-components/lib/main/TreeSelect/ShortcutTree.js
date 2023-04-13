"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ShortcutTree = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));
var _react = _interopRequireDefault(require("react"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _components = require("@looker/components");
var _Field = require("./Field");
var _excluded = ["tree", "onFieldClick"],
  _excluded2 = ["id", "label", "value"];
var _templateObject;
var ShortcutTree = (0, _styledComponents["default"])(function (_ref) {
  var tree = _ref.tree,
    onFieldClick = _ref.onFieldClick,
    props = (0, _objectWithoutProperties2["default"])(_ref, _excluded);
  return _react["default"].createElement(_components.Box, props, tree.map(function (_ref2) {
    var id = _ref2.id,
      label = _ref2.label,
      value = _ref2.value,
      field = (0, _objectWithoutProperties2["default"])(_ref2, _excluded2);
    return _react["default"].createElement(_Field.Field, (0, _extends2["default"])({}, field, {
      key: id,
      displayLabel: label,
      label: value,
      alignItems: "center",
      pl: "medium",
      onClick: onFieldClick
    }));
  }));
}).withConfig({
  displayName: "ShortcutTree",
  componentId: "sc-1wljjho-0"
})(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  ", " {\n    border-left: none;\n  }\n\n  border-bottom: solid 1px ", ";\n"])), _Field.Field, function (_ref3) {
  var theme = _ref3.theme;
  return theme.colors.ui2;
});
exports.ShortcutTree = ShortcutTree;
//# sourceMappingURL=ShortcutTree.js.map