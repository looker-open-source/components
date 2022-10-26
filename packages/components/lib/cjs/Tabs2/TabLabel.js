"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TabLabel = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _templateObject;

var TabLabel = _styledComponents["default"].span.withConfig({
  displayName: "TabLabel",
  componentId: "sc-5qzqhg-0"
})(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  align-items: center;\n  display: inline-flex;\n  height: 100%;\n  padding: 0 ", ";\n"])), function (_ref) {
  var theme = _ref.theme;
  return theme.space.u4;
});

exports.TabLabel = TabLabel;
//# sourceMappingURL=TabLabel.js.map