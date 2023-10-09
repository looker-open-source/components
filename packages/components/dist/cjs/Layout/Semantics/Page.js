"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Page = void 0;
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _Layout = require("./Layout");
var _templateObject;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var Page = (0, _styledComponents["default"])(_Layout.Layout).withConfig({
  displayName: "Page",
  componentId: "sc-rsmni7-0"
})(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  background: ", ";\n  font-family: ", ";\n\n  ", "\n  width: 100%;\n"])), function (_ref) {
  var theme = _ref.theme;
  return theme.colors.pageBackground;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.fonts.body;
}, function (_ref3) {
  var fixed = _ref3.fixed;
  return fixed && "height: 100vh;";
});
exports.Page = Page;
//# sourceMappingURL=Page.js.map