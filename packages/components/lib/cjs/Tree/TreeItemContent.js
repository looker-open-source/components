"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TreeItemContent = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _ListItem = require("../ListItem");

var _utils = require("./utils");

var _templateObject;

var TreeItemContent = (0, _styledComponents["default"])(_ListItem.ListItemContent).attrs(function (_ref) {
  var _ref$role = _ref.role,
      role = _ref$role === void 0 ? 'treeitem' : _ref$role;
  return {
    role: role
  };
}).withConfig({
  displayName: "TreeItemContent",
  componentId: "sc-1vqoyvy-0"
})(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  ", "\n  display: flex;\n  flex: 1;\n  padding-right: 0;\n\n  &[disabled] {\n    color: ", ";\n    cursor: not-allowed;\n  }\n"])), function (_ref2) {
  var density = _ref2.density,
      depth = _ref2.depth;
  return (0, _utils.generateIndent)({
    density: density,
    depth: depth
  });
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.colors.text1;
});
exports.TreeItemContent = TreeItemContent;
//# sourceMappingURL=TreeItemContent.js.map