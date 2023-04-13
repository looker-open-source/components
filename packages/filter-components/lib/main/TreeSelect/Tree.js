"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TreeFactory = exports.Tree = void 0;
var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _components = require("@looker/components");
var _react = _interopRequireDefault(require("react"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _Section = require("./Section");
var _generate_sections = require("./utils/generate_sections");
var _templateObject;
var _excluded = ["tree", "onSectionClick", "onFieldClick"];
var TreeFactory = function TreeFactory(_ref) {
  var tree = _ref.tree,
    onSectionClick = _ref.onSectionClick,
    onFieldClick = _ref.onFieldClick,
    props = (0, _objectWithoutProperties2["default"])(_ref, _excluded);
  return _react["default"].createElement(_components.Box, props, tree ? (0, _generate_sections.generateSections)(tree, 0, onSectionClick, onFieldClick) : _react["default"].createElement(_components.Spinner, {
    mx: "auto"
  }));
};
exports.TreeFactory = TreeFactory;
var Tree = (0, _styledComponents["default"])(TreeFactory).withConfig({
  displayName: "Tree",
  componentId: "sc-ji2crs-0"
})(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  ", " ", " {\n    font-weight: ", ";\n    padding: 0;\n  }\n  & > ", " + ", " {\n    border-top: solid 1px ", ";\n  }\n"])), _Section.SectionContent, _Section.Section, function (_ref2) {
  var theme = _ref2.theme;
  return theme.fontWeights.normal;
}, _Section.Section, _Section.Section, function (_ref3) {
  var theme = _ref3.theme;
  return theme.colors.ui2;
});
exports.Tree = Tree;
//# sourceMappingURL=Tree.js.map