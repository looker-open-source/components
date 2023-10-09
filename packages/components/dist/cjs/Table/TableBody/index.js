"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TableBody = void 0;
var _designTokens = require("@looker/design-tokens");
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _tableSection = require("../tableSection");
var _templateObject;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var TableBody = _styledComponents["default"].tbody.withConfig({
  shouldForwardProp: _designTokens.shouldForwardProp,
  displayName: "TableBody",
  componentId: "sc-1c7fa9v-0"
}).attrs(function (_ref) {
  var _ref$textAlign = _ref.textAlign,
    textAlign = _ref$textAlign === void 0 ? 'left' : _ref$textAlign;
  return {
    textAlign: textAlign
  };
})(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  ", "\n"])), _tableSection.tableSectionCSS);
exports.TableBody = TableBody;
//# sourceMappingURL=index.js.map