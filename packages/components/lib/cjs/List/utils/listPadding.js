"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.listPadding = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _styledComponents = require("styled-components");

var _Divider = require("../../Divider");

var _templateObject;

var listPadding = (0, _styledComponents.css)(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  > :first-child {\n    margin-top: ", ";\n\n    ", " {\n      display: none;\n    }\n  }\n\n  > :last-child {\n    margin-bottom: ", ";\n\n    ", " {\n      display: none;\n    }\n  }\n"])), function (_ref) {
  var theme = _ref.theme;
  return theme.space.u2;
}, _Divider.Divider, function (_ref2) {
  var theme = _ref2.theme;
  return theme.space.u2;
}, _Divider.Divider);
exports.listPadding = listPadding;
//# sourceMappingURL=listPadding.js.map