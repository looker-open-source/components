"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ListItemWrapper = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _templateObject;

var ListItemWrapper = _styledComponents["default"].li.attrs(function (_ref) {
  var _ref$role = _ref.role,
      role = _ref$role === void 0 ? 'none' : _ref$role,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'text5' : _ref$color;
  return {
    color: color,
    role: role
  };
}).withConfig({
  displayName: "ListItemWrapper",
  componentId: "sc-o8p2ju-0"
})(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  align-items: center;\n  display: flex;\n  font-size: ", ";\n  font-weight: ", ";\n  list-style-type: none;\n  outline: none;\n  text-decoration: none;\n\n  &[disabled] {\n    & > * {\n      cursor: not-allowed;\n    }\n\n    &:hover {\n      color: ", ";\n    }\n  }\n"])), function (_ref2) {
  var theme = _ref2.theme;
  return theme.fontSizes.small;
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.fontWeights.normal;
}, function (_ref4) {
  var colors = _ref4.theme.colors;
  return colors.text1;
});

exports.ListItemWrapper = ListItemWrapper;
//# sourceMappingURL=ListItemWrapper.js.map