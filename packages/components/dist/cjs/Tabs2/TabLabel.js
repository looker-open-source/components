"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TabLabel = void 0;
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _templateObject;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var TabLabel = _styledComponents["default"].span.withConfig({
  displayName: "TabLabel",
  componentId: "sc-5qzqhg-0"
})(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  align-items: center;\n  display: inline-flex;\n  height: 100%;\n  padding: 0 ", ";\n"])), function (_ref) {
  var theme = _ref.theme;
  return theme.space.u4;
});
exports.TabLabel = TabLabel;
//# sourceMappingURL=TabLabel.js.map