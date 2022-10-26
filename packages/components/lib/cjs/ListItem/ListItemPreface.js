"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ListItemPreface = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _templateObject;

var ListItemPreface = _styledComponents["default"].p.withConfig({
  displayName: "ListItemPreface",
  componentId: "sc-l8cstm-0"
})(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  color: ", ";\n  font-size: ", ";\n  line-height: ", ";\n  margin: 0;\n"])), function (_ref) {
  var colors = _ref.theme.colors;
  return colors.text2;
}, function (_ref2) {
  var fontSizes = _ref2.theme.fontSizes;
  return fontSizes.xxsmall;
}, function (_ref3) {
  var lineHeights = _ref3.theme.lineHeights;
  return lineHeights.xxsmall;
});

exports.ListItemPreface = ListItemPreface;
//# sourceMappingURL=ListItemPreface.js.map