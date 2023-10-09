"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = FieldSelectTree;
var _react = _interopRequireDefault(require("react"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _Tree = require("../Tree");
var _TreeCollection = require("../TreeCollection");
var _TreeItem = require("../TreeItem");
var _templateObject;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var ViewTree = (0, _styledComponents["default"])(_Tree.Tree).withConfig({
  displayName: "FieldSelectTree__ViewTree",
  componentId: "sc-1d8vzoe-0"
})(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  border-top: 1px solid ", ";\n  &:last-of-type {\n    border-bottom: 1px solid ", ";\n  }\n"])), function (_ref) {
  var theme = _ref.theme;
  return theme.colors.ui2;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.colors.ui2;
});
function FieldSelectTree() {
  return _react["default"].createElement(_TreeCollection.TreeCollection, null, _react["default"].createElement(ViewTree, {
    label: _react["default"].createElement("strong", null, "Orders")
  }, _react["default"].createElement(_Tree.Tree, {
    label: "Created"
  }, _react["default"].createElement(_TreeItem.TreeItem, {
    ripple: true,
    color: "dimension",
    colorOnHover: true,
    border: true
  }, "Created Date"), _react["default"].createElement(_TreeItem.TreeItem, {
    ripple: true,
    color: "dimension",
    colorOnHover: true,
    border: true
  }, "Created Month"), _react["default"].createElement(_TreeItem.TreeItem, {
    ripple: true,
    color: "dimension",
    colorOnHover: true,
    border: true
  }, "Created Year"), _react["default"].createElement(_TreeItem.TreeItem, {
    ripple: true,
    color: "dimension",
    colorOnHover: true,
    border: true
  }, "Created Quarter")), _react["default"].createElement(_TreeItem.TreeItem, {
    ripple: true,
    color: "dimension",
    colorOnHover: true,
    border: true
  }, "ID"), _react["default"].createElement(_TreeItem.TreeItem, {
    ripple: true,
    color: "dimension",
    colorOnHover: true,
    border: true
  }, "Status"), _react["default"].createElement(_TreeItem.TreeItem, {
    ripple: true,
    color: "measure",
    colorOnHover: true,
    border: true
  }, "Count")), _react["default"].createElement(ViewTree, {
    label: _react["default"].createElement("strong", null, "Users")
  }, _react["default"].createElement(_Tree.Tree, {
    label: "Created"
  }, _react["default"].createElement(_TreeItem.TreeItem, {
    ripple: true,
    color: "dimension",
    colorOnHover: true,
    border: true
  }, "Created Date"), _react["default"].createElement(_TreeItem.TreeItem, {
    ripple: true,
    color: "dimension",
    colorOnHover: true,
    border: true
  }, "Created Month"), _react["default"].createElement(_TreeItem.TreeItem, {
    ripple: true,
    color: "dimension",
    colorOnHover: true,
    border: true
  }, "Created Year"), _react["default"].createElement(_TreeItem.TreeItem, {
    ripple: true,
    color: "dimension",
    colorOnHover: true,
    border: true
  }, "Created Quarter")), _react["default"].createElement(_TreeItem.TreeItem, {
    ripple: true,
    color: "dimension",
    colorOnHover: true,
    border: true
  }, "ID"), _react["default"].createElement(_TreeItem.TreeItem, {
    ripple: true,
    color: "dimension",
    colorOnHover: true,
    border: true
  }, "First Name"), _react["default"].createElement(_TreeItem.TreeItem, {
    ripple: true,
    color: "measure",
    colorOnHover: true,
    border: true
  }, "Count")));
}
//# sourceMappingURL=FieldSelectTree.js.map