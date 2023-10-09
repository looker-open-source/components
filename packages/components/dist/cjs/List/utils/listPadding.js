"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.listPadding = void 0;
var _styledComponents = require("styled-components");
var _Divider = require("../../Divider");
var _templateObject;
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var listPadding = (0, _styledComponents.css)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  > :first-child {\n    margin-top: ", ";\n\n    ", " {\n      display: none;\n    }\n  }\n\n  > :last-child {\n    margin-bottom: ", ";\n\n    ", " {\n      display: none;\n    }\n  }\n"])), function (_ref) {
  var theme = _ref.theme;
  return theme.space.u2;
}, _Divider.Divider, function (_ref2) {
  var theme = _ref2.theme;
  return theme.space.u2;
}, _Divider.Divider);
exports.listPadding = listPadding;
//# sourceMappingURL=listPadding.js.map