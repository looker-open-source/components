"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SelectOptionDetail = void 0;
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _templateObject;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var SelectOptionDetail = _styledComponents["default"].div.withConfig({
  displayName: "SelectOptionDetail",
  componentId: "sc-unozyh-0"
})(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  align-items: center;\n  color: ", ";\n  display: flex;\n  font-size: ", ";\n  margin-left: auto;\n"])), function (_ref) {
  var theme = _ref.theme;
  return theme.colors.text2;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.fontSizes.xsmall;
});
exports.SelectOptionDetail = SelectOptionDetail;
//# sourceMappingURL=SelectOptionDetail.js.map