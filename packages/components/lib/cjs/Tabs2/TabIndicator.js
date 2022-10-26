"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TabIndicator = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _templateObject;

var TabIndicator = _styledComponents["default"].span.withConfig({
  displayName: "TabIndicator",
  componentId: "sc-1e6ezju-0"
})(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  background-color: ", ";\n  border-radius: 3px 3px 0 0;\n  bottom: 0;\n  height: 3px;\n  left: ", ";\n  position: absolute;\n  right: ", ";\n"])), function (_ref) {
  var selected = _ref.selected,
      theme = _ref.theme;
  return selected ? theme.colors.key : 'transparent';
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.space.u4;
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.space.u4;
});

exports.TabIndicator = TabIndicator;
//# sourceMappingURL=TabIndicator.js.map